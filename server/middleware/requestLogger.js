const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Check if we're in a serverless environment
const isServerless = process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME;

// Create logs directory only if not in serverless environment
let logsDir;
let accessLogStream;
let errorLogStream;

if (!isServerless) {
  logsDir = path.join(__dirname, '..', 'logs');
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
    console.log('Created logs directory:', logsDir);
  }
  
  // Create write streams only for non-serverless
  accessLogStream = fs.createWriteStream(
    path.join(logsDir, 'access.log'), 
    { flags: 'a' }
  );
  
  errorLogStream = fs.createWriteStream(
    path.join(logsDir, 'error.log'), 
    { flags: 'a' }
  );
}

// Custom format for logging
morgan.token('reqId', (req) => req.reqId || 'unknown');
morgan.token('userId', (req) => req.user?.id || 'anonymous');

// Create a simple log format
const logFormat = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" reqId=:reqId userId=:userId';

// Middleware to add request ID
const addRequestId = async (req, res, next) => {
  try {
    const { nanoid } = await import('nanoid');
    req.reqId = nanoid(8);
    res.setHeader('X-Request-ID', req.reqId);
    next();
  } catch (error) {
    console.error('Error generating request ID:', error);
    // Fallback ID
    req.reqId = Math.random().toString(36).substr(2, 8);
    res.setHeader('X-Request-ID', req.reqId);
    next();
  }
};

// Standard request logger
const requestLogger = isServerless 
  ? morgan(logFormat) // Log to console in serverless
  : morgan(logFormat, {
      stream: accessLogStream,
      skip: (req, res) => req.url === '/health' // Skip health checks
    });

// Error logger (only logs 4xx and 5xx responses)
const errorLogger = isServerless
  ? morgan(logFormat, { skip: (req, res) => res.statusCode < 400 }) // Console only in serverless
  : morgan(logFormat, {
      stream: errorLogStream,
      skip: (req, res) => res.statusCode < 400
    });

// Security logger for suspicious activity
const securityLogger = (req, res, next) => {
  // Log suspicious patterns
  const suspiciousPatterns = [
    /script.*alert/i,
    /union.*select/i,
    /drop.*table/i,
    /<script/i,
    /javascript:/i
  ];
  
  const url = req.url.toLowerCase();
  const userAgent = (req.get('User-Agent') || '').toLowerCase();
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(url) || pattern.test(userAgent)) {
      const logEntry = {
        timestamp: new Date().toISOString(),
        type: 'SECURITY_ALERT',
        ip: req.ip || req.connection.remoteAddress,
        method: req.method,
        url: req.url,
        userAgent: req.get('User-Agent'),
        reqId: req.reqId,
        pattern: pattern.source
      };
      
      // In serverless, just log to console
      if (isServerless) {
        console.warn('SECURITY_ALERT:', logEntry);
      } else {
        fs.appendFileSync(
          path.join(logsDir, 'security.log'), 
          JSON.stringify(logEntry) + '\n'
        );
      }
    }
  }
  
  next();
};

module.exports = {
  addRequestId,
  requestLogger,
  errorLogger,
  securityLogger
};

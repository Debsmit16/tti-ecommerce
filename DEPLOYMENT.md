# TTI Academy Merchandise Store - Deployment Guide

## 🚀 Project Overview
Official merchandise store for Tending To Infinity Academy built with Next.js 15, Node.js/Express, and SQLite (Prisma ORM).

---

## 📋 Prerequisites

### Required Software:
- **Node.js**: v18.17 or higher
- **npm**: v9.0 or higher
- **Git**: Latest version

### Required Accounts for Production:
- **Vercel** (Frontend hosting - Free tier available)
- **Railway/Render** (Backend API hosting - Free tier available)
- **Neon/Supabase** (PostgreSQL database - Free tier available)

---

## 🔧 Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Debsmit16/tti-ecommerce.git
cd tti-ecommerce
```

### 2. Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd server
npm install
cd ..
```

### 3. Environment Variables

**Root `.env` file** (Frontend):
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
NODE_ENV=development
DATABASE_URL="file:C:/YOUR_PATH/server/prisma/dev.db"
NEXTAUTH_SECRET=your_generated_secret_here
NEXTAUTH_URL=http://localhost:3000
```

**Generate NEXTAUTH_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Server `.env` file** (Backend - `server/.env`):
```env
DATABASE_URL="file:./prisma/dev.db"
PORT=3001
NODE_ENV=development
```

### 4. Database Setup

```bash
# Navigate to server directory
cd server

# Run Prisma migrations
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate

# Create admin user
node create-admin.js
```

**Default Admin Credentials:**
- Email: `admin@tti.com`
- Password: `admin123`
- ⚠️ **Change these immediately after first login!**

### 5. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend:**
```bash
# From root directory
npm run dev
# OR if you face memory issues:
$env:NODE_OPTIONS="--max-old-space-size=4096"; npm run dev
```

**Access the app:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Admin Dashboard: http://localhost:3000/admin

---

## 🌐 Production Deployment

### Option 1: Vercel (Frontend) + Railway (Backend) + Neon (Database)

#### A. Database Setup (Neon PostgreSQL)

1. **Sign up at**: https://neon.tech
2. **Create a new project**
3. **Get connection string** (looks like):
   ```
   postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```

#### B. Backend Deployment (Railway)

1. **Sign up at**: https://railway.app
2. **Create New Project** → Deploy from GitHub repo
3. **Select**: `Debsmit16/tti-ecommerce`
4. **Root Directory**: Set to `server`
5. **Add Environment Variables**:
   ```env
   DATABASE_URL=postgresql://user:password@ep-xxx.neon.tech/neondb?sslmode=require
   PORT=3001
   NODE_ENV=production
   ```
6. **Add Start Command**: `npm start`
7. **Deploy** - You'll get a URL like: `https://tti-backend.up.railway.app`

8. **Run Migrations** (One-time setup):
   - Use Railway's CLI or add a build script:
   ```bash
   railway run npx prisma migrate deploy
   ```

9. **Create Admin User** (Run once via Railway shell):
   ```bash
   railway run node create-admin.js
   ```

#### C. Frontend Deployment (Vercel)

1. **Sign up at**: https://vercel.com
2. **Import Project** from GitHub: `Debsmit16/tti-ecommerce`
3. **Framework Preset**: Next.js
4. **Root Directory**: Keep as `.` (root)
5. **Add Environment Variables**:
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://tti-backend.up.railway.app
   NODE_ENV=production
   DATABASE_URL=postgresql://user:password@ep-xxx.neon.tech/neondb?sslmode=require
   NEXTAUTH_SECRET=your_production_secret_here
   NEXTAUTH_URL=https://tti-store.vercel.app
   ```
6. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
7. **Deploy**

#### D. Update Backend CORS (Important!)

Edit `server/app.js` to allow your Vercel domain:
```javascript
app.use(cors({
  origin: ['https://tti-store.vercel.app', 'http://localhost:3000'],
  credentials: true
}));
```

Commit and push to redeploy.

---

### Option 2: Full Stack on Render (Alternative)

1. **Database**: Use Neon (same as above)
2. **Backend**: 
   - Create Web Service on Render
   - Connect GitHub repo
   - Root directory: `server`
   - Build: `npm install`
   - Start: `npm start`
3. **Frontend**:
   - Create Web Service on Render
   - Connect GitHub repo
   - Root directory: `.` (root)
   - Build: `npm install && npm run build`
   - Start: `npm start`

---

## 🔐 Required Credentials & Configuration

### Production Environment Variables Checklist:

#### Frontend (.env):
- ✅ `NEXT_PUBLIC_API_BASE_URL` - Your backend URL
- ✅ `DATABASE_URL` - PostgreSQL connection string
- ✅ `NEXTAUTH_SECRET` - Random 32+ character string
- ✅ `NEXTAUTH_URL` - Your frontend URL
- ✅ `NODE_ENV=production`

#### Backend (server/.env):
- ✅ `DATABASE_URL` - PostgreSQL connection string (same as frontend)
- ✅ `PORT` - Usually 3001 or assigned by platform
- ✅ `NODE_ENV=production`

### Security Checklist:
- [ ] Change default admin password
- [ ] Generate new NEXTAUTH_SECRET for production
- [ ] Enable CORS only for your domains
- [ ] Use HTTPS for all connections
- [ ] Keep .env files out of git (.gitignore configured)

---

## 📊 Database Schema

### Main Tables:
- **User** - Authentication & roles (admin/user)
- **Product** - Merchandise items
- **Category** - Product categories
- **Order** - Customer orders
- **Wishlist** - User wishlists
- **Notification** - System notifications
- **Merchant** - Vendor management

### Migrations:
```bash
# Development
npx prisma migrate dev

# Production
npx prisma migrate deploy

# View database
npx prisma studio
```

---

## 🎨 Design Customization

The website uses TTI Academy branding:
- Primary Purple: `#7C3AED`
- Secondary Purple: `#8B5CF6`
- Accent Purple: `#A78BFA`
- Font: Outfit & Inter (Google Fonts)

To customize:
- Colors: Edit `tailwind.config.ts`
- Logo: Replace files in `/public/`
- Components: Edit files in `/components/`

---

## 📝 Post-Deployment Tasks

1. **Test Admin Login**
   - URL: `https://your-domain.com/admin`
   - Use default credentials, then change password

2. **Add Products**
   - Go to Admin → Products → Add New Product
   - Upload product images
   - Set pricing and inventory

3. **Configure Categories**
   - Admin → Categories
   - Add merchandise categories (Apparel, Accessories, Study Gear, etc.)

4. **Test Checkout Flow**
   - Add products to cart
   - Test checkout process
   - Verify order creation

5. **Monitor Logs**
   - Check server logs for errors
   - Monitor database connections
   - Set up error tracking (Sentry recommended)

---

## 🐛 Common Issues & Solutions

### Issue: "Database connection error"
**Solution**: Verify DATABASE_URL is correct and database is accessible. Check SSL mode for production.

### Issue: "401 Unauthorized" on login
**Solution**: Ensure both frontend and backend use the same DATABASE_URL. Restart servers after .env changes.

### Issue: "CORS error"
**Solution**: Add your frontend domain to CORS whitelist in `server/app.js`.

### Issue: Memory issues on build
**Solution**: Increase Node memory: `NODE_OPTIONS="--max-old-space-size=4096" npm run build`

---

## 📞 Support

For issues or questions:
- GitHub Issues: https://github.com/Debsmit16/tti-ecommerce/issues
- Email: admin@tti.com

---

## 📄 License

This project is based on the open-source ecommerce template by Kuzma02.
Customized for Tending To Infinity Academy.

---

**Last Updated**: January 1, 2026
**Version**: 2.0 - TTI Custom Build

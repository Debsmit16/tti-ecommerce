// *********************
// Role of the component: Product item component 
// Name of the component: ProductItem.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ProductItem product={product} color={color} />
// Input parameters: { product: Product; color: string; }
// Output: Product item component that contains product image, title, link to the single product page, price, button...
// *********************

import Image from "next/image";
import React from "react";
import Link from "next/link";

import { sanitize } from "@/lib/sanitize";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-y-3 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 group">
      <Link href={`/product/${product.slug}`} className="overflow-hidden rounded-lg">
        <Image
          src={
            product.mainImage
              ? `/${product.mainImage}`
              : "/product_placeholder.jpg"
          }
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-[280px] group-hover:scale-105 transition-transform duration-300"
          alt={sanitize(product?.title) || "Product image"}
        />
      </Link>
      <Link
        href={`/product/${product.slug}`}
        className={
          color === "black"
            ? `text-lg text-tti-dark font-semibold mt-2 uppercase hover:text-tti-primary transition-colors text-center`
            : `text-lg text-white font-semibold mt-2 uppercase hover:text-tti-accent transition-colors text-center`
        }
      >
        {sanitize(product.title)}
      </Link>
      <p
        className={
          color === "black"
            ? "text-xl text-tti-primary font-bold"
            : "text-xl text-white font-bold"
        }
      >
        ₹{product.price}
      </p>

  
      <Link
        href={`/product/${product?.slug}`}
        className="block flex justify-center items-center w-full uppercase bg-tti-primary px-4 py-3 text-sm rounded-lg font-bold text-white shadow-md hover:bg-tti-secondary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-tti-accent transition-all duration-300 transform hover:-translate-y-1"
      >
        <p>View Product</p>
      </Link>
    </div>
  );
};

export default ProductItem;

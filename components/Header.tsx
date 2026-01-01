// *********************
// Role of the component: Header component
// Name of the component: Header.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Header />
// Input parameters: no input parameters
// Output: Header component
// *********************

"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";
import Image from "next/image";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { FaBell } from "react-icons/fa6";

import CartElement from "./CartElement";
import NotificationBell from "./NotificationBell";
import HeartElement from "./HeartElement";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import apiClient from "@/lib/api";

const Header = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const { wishlist, setWishlist, wishQuantity } = useWishlistStore();

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Logout successful!");
  };

  // getting all wishlist items by user id
  const getWishlistByUserId = async (id: string) => {
    const response = await apiClient.get(`/api/wishlist/${id}`, {
      cache: "no-store",
    });
    const wishlist = await response.json();
    const productArray: {
      id: string;
      title: string;
      price: number;
      image: string;
      slug:string
      stockAvailabillity: number;
    }[] = [];

    return; // temporary disable wishlist fetching while the issue is being resolved
    
    wishlist.map((item: any) => productArray.push({id: item?.product?.id, title: item?.product?.title, price: item?.product?.price, image: item?.product?.mainImage, slug: item?.product?.slug, stockAvailabillity: item?.product?.inStock}));
    
    setWishlist(productArray);
  };

  // getting user by email so I can get his user id
  const getUserByEmail = async () => {
    if (session?.user?.email) {
      
      apiClient.get(`/api/users/email/${session?.user?.email}`, {
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((data) => {
          getWishlistByUserId(data?.id);
        });
    }
  };

  useEffect(() => {
    getUserByEmail();
  }, [session?.user?.email, wishlist.length]);

  return (
    <header className="bg-white">
      <HeaderTop />
      {pathname.startsWith("/admin") === false && (
        <div className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-sm bg-white/95">
          <div className="h-24 flex items-center justify-between px-8 lg:px-16 max-md:px-6 max-lg:flex-col max-lg:gap-y-4 max-lg:justify-center max-lg:h-auto max-lg:py-6 max-w-screen-2xl mx-auto">
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <img 
                src="/logo v1 svg.svg" 
                width={240} 
                height={240} 
                alt="TTI Merchandise Store" 
                className="hover:opacity-80 transition-opacity duration-300 max-lg:w-48" 
              />
            </Link>
            <div className="flex gap-x-6 items-center flex-shrink-0 ml-auto">
              <NotificationBell />
              <HeartElement wishQuantity={wishQuantity} />
              <CartElement />
            </div>
          </div>
        </div>
      )}
      {pathname.startsWith("/admin") === true && (
        <div className="flex justify-between h-24 bg-white shadow-md items-center px-8 lg:px-16 max-[1320px]:px-10 max-w-screen-2xl mx-auto max-[400px]:px-5 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
          <Link href="/" className="hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/logo v1.png"
              width={130}
              height={130}
              alt="TTI Merchandise"
              className="w-56 h-auto"
            />
          </Link>
          <div className="flex gap-x-5 items-center">
            <NotificationBell />
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="w-10 hover:opacity-80 transition-opacity cursor-pointer">
                <Image
                  src="/randomuser.jpg"
                  alt="profile photo"
                  width={40}
                  height={40}
                  className="w-full h-full rounded-full border-2 border-tti-primary ring-2 ring-tti-primary ring-opacity-30"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow-xl bg-white rounded-xl w-52 border border-gray-100 mt-2"
              >
                <li>
                  <Link href="/admin" className="hover:bg-tti-primary hover:text-white transition-colors rounded-lg py-3">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a className="hover:bg-tti-primary hover:text-white transition-colors rounded-lg py-3">Profile</a>
                </li>
                <li onClick={handleLogout}>
                  <a href="#" className="hover:bg-red-500 hover:text-white transition-colors rounded-lg py-3">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

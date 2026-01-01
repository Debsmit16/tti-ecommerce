// *********************
// Role of the component: Search input element located in the header but it can be used anywhere in your application
// Name of the component: SearchInput.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <SearchInput />
// Input parameters: no input parameters
// Output: form with search input and button
// *********************

"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { sanitize } from "@/lib/sanitize";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  // function for modifying URL for searching products
  const searchProducts = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Sanitize the search input before using it in URL
    const sanitizedSearch = sanitize(searchInput);
    router.push(`/search?search=${encodeURIComponent(sanitizedSearch)}`);
    setSearchInput("");
  };

  return (
    <form className="flex w-full justify-center max-w-2xl" onSubmit={searchProducts}>
      <div className={`flex items-center w-full bg-white border-2 rounded-full transition-all duration-300 shadow-sm ${
        isFocused ? 'border-tti-primary shadow-lg scale-105' : 'border-gray-200 hover:border-gray-300'
      }`}>
        <FaSearch className="ml-5 text-gray-400" />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search for products..."
          className="flex-1 bg-transparent px-4 py-3 outline-none text-gray-700 placeholder-gray-400"
        />
        <button 
          type="submit" 
          className="bg-tti-primary text-white px-6 py-3 rounded-full m-1 hover:bg-tti-secondary transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchInput;

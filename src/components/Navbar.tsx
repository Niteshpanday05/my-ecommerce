"use client";

import Link from "next/link";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
 return(
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
  <nav className="mx-auto max-w-7xl h-16 px-4 flex items-center justify-between">
    
    {/* LEFT */}
    <div className="flex items-center  gap-2">
      <span className="text-xl flex justify-end font-bold">Brand</span>
    </div>


    {/* CENTER */}
    <ul className="hidden md:flex text-green-500 items-center gap-20">
      <li>Home</li>
      <li>Shop</li>
      <li>About</li>
    </ul>

    {/* RIGHT */}
    <div className="flex items-center gap-4">
      <button>Login</button>
      <button className="md:hidden">☰</button>
    </div>

  </nav>
</header>

 )
}

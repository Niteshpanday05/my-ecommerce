"use client"

import Link from "next/link"
import { Search, ShoppingCart, User, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur border-b z-50 bg-white/80">
      <nav className="h-16 w-full">
        <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-pink-300">

          {/* LEFT: LOGO */}
          <Link href="/" className="text-xl text-center justify-center items-center flex font-bold tracking-wide">
            Shop<span className="text-black/50">Verse</span>
          </Link>

          {/* CENTER: NAV LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-black/70 transition">
              Home
            </Link>
            <Link href="/shop" className="hover:text-black/70 transition">
              Shop
            </Link>
            <Link href="/categories" className="hover:text-black/70 transition">
              Categories
            </Link>
            <Link href="/about" className="hover:text-black/70 transition">
              About
            </Link>
          </div>

          {/* RIGHT: ICONS */}
          <div className="flex items-center justify-end bg-black gap-4 translate-x-1">
            <button aria-label="Search">
              <Search className="w-5 h-5" />
            </button>

            <Link href="/cart" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-4 h-4 text-xs bg-black text-white rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            <Link href="/account">
              <User className="w-5 h-5" />
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col px-4 py-6 gap-4 text-sm font-medium">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
            <Link href="/categories" onClick={() => setOpen(false)}>Categories</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          </div>
        </div>
      )}
    </header>
  )
}

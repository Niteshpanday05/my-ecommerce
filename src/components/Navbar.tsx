import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="h-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:p-8 h-full flex items-center justify-between">
          <div className="text-xl font-semibold">Brand</div>

          
          <div className="hidden md:flex items-center gap-6">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">☰</button>
        </div>
      </nav>
    </header>
  );
};

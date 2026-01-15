import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow p-6">
      <div className=" flex  items-center justify-between">
        <Link href="/" className="hover:text-blue-600">
          My Ecommerce
        </Link>

        <div className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout">Checkout</Link>
        </div>
        <div className="flex items-center space-x-4"></div>
      </div>
    </nav>
  );
};

"use client";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const pathname = usePathname();

  // Helper function for active link
  const linkClass = (path) =>
    `font-medium transition ${
      pathname === path
        ? "text-[#ff6900] border-b-2 border-[#ff6900]"
        : "text-gray-700 hover:text-[#ff6900]"
    }`;

  return (
    <nav className="bg-white shadow-md w-full z-20 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold" style={{ color: "#ff6900" }}>
            <Link href="/">
            <Logo></Logo>
            
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/products" className={linkClass("/products")}>
              Products
            </Link>

            {/* Dashboard Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className="cursor-pointer flex items-center text-gray-700 hover:text-[#ff6900] font-medium"
              >
                Dashboard <ChevronDown size={18} className="ml-1" />
              </button>

              {dashboardOpen && (
                <div className="absolute mt-4 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
                  <Link
                    href="/dashboard/add-product"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#ff6900]/10 hover:text-[#ff6900]"
                  >
                    Add Product
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Auth Button */}
          <div className="hidden md:flex">
            {status === "authenticated" ? (
              <button
                className="border-2 px-4 py-2 rounded-lg font-semibold transition"
                style={{
                  cursor:"pointer",
                  borderColor: "#ff6900",
                  color: "#ff6900",
                }}
                onClick={() => signOut()}
              >
                Log Out
              </button>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg text-white transition"
                style={{ backgroundColor: "#ff6900" }}
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-2">
            <ul>
              <li><Link href="/" className={linkClass("/")}>
                   Home
                  </Link>
              </li>
              <li>
             <Link href="/products" className={linkClass("/products")}>
              Products
            </Link>
              </li>


            </ul>
            
            

            {/* Dashboard with nested link */}
            <div>
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className="w-full text-left text-gray-700 hover:text-[#ff6900] flex items-center"
              >
                Dashboard <ChevronDown size={18} className="ml-1" />
              </button>
              {dashboardOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    href="/dashboard/add-product"
                    className="block text-gray-700 hover:text-[#ff6900]"
                  >
                    Add Product
                  </Link>
                </div>
              )}
            </div>

            {status === "authenticated" ? (
              <button
                className="block border-2 px-4 py-2 rounded-lg font-semibold transition w-full"
                style={{
                  cursor:"pointer",
                  borderColor: "#ff6900",
                  color: "#ff6900",
                }}
                onClick={() => signOut()}
              >
                Log Out
              </button>
            ) : (
              <Link
                href="/login"
                className="block px-4 py-2 rounded-lg text-white transition text-center"
                style={{ backgroundColor: "#ff6900" }}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

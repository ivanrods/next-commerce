"use client";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Cart from "./Cart";
import { Store } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 text-gray-50 ${
        scrolled ? "bg-neutral-900" : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        <Store className="mr-2" />
        <span className="hidden md:block">NS Commerce</span>
      </Link>
      <div className="flex items-center gap-8 cursor-pointer ">
        <Cart />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="border rounded-md border-gray-400 px-3 py-2">
              Fazer Login
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
export default Navbar;

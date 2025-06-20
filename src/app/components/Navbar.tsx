import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Cart from "./Cart";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-50">
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        Next Store
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

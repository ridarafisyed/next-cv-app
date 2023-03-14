import Link from "next/link";
import { useState } from "react";

type NavbarProps = {
  isScrolled: boolean;
};

function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`fixed w-full z-50 shadow-md ${
        isScrolled || isMenuOpen ? "bg-zinc-800 shadow-md" : "bg-transparent"
      }`}>
      <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 flex items-center justify-between">
        <Link href="/">
          <p className="flex items-center space-x-2">
            {/* <img src="/logo.svg" alt="Logo" className="w-8 h-8" /> */}
            <span className="font-bold text-2xl text-yellow-500 drop-shadow-sm">
              Rida Rafi Syed
            </span>
          </p>
        </Link>
        <div className="md:hidden">
          <button
            type="button"
            className="block text-zinc-100 hover:text-yellow-500 focus:text-yellow-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              {isMenuOpen ? (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.2929 5.29289C18.6834 4.90237 19.3166 4.90237 19.7071 5.29289L20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L14.4142 14L20.7071 20.2929C21.0976 20.6834 21.0976 21.3166 20.7071 21.7071L19.7071 22.7071C19.3166 23.0976 18.6834 23.0976 18.2929 22.7071L12 16.4142L5.70711 22.7071C5.31658 23.0976 4.68342 23.0976 4.29289 22.7071L3.29289 21.7071C2.90237 21.3166 2.90237 20.6834 3.29289 20.2929L9.58579 14L3.29289 7.70711C2.90237 7.31658 2.90237 6.68342 3.29289 6.29289L4.29289 5.29289C4.68342 4.90237 5.31658 4.90237 5.70711 5.29289L12 11.5858L18.2929 5.29289Z"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                </svg>
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`md:flex md:items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}>
          <div className="md:hidden py-2">
            <Link href="/">
              <p className="block px-4 py-2 text-zinc-100 hover:bg-yellow-500">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="block px-4 py-2 text-zinc-100 hover:bg-yellow-500">
                About
              </p>
            </Link>
            <Link href="/experience">
              <p className="block px-4 py-2 text-zinc-100 hover:bg-yellow-500">
                Experience
              </p>
            </Link>
            <Link href="/portfolio">
              <p className="block px-4 py-2 text-zinc-100 hover:bg-yellow-500">
                Portfolio
              </p>
            </Link>
            <Link href="/contact">
              <p className="block px-4 py-2 text-zinc-100 hover:bg-yellow-500">
                Contact
              </p>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center">
            <Link href="/">
              <p className="px-4 py-2 text-zinc-100 hover:bg-yellow-500">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="px-4 py-2 text-zinc-100 hover:bg-yellow-500">
                About
              </p>
            </Link>
            <Link href="/experience">
              <p className="px-4 py-2 text-zinc-100 hover:bg-yellow-500">
                Experience
              </p>
            </Link>
            <Link href="/portfolio">
              <p className="block px-4 py-2 text-zinc-100 hover:bg-yellow-500">
                Portfolio
              </p>
            </Link>
            <Link href="/contact">
              <p className="block px-4 py-2 text-zinc-100 hover:bg-yellow-500">
                Contact
              </p>
            </Link>
          </div>
        </nav>
      </div>{" "}
    </div>
  );
}

export default Navbar;

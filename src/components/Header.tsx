import React from "react";
import Link from "next/link";
import { siteData } from "../data/siteData";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FDFBF7]/85 backdrop-blur-md border-b border-[#C5A880]/20 py-5 px-8 flex justify-between items-center">
      <Link href="/" className="font-serif text-xl tracking-widest uppercase font-semibold text-[#1C1B1A]">
        {siteData.brand.name}
      </Link>
      <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-medium">
        <a href="#about" className="hover:text-[#C5A880] transition">The Story</a>
        <a href="#gallery" className="hover:text-[#C5A880] transition">Gallery</a>
        <a href="#services" className="hover:text-[#C5A880] transition">Services</a>
        <a href="#contact" className="hover:text-[#C5A880] transition">Inquire</a>
      </nav>
      <a href="#contact" className="border border-[#1C1B1A] px-4 py-2 text-xs uppercase tracking-widest hover:bg-[#1C1B1A] hover:text-white transition">
        Book a Commission
      </a>
    </header>
  );
}

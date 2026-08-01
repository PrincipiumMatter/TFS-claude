import React from "react";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#F5EBE6] filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#C5A880]/10 filter blur-3xl opacity-60 pointer-events-none" />

      <span className="font-cursive text-5xl md:text-7xl text-[#C5A880] mb-2 block">
        crafted by hand
      </span>

      <h1 className="font-serif text-4xl md:text-7xl tracking-widest uppercase mb-6 leading-tight max-w-4xl">
        Where ink meets <br />
        <span className="italic font-light">emotion</span>.
      </h1>

      <p className="text-sm max-w-lg mx-auto leading-relaxed tracking-wide text-neutral-600 mb-10">
        {siteData.brand.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#gallery"
          className="bg-[#1C1B1A] text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#C5A880] transition duration-300"
        >
          View Selected Works
        </a>
        <a
          href="#contact"
          className="border border-[#1C1B1A] px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#1C1B1A]/5 transition duration-300"
        >
          Start a Custom Order
        </a>
      </div>
    </section>
  );
}

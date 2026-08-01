import React from "react";
import { siteData } from "../data/siteData";

export default function Hero() {
  return (
    <section class="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden">
      {/* Background ambient accents for an artistic studio feel */}
      <div class="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#F5EBE6] filter blur-3xl opacity-60 pointer-events-none" />
      <div class="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#C5A880]/10 filter blur-3xl opacity-60 pointer-events-none" />

      {/* Hero Calligraphy Subtitle */}
      <span class="font-calligraphy text-5xl md:text-7xl text-[#C5A880] mb-2 block">
        crafted by hand
      </span>

      {/* Main Headline */}
      <h1 class="font-serif-artistic text-4xl md:text-7xl tracking-widest uppercase mb-6 leading-tight max-w-4xl">
        Where ink meets <br />
        <span class="italic font-light">emotion</span>.
      </h1>

      {/* Description */}
      <p class="text-sm max-w-lg mx-auto leading-relaxed tracking-wide text-neutral-600 mb-10">
        Thoughtfully curated, bespoke gifts and custom calligraphy crafted to turn moments into heirlooms. Made with metallic pigments, fine paper, and pure intent.
      </p>

      {/* Call to Action Buttons */}
      <div class="flex flex-col sm:flex-row gap-4">
        <a
          href="#gallery"
          class="bg-[#1C1B1A] text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#C5A880] transition duration-300"
        >
          View Selected Works
        </a>
        <a
          href="#contact"
          class="border border-[#1C1B1A] px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#1C1B1A]/5 transition duration-300"
        >
          Start a Custom Order
        </a>
      </div>
    </section>
  );
}

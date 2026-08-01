import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import { siteData } from "../data/siteData";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1C1B1A] selection:bg-[#C5A880] selection:text-white">
      <Header />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="h-[450px] w-full rounded-tl-[100px] rounded-br-[100px] border border-dashed border-[#C5A880] bg-[#F5EBE6] flex items-center justify-center">
              <p className="font-serif text-xs text-[#8C7B6E] tracking-widest">Artist Photo Placeholder</p>
            </div>
          </div>
          <div className="space-y-6">
            <span className="font-serif text-xs uppercase tracking-widest text-[#C5A880] block">
              — Behind {siteData.brand.name}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl tracking-wider uppercase">Slow art for a fast-paced world.</h2>
            <p className="text-sm leading-relaxed text-neutral-600">
              Hi, I&apos;m the hands behind the pen. I believe that handwriting is a timestamp of the soul. In an age of fast, digital messages, I find magic in the deliberate scratch of a nib against handmade cotton paper.
            </p>
          </div>
        </div>
      </section>

      <Gallery />

      {/* Services Section */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-serif text-xs uppercase tracking-widest text-[#C5A880]">— What We Create</span>
          <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-widest mt-2">Bespoke Offerings</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {siteData.services.map((s) => (
            <div key={s.number} className="border border-[#C5A880]/30 p-8 flex flex-col justify-between h-[350px] bg-white">
              <div>
                <span className="font-serif text-lg text-[#C5A880] block mb-4">{s.number} //</span>
                <h3 className="font-serif text-xl uppercase tracking-wide mb-4">{s.title}</h3>
                <p className="text-xs leading-relaxed text-neutral-600">{s.description}</p>
              </div>
              <a href="#contact" className="text-xs uppercase tracking-widest font-semibold hover:text-[#C5A880] transition">Inquire →</a>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />

      {/* Footer */}
      <footer className="py-12 border-t border-[#C5A880]/20 text-center text-xs tracking-widest text-neutral-500">
        <p className="font-serif uppercase text-[#1C1B1A] mb-3 font-semibold">{siteData.brand.name}</p>
        <p>&copy; {new Date().getFullYear()} {siteData.brand.name}. Crafted with intent.</p>
      </footer>
    </main>
  );
}

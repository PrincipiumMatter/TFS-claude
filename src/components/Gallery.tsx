import React from "react";
import { siteData } from "@/data/siteData";

export default function Gallery() {
  const { gallery } = siteData;
  const tallItem = gallery.find((item) => item.aspectRatio === "tall");
  const squareItems = gallery.filter((item) => item.aspectRatio === "square");
  const wideItem = gallery.find((item) => item.aspectRatio === "wide");

  return (
    <section id="gallery" className="py-24 bg-[#F5EBE6]/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-cursive text-4xl text-[#C5A880] block mb-2">our curation</span>
          <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-widest">The Portfolio</h2>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {tallItem && (
            <div className="md:col-span-4 space-y-2">
              <div className="relative h-[500px] w-full border border-dashed border-[#C5A880] bg-[#F5EBE6] flex items-center justify-center overflow-hidden group">
                <p className="font-serif text-xs tracking-widest text-[#8C7B6E] uppercase group-hover:scale-105 transition">
                  {tallItem.title}
                </p>
              </div>
              <div className="flex justify-between items-center pt-2">
                <p className="font-serif text-sm uppercase tracking-wider">{tallItem.title}</p>
                <p className="text-xs text-neutral-500">{tallItem.category}</p>
              </div>
            </div>
          )}

          <div className="md:col-span-8 flex flex-col justify-between space-y-8 md:space-y-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {squareItems.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="relative h-[300px] w-full border border-dashed border-[#C5A880] bg-[#F5EBE6] flex items-center justify-center overflow-hidden group">
                    <p className="font-serif text-xs tracking-widest text-[#8C7B6E] uppercase group-hover:scale-105 transition">
                      {item.title}
                    </p>
                  </div>
                  <p className="font-serif text-sm uppercase tracking-wider">{item.title}</p>
                </div>
              ))}
            </div>

            {wideItem && (
              <div className="space-y-2 pt-8">
                <div className="relative h-[250px] w-full border border-dashed border-[#C5A880] bg-[#F5EBE6] flex items-center justify-center overflow-hidden group">
                  <p className="font-serif text-xs tracking-widest text-[#8C7B6E] uppercase group-hover:scale-105 transition">
                    {wideItem.title}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <p className="font-serif text-sm uppercase tracking-wider">{wideItem.title}</p>
                  <p className="text-xs text-neutral-500">{wideItem.category}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

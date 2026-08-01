"use client";

import { useActionState } from "react";
import { submitContactForm } from "../app/actions/contact";
export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  return (
    <section id="contact" className="py-24 bg-[#1C1B1A] text-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="font-cursive text-4xl text-[#C5A880] block mb-2">begin your journey</span>
          <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-widest">Inquire & Create</h2>
        </div>

        {state?.success ? (
          <div className="p-6 bg-[#C5A880]/20 border border-[#C5A880] text-center font-serif text-sm tracking-widest">
            {state.message}
          </div>
        ) : (
          <form action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border-b border-[#C5A880]/30 py-3 text-sm focus:outline-none focus:border-[#C5A880] transition placeholder-neutral-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent border-b border-[#C5A880]/30 py-3 text-sm focus:outline-none focus:border-[#C5A880] transition placeholder-neutral-500"
                />
              </div>
            </div>
            <input
              type="text"
              name="projectType"
              placeholder="Project Type (e.g., Vows, Calligraphy)"
              required
              className="w-full bg-transparent border-b border-[#C5A880]/30 py-3 text-sm focus:outline-none focus:border-[#C5A880] transition placeholder-neutral-500"
            />
            <textarea
              name="message"
              placeholder="Tell us about your vision..."
              rows={4}
              required
              className="w-full bg-transparent border-b border-[#C5A880]/30 py-3 text-sm focus:outline-none focus:border-[#C5A880] transition placeholder-neutral-500"
            ></textarea>

            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isPending}
                className="bg-[#C5A880] text-[#1C1B1A] px-10 py-4 text-xs uppercase tracking-widest hover:bg-[#FDFBF7] transition duration-300 font-semibold disabled:opacity-50"
              >
                {isPending ? "Sending..." : "Send Inquiry"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

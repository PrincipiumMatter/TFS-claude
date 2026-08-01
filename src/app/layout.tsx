import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "THE FINE STROKES | Custom Calligraphy & Personalized Gifts",
  description: "Bespoke calligraphy, custom vows, event stationery, and personalized luxury gifts crafted by hand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body class="antialiased">
        {children}
      </body>
    </html>
  );
}

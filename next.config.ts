import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent Clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Enable XSS protection filter in older browsers
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Control referrer info sent across domains
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;

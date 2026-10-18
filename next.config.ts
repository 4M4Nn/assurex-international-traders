import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us/", permanent: true },
      { source: "/contact", destination: "/contact-us/", permanent: true },
      { source: "/quote", destination: "/request-a-quote/", permanent: true },
      { source: "/get-a-quote", destination: "/request-a-quote/", permanent: true },
      { source: "/products/onion", destination: "/products/onions/", permanent: true },
      { source: "/products/pepper", destination: "/products/black-pepper/", permanent: true },
      { source: "/products/green-cardamom", destination: "/products/cardamom/", permanent: true },
      { source: "/products/basmati-rice", destination: "/products/rice/basmati-rice/", permanent: true },
      { source: "/products/matta-rice", destination: "/products/rice/vadi-matta-rice/", permanent: true },
      { source: "/insights", destination: "/blog/", permanent: true },
      { source: "/blog/page/1", destination: "/blog/", permanent: true },
      { source: "/capabilities", destination: "/our-capabilities/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;

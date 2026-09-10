/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Allows Unsplash URLs to be used directly while choosing photography.
    // For production, prefer downloading the chosen images into /public and
    // referencing them locally — it removes a third-party dependency from
    // page load and survives Unsplash changing or removing a photo.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;

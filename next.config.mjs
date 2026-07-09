/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/home-visit-physiotherapy", destination: "/home-visit-physiotherapy-newcastle", permanent: true },
      { source: "/ndis-physiotherapy", destination: "/ndis-physiotherapy-newcastle", permanent: true },
      { source: "/support-at-home-physiotherapy", destination: "/support-at-home-physiotherapy-newcastle", permanent: true },
      { source: "/falls-prevention", destination: "/falls-prevention-physiotherapy-newcastle", permanent: true },
      { source: "/referrals", destination: "/refer-a-patient", permanent: true },
    ];
  },
};

export default nextConfig;

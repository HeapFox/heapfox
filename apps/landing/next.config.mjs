/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure shared UI package is transpiled so Tailwind can see classnames
  transpilePackages: ["@heapfox/ui"],
  images: {
    unoptimized: true,
  },
}

export default nextConfig

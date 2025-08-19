import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {},
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This is required to allow requests from the cloud-based development environment.
  allowedDevOrigins: ["*.cloudworkstations.dev"],
};

export default nextConfig;

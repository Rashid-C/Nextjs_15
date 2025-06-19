import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: 'ctc.westpoint.edu' }],
  },
}

export default nextConfig

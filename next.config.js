/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    experimental: {
        serverActions: true,
        typedRoutes: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    typescript: {
        // ignoreBuildErrors: true,
    }
}

module.exports = nextConfig

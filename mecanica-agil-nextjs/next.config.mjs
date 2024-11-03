/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/proxy/:path*',
                destination: 'http://meuprojeto.link/mecanica-agil/api/:path*', // API HTTP
            },
        ];
    },
};

export default nextConfig;

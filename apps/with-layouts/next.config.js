/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['media.istockphoto.com', 'picsum.photos'],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;

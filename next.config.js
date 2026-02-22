/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	// Enable React strict mode for better development experience
	reactStrictMode: true,

	// Set the workspace root to this project directory to avoid lockfile detection issues
	outputFileTracingRoot: path.join(__dirname, "./"),

	// Configure image optimization
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github-readme-stats.vercel.app",
			},
			{
				protocol: "https",
				hostname: "github-readme-streak-stats.herokuapp.com",
			},
		],
	},

	// Add trailing slashes for better SEO consistency
	trailingSlash: false,

	// Compress responses
	compress: true,

	// Power header removal for security
	poweredByHeader: false,

	// Configure headers for SEO and security
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload",
					},
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=()",
					},
				],
			},
		];
	},

	// Redirects for SEO (handle old routes and common typos)
	async redirects() {
		return [
			{
				source: "/home",
				destination: "/",
				permanent: true,
			},
			{
				source: "/project",
				destination: "/projects",
				permanent: true,
			},
			{
				source: "/resume",
				destination:
					"https://drive.google.com/file/d/1KXPdYbmQQVwjGAx_jBstJnJ54bNlm4Wf/view",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;

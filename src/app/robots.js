export default function robots() {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: [],
			},
			// Specific rules for AI crawlers
			{
				userAgent: "GPTBot",
				allow: "/",
			},
			{
				userAgent: "ChatGPT-User",
				allow: "/",
			},
			{
				userAgent: "Claude-Web",
				allow: "/",
			},
			{
				userAgent: "Anthropic-AI",
				allow: "/",
			},
			{
				userAgent: "Google-Extended",
				allow: "/",
			},
			{
				userAgent: "Bingbot",
				allow: "/",
			},
			{
				userAgent: "CCBot",
				allow: "/",
			},
		],
		sitemap: "https://www.shahirahmed.com/sitemap.xml",
		host: "https://www.shahirahmed.com",
	};
}

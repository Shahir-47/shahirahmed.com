export default function robots() {
	const baseUrl = "https://www.shahirahmed.com";

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: [],
			},
			// Explicit allowances for common AI crawlers.
			{
				userAgent: [
					"GPTBot",
					"ChatGPT-User",
					"Google-Extended",
					"anthropic-ai",
					"ClaudeBot",
					"CCBot",
					"PerplexityBot",
				],
				allow: "/",
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}

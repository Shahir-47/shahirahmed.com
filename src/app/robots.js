export default function robots() {
	const baseUrl = "https://www.shahirahmed.com";
	const aiDiscoveryPaths = [
		"/llms.txt",
		"/llms.json",
		"/openapi.yaml",
		"/.well-known/ai-plugin.json",
		"/humans.txt",
		"/manifest.json",
		"/opensearch.xml",
	];

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
					"Googlebot",
					"Bingbot",
					"Applebot",
					"anthropic-ai",
					"ClaudeBot",
					"CCBot",
					"PerplexityBot",
					"Bytespider",
				],
				allow: ["/", ...aiDiscoveryPaths],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}

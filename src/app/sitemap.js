export default function sitemap() {
	const baseUrl = "https://www.shahirahmed.com";
	const lastModified = new Date("2026-02-22");

	// Static pages and AI discovery assets.
	const routes = [
		{
			url: baseUrl,
			lastModified,
			changeFrequency: "weekly",
			priority: 1.0,
		},
		{
			url: `${baseUrl}/about`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified,
			changeFrequency: "yearly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/llms.txt`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.4,
		},
		{
			url: `${baseUrl}/llms.json`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.4,
		},
		{
			url: `${baseUrl}/.well-known/ai-plugin.json`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.3,
		},
		{
			url: `${baseUrl}/openapi.yaml`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.3,
		},
	];

	return routes;
}

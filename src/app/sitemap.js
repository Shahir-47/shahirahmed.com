export default function sitemap() {
	const baseUrl = "https://www.shahirahmed.com";

	// Static pages with their last modified dates and priorities
	const routes = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1.0,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.7,
		},
	];

	return routes;
}

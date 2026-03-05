import HomePage from "@/components/HomePage";

const siteUrl = "https://www.shahirahmed.com";
const ogImageUrl = "/opengraph-image";

// Page-specific metadata for SEO
export const metadata = {
	title: "Software Engineer Portfolio",
	description:
		"Portfolio of Shahir Ahmed, a Software Engineer building full-stack products with React, Next.js, TypeScript, Spring Boot, Python, FastAPI, PostgreSQL, and Firebase. Projects include GrabPic, PaperPulse, BitTorrent Client JS, Sarva, Queue Up, and CoSign.",
	alternates: {
		canonical: siteUrl,
	},
	openGraph: {
		type: "website",
		title: "Shahir Ahmed | Software Engineer",
		description:
			"Software Engineer building full-stack products with Next.js, TypeScript, Spring Boot, Python, FastAPI, and PostgreSQL.",
		url: siteUrl,
		images: [ogImageUrl],
	},
	twitter: {
		card: "summary_large_image",
		title: "Shahir Ahmed | Software Engineer",
		description:
			"Explore projects, experience, open source work, and contact info for Shahir Ahmed.",
		images: [ogImageUrl],
	},
};

// Home page JSON-LD for rich search results
const homePageJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	"@id": `${siteUrl}/#homepage`,
	url: siteUrl,
	name: "Shahir Ahmed - Software Engineer Portfolio",
	description:
		"Home page of Shahir Ahmed's portfolio, highlighting full-stack projects with microservice architectures, vector search, knowledge graphs, and open source contributions.",
	isPartOf: {
		"@id": `${siteUrl}/#website`,
	},
	about: {
		"@id": `${siteUrl}/#person`,
	},
	breadcrumb: {
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: siteUrl,
			},
		],
	},
};

export default function Home() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
			/>
			<HomePage />
		</>
	);
}

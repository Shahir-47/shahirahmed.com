import HomePage from "@/components/HomePage";

// Page-specific metadata for SEO
export const metadata = {
	title: "Shahir Ahmed | Software Engineer",
	description:
		"Welcome to Shahir Ahmed's portfolio. Software Engineer specializing in React, Next.js, TypeScript, Spring Boot, Python, PostgreSQL, and Firebase. View projects, experience, and get in touch.",
	alternates: {
		canonical: "https://www.shahirahmed.com",
	},
	openGraph: {
		title: "Shahir Ahmed | Software Engineer",
		description:
			"Welcome to Shahir Ahmed's portfolio. Software Engineer specializing in React, Next.js, TypeScript, Spring Boot, Python, PostgreSQL, and Firebase.",
		url: "https://www.shahirahmed.com",
	},
};

// Home page JSON-LD for rich search results
const homePageJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	"@id": "https://www.shahirahmed.com/#homepage",
	url: "https://www.shahirahmed.com",
	name: "Shahir Ahmed - Software Engineer Portfolio",
	description:
		"Personal portfolio of Shahir Ahmed, a Software Engineer specializing in React, Next.js, TypeScript, Spring Boot, Python, PostgreSQL, and Firebase.",
	isPartOf: {
		"@id": "https://www.shahirahmed.com/#website",
	},
	about: {
		"@id": "https://www.shahirahmed.com/#person",
	},
	breadcrumb: {
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://www.shahirahmed.com",
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

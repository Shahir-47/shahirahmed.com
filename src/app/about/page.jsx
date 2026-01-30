import About from "@/components/About";

// About page SEO metadata
export const metadata = {
	title: "About Me",
	description:
		"Learn about Shahir Ahmed - Software Engineer at Sarva and Computer Science & Mathematics graduate from Dickinson College. Contributor to Mermaid.js and FarmData2. Skilled in React, Next.js, TypeScript, Spring Boot, Python, PostgreSQL, and Firebase.",
	alternates: {
		canonical: "https://www.shahirahmed.com/about",
	},
	openGraph: {
		title: "About Shahir Ahmed | Software Engineer",
		description:
			"Learn about Shahir Ahmed's background, experience, and skills as a Software Engineer and full-stack builder.",
		url: "https://www.shahirahmed.com/about",
	},
};

// About page JSON-LD
const aboutPageJsonLd = {
	"@context": "https://schema.org",
	"@type": "AboutPage",
	"@id": "https://www.shahirahmed.com/about#aboutpage",
	url: "https://www.shahirahmed.com/about",
	name: "About Shahir Ahmed",
	description:
		"Learn about Shahir Ahmed's background, skills, experience, and journey as a Software Engineer.",
	isPartOf: {
		"@id": "https://www.shahirahmed.com/#website",
	},
	mainEntity: {
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
			{
				"@type": "ListItem",
				position: 2,
				name: "About",
				item: "https://www.shahirahmed.com/about",
			},
		],
	},
};

export default function AboutPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
			/>
			<About />
		</>
	);
}

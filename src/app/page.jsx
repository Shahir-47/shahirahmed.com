import HomePage from "@/components/HomePage";

// Page-specific metadata for SEO
export const metadata = {
	title: "Shahir Ahmed | Full Stack Developer & Software Engineer",
	description:
		"Welcome to Shahir Ahmed's portfolio. Full Stack Developer and Software Engineer specializing in React, Next.js, Node.js, Vue.js, AWS, and Firebase. View projects, experience, and get in touch.",
	alternates: {
		canonical: "https://shahirahmed.com",
	},
	openGraph: {
		title: "Shahir Ahmed | Full Stack Developer & Software Engineer",
		description:
			"Welcome to Shahir Ahmed's portfolio. Full Stack Developer specializing in React, Next.js, Node.js, and cloud technologies.",
		url: "https://www.shahirahmed.com",
	},
};

// Home page JSON-LD for rich search results
const homePageJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	"@id": "https://shahirahmed.com/#homepage",
	url: "https://shahirahmed.com",
	name: "Shahir Ahmed - Full Stack Developer Portfolio",
	description:
		"Personal portfolio of Shahir Ahmed, a Full Stack Developer and Software Engineer with expertise in React, Next.js, Node.js, Vue.js, and cloud technologies.",
	isPartOf: {
		"@id": "https://shahirahmed.com/#website",
	},
	about: {
		"@id": "https://shahirahmed.com/#person",
	},
	breadcrumb: {
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://shahirahmed.com",
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

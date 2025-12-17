import About from "@/components/About";

// About page SEO metadata
export const metadata = {
	title: "About Me",
	description:
		"Learn about Shahir Ahmed - Full Stack Developer and Software Engineer at Sarva. Computer Science & Mathematics graduate from Dickinson College. Top contributor to Mermaid.js and FarmData2. Skilled in React, Next.js, Node.js, Vue.js, AWS, Firebase, and more.",
	alternates: {
		canonical: "https://shahirahmed.com/about",
	},
	openGraph: {
		title: "About Shahir Ahmed | Full Stack Developer & Software Engineer",
		description:
			"Learn about Shahir Ahmed's background, experience, skills, and journey as a Full Stack Developer and Software Engineer.",
		url: "https://www.shahirahmed.com/about",
	},
};

// About page JSON-LD
const aboutPageJsonLd = {
	"@context": "https://schema.org",
	"@type": "AboutPage",
	"@id": "https://shahirahmed.com/about#aboutpage",
	url: "https://shahirahmed.com/about",
	name: "About Shahir Ahmed",
	description:
		"Learn about Shahir Ahmed's background, skills, experience, and journey as a Full Stack Developer and Software Engineer.",
	isPartOf: {
		"@id": "https://shahirahmed.com/#website",
	},
	mainEntity: {
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
			{
				"@type": "ListItem",
				position: 2,
				name: "About",
				item: "https://shahirahmed.com/about",
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

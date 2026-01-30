import Projects from "@/components/Projects";

// Projects page SEO metadata
export const metadata = {
	title: "Projects",
	description:
		"Explore Shahir Ahmed's portfolio of software projects. Features Sarva (vendor management platform), Queue Up (music matching), CoSign (task verification), Albatross (AI navigation), and open source contributions to Mermaid.js and FarmData2.",
	alternates: {
		canonical: "https://www.shahirahmed.com/projects",
	},
	openGraph: {
		title: "Projects | Shahir Ahmed - Software Engineer",
		description:
			"Explore Shahir Ahmed's portfolio of projects including Sarva, Queue Up, CoSign, Albatross, and open source contributions.",
		url: "https://www.shahirahmed.com/projects",
	},
};

// Projects page JSON-LD with ItemList for rich results
const projectsPageJsonLd = {
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	"@id": "https://www.shahirahmed.com/projects#projectspage",
	url: "https://www.shahirahmed.com/projects",
	name: "Projects by Shahir Ahmed",
	description:
		"A collection of software development projects by Shahir Ahmed including web applications, open source contributions, and hackathon projects.",
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
			{
				"@type": "ListItem",
				position: 2,
				name: "Projects",
				item: "https://www.shahirahmed.com/projects",
			},
		],
	},
	mainEntity: {
		"@type": "ItemList",
		itemListElement: [
			{
				"@type": "SoftwareSourceCode",
				position: 1,
				name: "Sarva",
				description:
					"Vendor management platform and marketplace for grocery supply chains with serverless Firebase workflows, AI metadata generation, voice inventory, Stripe Connect, and Google Maps tracking.",
				url: "https://www.sarvabazaar.com/",
				programmingLanguage: ["TypeScript", "JavaScript", "Python"],
				runtimePlatform: "Next.js, Firebase",
				author: {
					"@id": "https://www.shahirahmed.com/#person",
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 2,
				name: "Queue Up",
				description:
					"Music-based social platform that matches users with weighted Spotify similarity and real-time chat.",
				url: "https://queue-up.onrender.com",
				codeRepository: "https://github.com/Shahir-47/Queue-Up",
				programmingLanguage: ["Java", "JavaScript"],
				runtimePlatform: "Spring Boot, React, WebSockets",
				author: {
					"@id": "https://www.shahirahmed.com/#person",
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 3,
				name: "CoSign",
				description:
					"Task management platform with external verification, real-time WebSockets, and encrypted data storage.",
				url: "https://cosign-nwwl.onrender.com",
				codeRepository: "https://github.com/Shahir-47/CoSign",
				programmingLanguage: ["Java", "TypeScript", "JavaScript"],
				runtimePlatform: "Spring Boot, React, WebSockets",
				author: {
					"@id": "https://www.shahirahmed.com/#person",
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 4,
				name: "Albatross",
				description:
					"AI-powered navigation app that reroutes users based on safety levels, built at HackHarvard 2024.",
				url: "https://albatross-hack.netlify.app/",
				programmingLanguage: ["JavaScript"],
				runtimePlatform: "Vue.js",
				author: {
					"@id": "https://www.shahirahmed.com/#person",
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 5,
				name: "FarmData2",
				description:
					"Open-source farm management platform with crop tracking, PostgreSQL logging, farmOS API integration, and Vue.js components.",
				codeRepository: "https://github.com/FarmData2/FarmData2",
				programmingLanguage: ["JavaScript", "SQL"],
				runtimePlatform: "Node.js, Vue.js",
				author: {
					"@id": "https://www.shahirahmed.com/#person",
				},
			},
		],
	},
};

export default function ProjectsPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsPageJsonLd) }}
			/>
			<Projects />
		</>
	);
}

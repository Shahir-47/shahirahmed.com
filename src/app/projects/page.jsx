import Projects from "@/components/Projects";

// Projects page SEO metadata
export const metadata = {
	title: "Projects",
	description:
		"Explore Shahir Ahmed's portfolio of software development projects. Features Sarva (grocery marketplace), Peer-to-Playlist, Albatross (AI navigation), open source contributions to Mermaid.js and FarmData2, and more full stack applications.",
	alternates: {
		canonical: "https://www.shahirahmed.com/projects",
	},
	openGraph: {
		title: "Projects | Shahir Ahmed - Full Stack Developer",
		description:
			"Explore Shahir Ahmed's portfolio of full stack projects including Sarva, Peer-to-Playlist, Albatross, and open source contributions.",
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
					"Full-stack vendor management platform and grocery marketplace for South Asian supply chains with AI assistants, Stripe payments, and real-time order tracking.",
				url: "https://www.sarvabazaar.com/",
				programmingLanguage: ["JavaScript", "TypeScript"],
				runtimePlatform: "Next.js",
				author: {
					"@id": "https://www.shahirahmed.com/#person",
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 2,
				name: "Peer-to-Playlist",
				description:
					"Full-stack social networking app that matches users through Spotify listening history with real-time messaging and file sharing.",
				url: "https://peer-to-playlist.onrender.com/",
				codeRepository: "https://github.com/Shahir-47/Peer-to-Playlist",
				programmingLanguage: "JavaScript",
				runtimePlatform: "React",
				author: {
					"@id": "https://www.shahirahmed.com/#person",
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 3,
				name: "Albatross",
				description:
					"AI-powered navigation app that reroutes users based on safety levels, built at HackHarvard 2024.",
				url: "https://albatross-hack.netlify.app/",
				programmingLanguage: "JavaScript",
				runtimePlatform: "Vue.js",
				author: {
					"@id": "https://www.shahirahmed.com/#person",
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 4,
				name: "FarmData2",
				description:
					"Open-source farm management platform with crop tracking, farmOS API integration, and Vue.js components.",
				codeRepository: "https://github.com/FarmData2/FarmData2",
				programmingLanguage: ["JavaScript", "Vue.js"],
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

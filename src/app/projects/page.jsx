import Projects from "@/components/Projects";

const siteUrl = "https://www.shahirahmed.com";
const ogImageUrl = "/opengraph-image";

// Projects page SEO metadata
export const metadata = {
	title: "Projects",
	description:
		"Explore projects by Shahir Ahmed across professional, open source, hackathon, and personal work including Sarva, FarmData2, Queue Up, CoSign, Albatross, and SweetFriend.",
	alternates: {
		canonical: `${siteUrl}/projects`,
	},
	openGraph: {
		type: "website",
		title: "Projects | Shahir Ahmed - Software Engineer",
		description:
			"Professional and personal software projects including AI-assisted products, hackathon builds, and open source contributions.",
		url: `${siteUrl}/projects`,
		images: [ogImageUrl],
	},
	twitter: {
		card: "summary_large_image",
		title: "Projects | Shahir Ahmed",
		description:
			"Browse Sarva, FarmData2, Queue Up, CoSign, Albatross, SweetFriend, and more.",
		images: [ogImageUrl],
	},
};

// Projects page JSON-LD with ItemList for rich results
const projectsPageJsonLd = {
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	"@id": `${siteUrl}/projects#projectspage`,
	url: `${siteUrl}/projects`,
	name: "Projects by Shahir Ahmed",
	description:
		"A collection of software projects by Shahir Ahmed across professional work, open source contributions, hackathons, and personal projects.",
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
			{
				"@type": "ListItem",
				position: 2,
				name: "Projects",
				item: `${siteUrl}/projects`,
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
					"Vendor management and marketplace platform for South Asian grocery supply chains with Python RAG search, voice inventory via OpenAI Whisper, GPT assistants, and Stripe Connect.",
				url: "https://www.sarvabazaar.com/",
				programmingLanguage: ["TypeScript", "JavaScript", "Python"],
				runtimePlatform: "Next.js, Firebase",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 2,
				name: "FarmData2",
				description:
					"NSF-funded open-source farm management platform with Vue.js refactors, Node.js APIs, PostgreSQL transactions, and Cypress test coverage improvements.",
				codeRepository: "https://github.com/FarmData2/FarmData2",
				programmingLanguage: ["JavaScript", "SQL"],
				runtimePlatform: "Node.js, Vue.js, PostgreSQL",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 3,
				name: "Open Source Contributions",
				description:
					"Contributions to Mermaid.js and FarmData2 including merged PRs for diagram rendering and large-scale open-source maintenance work.",
				codeRepository: "https://github.com/Shahir-47/open-source-contributions",
				programmingLanguage: ["JavaScript", "TypeScript"],
				runtimePlatform: "GitHub",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 4,
				name: "Queue Up",
				description:
					"Spotify-powered social app with user matching, real-time WebSocket chat, JWT auth, and PostgreSQL.",
				url: "https://queue-up.onrender.com",
				codeRepository: "https://github.com/Shahir-47/Queue-Up",
				programmingLanguage: ["Java", "JavaScript"],
				runtimePlatform: "Spring Boot, React, WebSockets",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 5,
				name: "CoSign",
				description:
					"Task accountability platform with verification workflows, recurring tasks, encrypted stakes, and WebSocket updates.",
				url: "https://cosign-nwwl.onrender.com",
				codeRepository: "https://github.com/Shahir-47/CoSign",
				programmingLanguage: ["Java", "TypeScript", "JavaScript"],
				runtimePlatform: "Spring Boot, React, WebSockets",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 6,
				name: "Albatross",
				description:
					"AI-powered safe navigation app built at HackHarvard 2024 using Vue.js, Cloudflare Workers, Databricks, and crime-zone scoring.",
				url: "https://albatross-hack.netlify.app/",
				codeRepository:
					"https://github.com/orgs/HackHarvard2024-Team/repositories",
				programmingLanguage: ["JavaScript", "Python"],
				runtimePlatform: "Vue.js, Cloudflare Workers",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 7,
				name: "SweetFriend",
				description:
					"Diabetes management app built at PennApps 2024 with Dexcom integration, meal recognition, Twilio alerts, and Flask/MongoDB backend services.",
				url: "https://sweet-friend.vercel.app/app/dashboard",
				codeRepository: "https://github.com/dmicz/SweetFriend",
				programmingLanguage: ["JavaScript", "Python"],
				runtimePlatform: "React, Flask, MongoDB",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 8,
				name: "Prospectus",
				description:
					"AI-powered college admissions assistant built at HoyaHacks 2024 with React, Django, Azure OpenAI, and vector embeddings for personalized guidance.",
				codeRepository: "https://github.com/HoyaHacks2024-Team",
				programmingLanguage: ["JavaScript", "Python"],
				runtimePlatform: "React, Django, Azure OpenAI",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 9,
				name: "PandOS",
				description:
					"Complete OS kernel in C for the uMPS3 RISC emulator with time-sharing, multiprogramming, TLB-based virtual memory, system calls, and interrupt handling.",
				codeRepository:
					"https://gitfront.io/r/Shahir-47/abfsq8dhTm4Z/Custom-OS-Kernel/",
				programmingLanguage: ["C"],
				runtimePlatform: "uMPS3",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 10,
				name: "BitTorrent Client JS",
				description:
					"Peer-to-peer file-sharing client in JavaScript with magnet link resolution, SHA-1 verification, concurrent downloads, and HTTP tracker communication.",
				codeRepository:
					"https://github.com/Shahir-47/bittorrent-client-js",
				programmingLanguage: ["JavaScript"],
				runtimePlatform: "Node.js",
				author: {
					"@id": `${siteUrl}/#person`,
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

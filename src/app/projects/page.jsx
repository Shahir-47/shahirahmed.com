import Projects from "@/components/Projects";

const siteUrl = "https://www.shahirahmed.com";
const ogImageUrl = "/opengraph-image";

// Projects page SEO metadata
export const metadata = {
	title: "Projects",
	description:
		"Things Shahir Ahmed has built, including GrabPic, PaperPulse, Queue Up, CoSign, a BitTorrent client, and hackathon projects like Albatross and SweetFriend.",
	alternates: {
		canonical: `${siteUrl}/projects`,
	},
	openGraph: {
		type: "website",
		title: "Projects | Shahir Ahmed - Software Engineer",
		description:
			"Personal projects and hackathon builds by Shahir Ahmed.",
		url: `${siteUrl}/projects`,
		images: [ogImageUrl],
	},
	twitter: {
		card: "summary_large_image",
		title: "Projects | Shahir Ahmed",
		description:
			"GrabPic, PaperPulse, Queue Up, CoSign, Albatross, and more.",
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
		"Personal and hackathon projects by Shahir Ahmed.",
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
				name: "GrabPic",
				description:
					"Event photo search. Upload a selfie to find your photos in albums of 500+ photos in under 200 milliseconds. Built with Next.js, Spring Boot, a Python TensorFlow worker, Amazon SQS, pgvector, and Redis.",
				url: "https://grab-pic.vercel.app",
				codeRepository: "https://github.com/Shahir-47/Grab-Pic",
				programmingLanguage: ["TypeScript", "Java", "Python"],
				runtimePlatform:
					"Next.js, Spring Boot, Python, AWS, Supabase, PostgreSQL",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 2,
				name: "PaperPulse",
				description:
					"Research assistant that answers questions from the full text of 100+ papers and ranks papers from 4 sources nightly into a personal feed. Built with FastAPI, Next.js, Neo4j, and pgvector on AWS App Runner.",
				url: "https://paper-pulse-nu.vercel.app",
				codeRepository: "https://github.com/Shahir-47/Paper-Pulse",
				programmingLanguage: ["TypeScript", "Python"],
				runtimePlatform:
					"Next.js, FastAPI, PostgreSQL, Neo4j, OpenAI, Cohere, AWS",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 3,
				name: "Queue Up",
				description:
					"Social app that matches people by Spotify listening history, with real-time WebSocket chat. Built with Spring Boot, React, and PostgreSQL.",
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
				position: 4,
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
				position: 5,
				name: "BitTorrent Client JS",
				description:
					"BitTorrent client in JavaScript that downloads files from .torrent files and magnet links with TCP peer connections, SHA-1 integrity checking, and the extension protocol for metadata exchange.",
				codeRepository: "https://github.com/Shahir-47/bittorrent-client-js",
				programmingLanguage: ["JavaScript"],
				runtimePlatform: "Node.js",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 6,
				name: "Albatross",
				description:
					"Navigation app built at HackHarvard 2024 that routes walkers around high crime areas in Boston, using 50K+ crime records grouped into risk zones with MLflow and Databricks.",
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
				position: 9,
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

import Projects from "@/components/Projects";
import { projectsData } from "@/data/projects";

const siteUrl = "https://www.shahirahmed.com";

// Structured data reuses the tags the projects page filters on, so the two
// never say different things about what a project is built with.
const tagsFor = (name) => {
	const project = projectsData.find((item) => item.title === name);
	if (!project) return [];
	return [...project.focus, ...project.languages, ...project.tech];
};

const withKeywords = (entry) => {
	const keywords = tagsFor(entry.name);
	return keywords.length ? { ...entry, keywords } : entry;
};
const ogImageUrl = "/opengraph-image";

// Projects page SEO metadata
export const metadata = {
	title: "Projects",
	description:
		"Things Shahir Ahmed has built, including GrabPic, PaperPulse, a self-hosted home server, Queue Up, CoSign, and hackathon projects like Albatross and SweetFriend.",
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
			"GrabPic, PaperPulse, Home Server, Queue Up, CoSign, and more.",
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
					"Research assistant that picks the 25 most relevant new papers for each user every night and answers questions about them with retrieval augmented generation over Neo4j. Built with FastAPI, Next.js, Neo4j, and pgvector, with the backend self-hosted in Docker.",
				url: "https://paper-pulse-nu.vercel.app",
				codeRepository: "https://github.com/Shahir-47/Paper-Pulse",
				programmingLanguage: ["TypeScript", "Python"],
				runtimePlatform:
					"Next.js, FastAPI, PostgreSQL, Neo4j, OpenAI, Cohere, Docker",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 3,
				name: "Home Server",
				description:
					"Self-hosted cloud on a Linux laptop that runs the GrabPic, PaperPulse, and Queue Up backends in Docker behind Cloudflare Tunnel for about $1 a month instead of $100 on AWS. Coolify deploys from GitHub, Traefik routes requests, Tailscale keeps private apps off the internet, and a live Next.js page streams server and container status.",
				url: "https://lab.shahirahmed.com",
				codeRepository: "https://github.com/Shahir-47/nitro-lab",
				programmingLanguage: ["JavaScript"],
				runtimePlatform:
					"Ubuntu Server, Docker, Coolify, Traefik, Cloudflare Tunnel, Tailscale, Uptime Kuma",
				author: {
					"@id": `${siteUrl}/#person`,
				},
			},
			{
				"@type": "SoftwareSourceCode",
				position: 4,
				name: "Queue Up",
				description:
					"Social app that matches people by Spotify listening history, with real-time WebSocket chat. Built with Spring Boot, React, and PostgreSQL.",
				url: "https://queue-up.shahirahmed.com",
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
				name: "PandOS",
				description:
					"Operating system kernel in C for the uMPS3 emulator that runs up to 20 processes on 5 ms round-robin time slices, with semaphores, TLB-based virtual memory, system calls, and interrupt handling.",
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
				position: 7,
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
				position: 8,
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
				position: 9,
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
				position: 10,
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
		].map(withKeywords),
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

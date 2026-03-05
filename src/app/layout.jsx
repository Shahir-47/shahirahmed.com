import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/css/normalize.css";
import "@/css/style.css";

const siteUrl = "https://www.shahirahmed.com";
const ogImageUrl = "/opengraph-image";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

// SEO: Site-wide metadata defaults
export const metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Shahir Ahmed | Software Engineer",
		template: "%s | Shahir Ahmed",
	},
	description:
		"Shahir Ahmed is a Software Engineer building full-stack products with React, Next.js, TypeScript, Spring Boot, Python, FastAPI, and PostgreSQL. Projects include GrabPic (facial recognition photo sharing), PaperPulse (AI research platform), BitTorrent Client JS, Sarva (grocery supply chain), and open source contributions to Mermaid.js.",
	keywords: [
		"Shahir Ahmed",
		"Software Engineer",
		"Full Stack Engineer",
		"Full Stack Developer",
		"React Developer",
		"Next.js Developer",
		"TypeScript Developer",
		"Java Developer",
		"Spring Boot Developer",
		"Python Developer",
		"FastAPI Developer",
		"Node.js Developer",
		"Vue.js Developer",
		"Web Developer",
		"Frontend Developer",
		"Backend Developer",
		"REST APIs",
		"WebSockets",
		"Open Source Contributor",
		"Mermaid.js",
		"FarmData2",
		"Sarva",
		"GrabPic",
		"PaperPulse",
		"BitTorrent Client JS",
		"Queue Up",
		"CoSign",
		"facial recognition",
		"knowledge graph",
		"peer-to-peer networking",
		"BitTorrent protocol",
		"RAG",
		"OpenAI Whisper",
		"AI assistants",
		"GPT",
		"Stripe Connect",
		"Cloudflare Workers",
		"Databricks",
		"HackHarvard",
		"PennApps",
		"HoyaHacks",
		"Computer Science",
		"Software Engineering",
		"PostgreSQL",
		"pgvector",
		"Neo4j",
		"Firebase",
		"MongoDB",
		"AWS S3",
		"AWS App Runner",
		"Supabase",
		"Cypress",
		"Docker",
		"GitHub Actions",
		"Vercel",
		"Dickinson College",
		"software engineer portfolio",
		"CS50",
	],
	authors: [{ name: "Shahir Ahmed", url: siteUrl }],
	creator: "Shahir Ahmed",
	publisher: "Shahir Ahmed",
	formatDetection: {
		email: true,
		address: false,
		telephone: false,
	},
	alternates: {
		canonical: siteUrl,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		siteName: "Shahir Ahmed - Portfolio",
		title: "Shahir Ahmed | Software Engineer",
		description:
			"Software Engineer building full-stack products with Next.js, TypeScript, Spring Boot, Python, FastAPI, and PostgreSQL. Projects include GrabPic, PaperPulse, BitTorrent Client JS, Sarva, and Mermaid.js contributions.",
		images: [
			{
				url: ogImageUrl,
				width: 1200,
				height: 630,
				alt: "Shahir Ahmed - Software Engineer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Shahir Ahmed | Software Engineer",
		description:
			"Software Engineer building full-stack products with Next.js, TypeScript, Spring Boot, Python, FastAPI, PostgreSQL, and Firebase.",
		creator: "@shahirahmed",
		images: [ogImageUrl],
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	...(googleSiteVerification
		? {
				verification: {
					google: googleSiteVerification,
				},
			}
		: {}),
	category: "technology",
	icons: {
		icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
		apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
	},
	manifest: "/manifest.json",
};

// JSON-LD Structured Data for SEO and AI chatbots
const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": `${siteUrl}/#website`,
			url: siteUrl,
			name: "Shahir Ahmed - Software Engineer Portfolio",
			description:
				"Personal portfolio website of Shahir Ahmed, a Software Engineer building full-stack products with microservice architectures, vector search, and knowledge graphs.",
			publisher: {
				"@id": `${siteUrl}/#person`,
			},
			hasPart: [
				{ "@id": `${siteUrl}/#homepage` },
				{ "@id": `${siteUrl}/about#aboutpage` },
				{ "@id": `${siteUrl}/projects#projectspage` },
				{ "@id": `${siteUrl}/contact#contactpage` },
			],
			inLanguage: "en-US",
		},
		{
			"@type": "Person",
			"@id": `${siteUrl}/#person`,
			name: "Shahir Ahmed",
			givenName: "Shahir",
			familyName: "Ahmed",
			url: siteUrl,
			image: {
				"@type": "ImageObject",
				url: `${siteUrl}/shahir.jpeg`,
				width: 400,
				height: 400,
			},
			description:
				"Software Engineer specializing in full-stack development with React, Next.js, TypeScript, Spring Boot, Python, FastAPI, and PostgreSQL. Built GrabPic (facial recognition photo sharing), PaperPulse (AI research platform with knowledge graphs), BitTorrent Client JS, and Sarva (grocery supply chain platform). Top 25 Mermaid.js contributor and former FarmData2 engineer.",
			jobTitle: "Software Engineer",
			worksFor: {
				"@type": "Organization",
				name: "Sarva",
				url: "https://www.sarvabazaar.com",
			},
			hasOccupation: {
				"@type": "Occupation",
				name: "Software Engineer",
				occupationLocation: {
					"@type": "Country",
					name: "United States",
				},
				skills:
					"React, Next.js, TypeScript, Spring Boot, Python, FastAPI, PostgreSQL, pgvector, Neo4j, RAG, OpenAI Whisper, Firebase, AWS",
			},
			alumniOf: {
				"@type": "EducationalOrganization",
				name: "Dickinson College",
				url: "https://www.dickinson.edu",
			},
			hasCredential: [
				{
					"@type": "EducationalOccupationalCredential",
					name: "B.S. in Computer Science and Mathematics",
					credentialCategory: "degree",
					recognizedBy: {
						"@type": "EducationalOrganization",
						name: "Dickinson College",
					},
				},
				{
					"@type": "EducationalOccupationalCredential",
					name: "CS50x: Introduction to Computer Science",
					credentialCategory: "certificate",
					recognizedBy: {
						"@type": "Organization",
						name: "HarvardX",
					},
					url: "https://courses.edx.org/certificates/679d72781ed04aaba91ad9ec4ead0de3",
				},
			],
			knowsAbout: [
				"Java",
				"JavaScript",
				"TypeScript",
				"Python",
				"C",
				"Lua",
				"SQL",
				"HTML5",
				"CSS3",
				"React",
				"Next.js",
				"Vue.js",
				"Tailwind CSS",
				"Spring Boot",
				"Node.js",
				"Express.js",
				"FastAPI",
				"Flask",
				"Django",
				"RAG",
				"Vector search",
				"pgvector",
				"Knowledge graphs",
				"Neo4j",
				"OpenAI Whisper",
				"LLM structured outputs",
				"Facial recognition",
				"DeepFace",
				"BitTorrent protocol",
				"Peer-to-peer networking",
				"REST APIs",
				"WebSockets",
				"PostgreSQL",
				"MongoDB",
				"Firebase",
				"Supabase",
				"Stripe Connect",
				"AWS S3",
				"AWS App Runner",
				"AWS SQS",
				"AWS CloudFront",
				"Cloudflare Workers",
				"Databricks",
				"Cypress",
				"Docker",
				"GitHub Actions",
				"Vercel",
				"Git",
				"Linux",
				"Full Stack Development",
				"Software Engineering",
				"Open Source Development",
				"Microservice Architecture",
			],
			sameAs: [
				"https://github.com/Shahir-47",
				"https://www.linkedin.com/in/shahir47/",
				"https://devpost.com/Shahir-47",
				"https://instagram.com/shahirahmed._",
			],
			email: "shahir.a@outlook.com",
		},
		{
			"@type": "ProfilePage",
			"@id": `${siteUrl}/#profilepage`,
			url: siteUrl,
			name: "Shahir Ahmed Portfolio",
			isPartOf: {
				"@id": `${siteUrl}/#website`,
			},
			about: {
				"@id": `${siteUrl}/#person`,
			},
			mainEntity: {
				"@id": `${siteUrl}/#person`,
			},
		},
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* Preconnect to external domains for performance */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>

				{/* DNS prefetch for third-party badge images */}
				<link rel="dns-prefetch" href="https://img.shields.io" />

				{/* Theme color for PWA */}
				<meta name="theme-color" content="#4fd1c5" />
				<meta
					name="theme-color"
					content="#0a0a0a"
					media="(prefers-color-scheme: dark)"
				/>

				{/* OpenSearch for browser search integration */}
				<link
					rel="search"
					type="application/opensearchdescription+xml"
					title="Shahir Ahmed"
					href="/opensearch.xml"
				/>

				{/* AI discovery resources */}
				<link rel="alternate" type="text/plain" title="LLMs" href="/llms.txt" />
				<link
					rel="alternate"
					type="application/json"
					title="LLMs JSON"
					href="/llms.json"
				/>

				{/* Humans.txt for credits */}
				<link rel="author" href="/humans.txt" />

				{/* JSON-LD Structured Data for SEO and AI */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body>
				<AppRouterCacheProvider options={{ key: "css" }}>
					<div className="main-container">
						<Navbar />
						<main id="main-content">{children}</main>
						<Footer />
					</div>
				</AppRouterCacheProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}

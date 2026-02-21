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
		"Shahir Ahmed is a Software Engineer building AI-assisted full-stack products with React, Next.js, TypeScript, Spring Boot, Python, and PostgreSQL. Currently at Sarva, previously at FarmData2, and a top 25 Mermaid.js contributor.",
	keywords: [
		"Shahir Ahmed",
		"Software Engineer",
		"Full Stack Engineer",
		"React Developer",
		"Next.js Developer",
		"TypeScript Developer",
		"Java Developer",
		"Spring Boot",
		"Python Developer",
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
		"RAG",
		"OpenAI Whisper",
		"AI assistants",
		"Stripe Connect",
		"Cloudflare Workers",
		"Databricks",
		"HackHarvard",
		"PennApps",
		"Computer Science",
		"Software Engineering",
		"PostgreSQL",
		"Firebase",
		"MongoDB",
		"AWS S3",
		"Cypress",
		"Docker",
		"Vercel",
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
			"Software Engineer at Sarva building AI-powered supply-chain products with Next.js, TypeScript, Python, and Firebase. Top 25 Mermaid.js contributor and former FarmData2 engineer.",
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
			"Software Engineer building AI-assisted full-stack products with Next.js, TypeScript, Spring Boot, Python, PostgreSQL, and Firebase.",
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
			}
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
				"Personal portfolio website of Shahir Ahmed, a Software Engineer building AI-assisted full-stack products.",
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
				"Software Engineer specializing in AI-assisted full-stack development with React, Next.js, TypeScript, Spring Boot, Python, and PostgreSQL. Experience at Sarva and FarmData2, plus open source contributions to Mermaid.js.",
			jobTitle: "Software Engineer",
			worksFor: {
				"@type": "Organization",
				name: "Sarva",
				url: "https://www.sarvabazaar.com",
			},
			alumniOf: {
				"@type": "EducationalOrganization",
				name: "Dickinson College",
			},
			knowsAbout: [
				"Java",
				"JavaScript",
				"TypeScript",
				"Python",
				"SQL",
				"React",
				"Next.js",
				"Vue.js",
				"Spring Boot",
				"Express.js",
				"RAG",
				"Vector search",
				"OpenAI Whisper",
				"LLM structured outputs",
				"REST APIs",
				"WebSockets",
				"PostgreSQL",
				"MongoDB",
				"Firebase",
				"AWS S3",
				"Cypress",
				"Docker",
				"Vercel",
				"Git",
				"Linux",
				"Full Stack Development",
				"Software Engineering",
				"Open Source Development",
			],
			sameAs: [
				"https://github.com/Shahir-47",
				"https://www.linkedin.com/in/shahir47/",
				"https://devpost.com/Shahir-47",
				"https://instagram.com/shahirahmed._",
			],
			email: "shahir@shahirahmed.com",
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

				{/* Theme color for PWA */}
				<meta name="theme-color" content="#4fd1c5" />

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

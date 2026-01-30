import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/css/normalize.css";
import "@/css/style.css";

// SEO: Site-wide metadata defaults
export const metadata = {
	metadataBase: new URL("https://www.shahirahmed.com"),
	title: {
		default: "Shahir Ahmed | Software Engineer",
		template: "%s | Shahir Ahmed",
	},
	description:
		"Shahir Ahmed is a Software Engineer specializing in React, Next.js, TypeScript, Spring Boot, Python, PostgreSQL, and Firebase. Builds scalable full-stack products and contributes to Mermaid.js and FarmData2.",
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
	authors: [{ name: "Shahir Ahmed", url: "https://www.shahirahmed.com" }],
	creator: "Shahir Ahmed",
	publisher: "Shahir Ahmed",
	formatDetection: {
		email: true,
		address: false,
		telephone: false,
	},
	alternates: {
		canonical: "https://www.shahirahmed.com",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.shahirahmed.com",
		siteName: "Shahir Ahmed - Portfolio",
		title: "Shahir Ahmed | Software Engineer",
		description:
			"Software Engineer at Sarva building full-stack products with Next.js, TypeScript, Spring Boot, Python, PostgreSQL, and Firebase. Open source contributor to Mermaid.js and FarmData2.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Shahir Ahmed | Software Engineer",
		description:
			"Software Engineer specializing in React, Next.js, TypeScript, Spring Boot, Python, PostgreSQL, and Firebase.",
		creator: "@shahirahmed",
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
	verification: {
		google: "your-google-verification-code", // Replace with actual verification code
	},
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
			"@id": "https://www.shahirahmed.com/#website",
			url: "https://www.shahirahmed.com",
			name: "Shahir Ahmed - Software Engineer Portfolio",
			description:
				"Personal portfolio website of Shahir Ahmed, a Software Engineer and full-stack builder.",
			publisher: {
				"@id": "https://www.shahirahmed.com/#person",
			},
			inLanguage: "en-US",
		},
		{
			"@type": "Person",
			"@id": "https://www.shahirahmed.com/#person",
			name: "Shahir Ahmed",
			givenName: "Shahir",
			familyName: "Ahmed",
			url: "https://www.shahirahmed.com",
			image: {
				"@type": "ImageObject",
				url: "https://www.shahirahmed.com/shahir.jpeg",
				width: 400,
				height: 400,
			},
			description:
				"Software Engineer specializing in full-stack development with React, Next.js, TypeScript, Spring Boot, Python, and PostgreSQL. Experience at Sarva and open source contributions to Mermaid.js and FarmData2.",
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
			"@id": "https://www.shahirahmed.com/#profilepage",
			url: "https://www.shahirahmed.com",
			name: "Shahir Ahmed Portfolio",
			isPartOf: {
				"@id": "https://www.shahirahmed.com/#website",
			},
			about: {
				"@id": "https://www.shahirahmed.com/#person",
			},
			mainEntity: {
				"@id": "https://www.shahirahmed.com/#person",
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

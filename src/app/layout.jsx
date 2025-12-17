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
		default: "Shahir Ahmed | Full Stack Developer & Software Engineer",
		template: "%s | Shahir Ahmed",
	},
	description:
		"Shahir Ahmed is a Full Stack Developer and Software Engineer specializing in React, Next.js, Node.js, Vue.js, and cloud technologies. Open source contributor to Mermaid.js and FarmData2. View portfolio, projects, and contact information.",
	keywords: [
		"Shahir Ahmed",
		"Full Stack Developer",
		"Software Engineer",
		"React Developer",
		"Next.js Developer",
		"Node.js Developer",
		"Vue.js Developer",
		"JavaScript Developer",
		"TypeScript Developer",
		"Web Developer",
		"Frontend Developer",
		"Backend Developer",
		"Open Source Contributor",
		"Mermaid.js",
		"FarmData2",
		"Computer Science",
		"Software Development",
		"Web Development Portfolio",
		"Sarva",
		"AWS",
		"Firebase",
		"MongoDB",
		"PostgreSQL",
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
		title: "Shahir Ahmed | Full Stack Developer & Software Engineer",
		description:
			"Shahir Ahmed is a Full Stack Developer specializing in React, Next.js, Node.js, and cloud technologies. Open source contributor with production experience at Sarva, Mermaid.js, and FarmData2.",
		images: [
			{
				url: "https://www.shahirahmed.com/shahir.jpeg",
				width: 400,
				height: 400,
				alt: "Shahir Ahmed - Full Stack Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Shahir Ahmed | Full Stack Developer & Software Engineer",
		description:
			"Full Stack Developer specializing in React, Next.js, Node.js. Open source contributor to Mermaid.js and FarmData2.",
		images: ["https://www.shahirahmed.com/shahir.jpeg"],
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
			name: "Shahir Ahmed - Full Stack Developer Portfolio",
			description:
				"Personal portfolio website of Shahir Ahmed, a Full Stack Developer and Software Engineer.",
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
				"Full Stack Developer and Software Engineer with expertise in React, Next.js, Node.js, Vue.js, AWS, and Firebase. Recent Computer Science & Mathematics graduate with professional experience at Sarva and contributions to major open source projects including Mermaid.js and FarmData2.",
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
				"JavaScript",
				"TypeScript",
				"React",
				"Next.js",
				"Vue.js",
				"Node.js",
				"Express.js",
				"MongoDB",
				"PostgreSQL",
				"AWS",
				"Firebase",
				"Full Stack Development",
				"Web Development",
				"Software Engineering",
				"Open Source Development",
			],
			sameAs: [
				"https://github.com/Shahir-47",
				"https://www.linkedin.com/in/shahir47/",
				"https://devpost.com/Shahir-47",
				"https://instagram.com/shahirahmed._",
				"https://shahir-47.blogspot.com/",
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

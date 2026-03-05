import About from "@/components/About";

const siteUrl = "https://www.shahirahmed.com";
const ogImageUrl = "/opengraph-image";

// About page SEO metadata
export const metadata = {
	title: "About Me",
	description:
		"Learn about Shahir Ahmed's experience at Sarva, FarmData2, Mermaid.js, and hackathons including HackHarvard and PennApps. Recent projects include GrabPic (facial recognition photo sharing), PaperPulse (AI research platform with knowledge graphs), and BitTorrent Client JS.",
	alternates: {
		canonical: `${siteUrl}/about`,
	},
	openGraph: {
		type: "profile",
		title: "About Shahir Ahmed | Software Engineer",
		description:
			"Background, work experience, open source contributions, hackathons, education, and certifications for Shahir Ahmed. Builder of GrabPic, PaperPulse, BitTorrent Client JS, Sarva, and more.",
		url: `${siteUrl}/about`,
		images: [ogImageUrl],
	},
	twitter: {
		card: "summary_large_image",
		title: "About Shahir Ahmed | Software Engineer",
		description:
			"Work experience, OSS contributions, hackathons, education, and certifications.",
		images: [ogImageUrl],
	},
};

// About page JSON-LD
const aboutPageJsonLd = {
	"@context": "https://schema.org",
	"@type": "AboutPage",
	"@id": `${siteUrl}/about#aboutpage`,
	url: `${siteUrl}/about`,
	name: "About Shahir Ahmed",
	description:
		"About page covering Shahir Ahmed's professional background, technical skills, open source contributions, hackathon work, education, and certifications.",
	isPartOf: {
		"@id": `${siteUrl}/#website`,
	},
	mainEntity: {
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
				name: "About",
				item: `${siteUrl}/about`,
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

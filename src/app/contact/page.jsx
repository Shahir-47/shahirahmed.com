import ContactMe from "@/components/ContactMe";

const siteUrl = "https://www.shahirahmed.com";
const ogImageUrl = "/opengraph-image";

// Contact page SEO metadata
export const metadata = {
	title: "Contact Me",
	description:
		"Get in touch with Shahir Ahmed for software engineering roles, collaborations, consulting, or open source projects.",
	alternates: {
		canonical: `${siteUrl}/contact`,
	},
	openGraph: {
		type: "website",
		title: "Contact Shahir Ahmed | Software Engineer",
		description:
			"Contact Shahir Ahmed for software engineering collaborations, opportunities, and project discussions.",
		url: `${siteUrl}/contact`,
		images: [ogImageUrl],
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Shahir Ahmed",
		description:
			"Reach out for roles, collaborations, consulting, and open source work.",
		images: [ogImageUrl],
	},
};

// Contact page JSON-LD
const contactPageJsonLd = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	"@id": `${siteUrl}/contact#contactpage`,
	url: `${siteUrl}/contact`,
	name: "Contact Shahir Ahmed",
	description:
		"Contact page for reaching Shahir Ahmed about software engineering roles and collaborations.",
	isPartOf: {
		"@id": `${siteUrl}/#website`,
	},
	mainEntity: {
		"@type": "Person",
		"@id": `${siteUrl}/#person`,
		contactPoint: {
			"@type": "ContactPoint",
			email: "shahir@shahirahmed.com",
			contactType: "professional inquiries",
			availableLanguage: "English",
		},
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
				name: "Contact",
				item: `${siteUrl}/contact`,
			},
		],
	},
};

export default function ContactPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
			/>
			<ContactMe />
		</>
	);
}

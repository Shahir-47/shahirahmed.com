import ContactMe from "@/components/ContactMe";

// Contact page SEO metadata
export const metadata = {
	title: "Contact Me",
	description:
		"Get in touch with Shahir Ahmed. Full Stack Developer available for freelance projects, collaborations, and job opportunities. Connect via email, LinkedIn, GitHub, or the contact form.",
	alternates: {
		canonical: "https://shahirahmed.com/contact",
	},
	openGraph: {
		title: "Contact Shahir Ahmed | Full Stack Developer",
		description:
			"Get in touch with Shahir Ahmed for freelance projects, collaborations, and job opportunities.",
		url: "https://www.shahirahmed.com/contact",
		images: [
			{
				url: "https://www.shahirahmed.com/shahir.jpeg",
				width: 400,
				height: 400,
				alt: "Shahir Ahmed - Full Stack Developer",
			},
		],
	},
};

// Contact page JSON-LD
const contactPageJsonLd = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	"@id": "https://shahirahmed.com/contact#contactpage",
	url: "https://shahirahmed.com/contact",
	name: "Contact Shahir Ahmed",
	description:
		"Get in touch with Shahir Ahmed for project inquiries, collaborations, or job opportunities.",
	isPartOf: {
		"@id": "https://shahirahmed.com/#website",
	},
	mainEntity: {
		"@type": "Person",
		"@id": "https://shahirahmed.com/#person",
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
				item: "https://shahirahmed.com",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Contact",
				item: "https://shahirahmed.com/contact",
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

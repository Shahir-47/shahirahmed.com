"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" },
];

const socials = [
	{ href: "mailto:shahir.a@outlook.com", label: "Email", Icon: FaEnvelope },
	{ href: "https://www.linkedin.com/in/shahir47/", label: "LinkedIn", Icon: FaLinkedin },
	{ href: "https://github.com/Shahir-47", label: "GitHub", Icon: FaGithub },
	{ href: "https://instagram.com/shahirahmed._", label: "Instagram", Icon: FaInstagram },
	{ href: "https://devpost.com/Shahir-47", label: "Devpost", Icon: SiDevpost },
];

const Footer = () => {
	const pathname = usePathname();

	// The home page ends on the hero, so it carries no footer.
	if (pathname === "/") return null;

	return (
		<footer className="footer" role="contentinfo">
			<nav className="footer-nav" aria-label="Footer">
				{links.map(({ href, label }) => (
					<Link key={href} href={href}>
						{label}
					</Link>
				))}
			</nav>

			<div className="footer-socials">
				{socials.map(({ href, label, Icon }) => (
					<a
						key={label}
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={label}
						className="icon-container"
					>
						<Icon aria-hidden="true" />
					</a>
				))}
			</div>

			<p className="footer-legal">
				&copy; {new Date().getFullYear()} Shahir Ahmed &nbsp;&middot;&nbsp;{" "}
				<a
					href="https://github.com/Shahir-47/shahirahmed.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Source code
				</a>
			</p>
		</footer>
	);
};

export default Footer;

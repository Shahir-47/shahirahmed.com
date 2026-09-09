"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
	const pathname = usePathname();

	// Home closes on its own contact section and about closes on connect, so
	// neither carries a footer.
	if (pathname === "/" || pathname === "/about") return null;

	return (
		<footer className="footer" role="contentinfo">
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

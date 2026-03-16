import Image from "next/image";
import GitHub from "@/assets/gitSocial.svg";

const Footer = () => {
	return (
		<footer className="footer" role="contentinfo">
			<a
				href="https://github.com/Shahir-47"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visit Shahir Ahmed's GitHub profile"
			>
				<Image src={GitHub} alt="" width={24} height={24} aria-hidden="true" />
				<p>
					<span className="at-symbol">@</span>Shahir-47
				</p>
			</a>
			<p aria-hidden="true">|</p>
			<a
				href="https://github.com/Shahir-47/shahirahmed.com"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="View source code on GitHub"
			>
				Source Code
			</a>
		</footer>
	);
};

export default Footer;

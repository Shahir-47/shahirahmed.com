import { SiDevpost } from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
	return (
		<div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
			<a
				href="mailto:ahmeds@dickinson.edu"
				className="icon-container"
				aria-label="Email"
			>
				<FaEnvelope />
			</a>
			<a
				href="https://www.linkedin.com/in/shahir47/"
				className="icon-container"
				aria-label="LinkedIn"
			>
				<FaLinkedin />
			</a>
			<a
				href="https://github.com/Shahir-47"
				className="icon-container"
				aria-label="GitHub"
			>
				<FaGithub />
			</a>
			<a
				href="https://instagram.com/shahirahmed._"
				className="icon-container"
				aria-label="Instagram"
			>
				<FaInstagram />
			</a>
			<a
				href="https://devpost.com/ahmeds561"
				className="icon-container"
				aria-label="Devpost"
			>
				<SiDevpost />
			</a>
		</div>
	);
};

export default SocialIcons;

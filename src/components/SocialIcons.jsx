import { SiDevpost } from "react-icons/si";
import {
	FaGithub,
	FaLinkedin,
	FaEnvelope,
	FaInstagram,
	FaBlogger,
} from "react-icons/fa";

const SocialIcons = () => {
	return (
		<div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
			<a
				href="mailto:ahmeds@dickinson.edu"
				target="_blank"
				rel="noopener noreferrer"
				className="icon-container"
				aria-label="Email"
			>
				<FaEnvelope />
			</a>
			<a
				href="https://www.linkedin.com/in/shahir47/"
				target="_blank"
				rel="noopener noreferrer"
				className="icon-container"
				aria-label="LinkedIn"
			>
				<FaLinkedin />
			</a>
			<a
				href="https://github.com/Shahir-47"
				target="_blank"
				rel="noopener noreferrer"
				className="icon-container"
				aria-label="GitHub"
			>
				<FaGithub />
			</a>
			<a
				href="https://instagram.com/shahirahmed._"
				target="_blank"
				rel="noopener noreferrer"
				className="icon-container"
				aria-label="Instagram"
			>
				<FaInstagram />
			</a>
			<a
				href="https://devpost.com/ahmeds561"
				target="_blank"
				rel="noopener noreferrer"
				className="icon-container"
				aria-label="Devpost"
			>
				<SiDevpost />
			</a>
			<a
				href="https://shahir-47.blogspot.com/"
				target="_blank"
				rel="noopener noreferrer"
				className="icon-container"
				aria-label="Blog"
			>
				<FaBlogger />
			</a>
		</div>
	);
};

export default SocialIcons;

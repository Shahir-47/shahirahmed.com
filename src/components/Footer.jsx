import GitHub from "../assets/gitSocial.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<a
				href="https://github.com/Shahir-47"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={GitHub} alt="GitHub Logo" />
				<p>
					<span className="at-symbol">@</span>Shahir-47
				</p>
			</a>
			<p>|</p>
			<a
				href="https://github.com/Shahir-47/Portfolio-Website"
				target="_blank"
				rel="noopener noreferrer"
			>
				Source Code
			</a>
		</footer>
	);
};

export default Footer;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../assets/icon.svg";
import Home from "../assets/home.svg";
import About from "../assets/about.svg";
import Code from "../assets/code.svg";
import phone from "../assets/phone.svg";
import Doc from "../assets/doc.svg";
import hamburgerImg from "../assets/hamburger.svg";

const Navbar = () => {
	const [hamburgerClass, setHamburgerClass] = useState("");
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();

	const toggleHamburgerMenu = () => {
		if (hamburgerClass === "" || hamburgerClass === "inactive") {
			setHamburgerClass("active");
		} else if (hamburgerClass === "active") {
			setHamburgerClass("inactive");
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const isActive = (path) => {
		if (
			path === "/" &&
			(location.pathname === "/" || location.pathname === "/home")
		) {
			return "active";
		}
		return location.pathname === path ? "active" : "";
	};

	return (
		<nav className={`nav-bar ${isScrolled ? "nav-bar-scrolled" : ""}`}>
			<div className="log-container">
				<Link to="/" className="logo-box">
					<img src={Icon} alt="logo" />
					<h1>Shahir Ahmed</h1>
				</Link>
			</div>
			<div className="nav-links">
				<Link to="/" className={`nav-box ${isActive("/")}`}>
					<span>Home</span>
					<img src={Home} alt="home" />
				</Link>
				<Link to="/about" className={`nav-box ${isActive("/about")}`}>
					<span>About</span>
					<img src={About} alt="about" />
				</Link>
				<Link to="/projects" className={`nav-box ${isActive("/projects")}`}>
					<span>Projects</span>
					<img src={Code} alt="projects" />
				</Link>
				<Link to="/contact" className={`nav-box ${isActive("/contact")}`}>
					<span>Contact</span>
					<img src={phone} alt="contact" />
				</Link>

				<a
					href="https://drive.google.com/file/d/1KXPdYbmQQVwjGAx_jBstJnJ54bNlm4Wf/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="nav-box"
				>
					<span>Resume</span>
					<img src={Doc} alt="resume" />
				</a>
				<div className="hamburger" onClick={toggleHamburgerMenu}>
					<img src={hamburgerImg} alt="hamburger menu" />
					<div className={`hamburger-menu ${hamburgerClass}`}>
						<Link to="/" onClick={() => setHamburgerClass("inactive")}>
							Home
						</Link>
						<Link to="/about" onClick={() => setHamburgerClass("inactive")}>
							About
						</Link>
						<Link to="/projects" onClick={() => setHamburgerClass("inactive")}>
							Projects
						</Link>
						<Link to="/contact" onClick={() => setHamburgerClass("inactive")}>
							Contact
						</Link>

						<a
							href="https://drive.google.com/file/d/1KXPdYbmQQVwjGAx_jBstJnJ54bNlm4Wf/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setHamburgerClass("inactive")}
						>
							Resume
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

import { useState, useEffect } from "react";
import Icon from "../assets/icon.svg";
import Home from "../assets/home.svg";
import About from "../assets/about.svg";
import Code from "../assets/code.svg";
import Doc from "../assets/doc.svg";
import hamburgerImg from "../assets/hamburger.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [hamburgerClass, setHamburgerClass] = useState(""); // No initial class
	const [isScrolled, setIsScrolled] = useState(false);

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

	return (
		<nav className={`nav-bar ${isScrolled ? "nav-bar-scrolled" : ""}`}>
			<div className="log-container">
				<Link to="/">
					<div className="logo-box">
						<img src={Icon} alt="logo" />
						<h1>Shahir Ahmed</h1>
					</div>
				</Link>
			</div>
			<div className="nav-links">
				<Link to="/">
					<div className="nav-box">
						<span>Home</span>
						<img src={Home} alt="home" />
					</div>
				</Link>
				<Link to="/about">
					<div className="nav-box">
						<span>About</span>
						<img src={About} alt="about" />
					</div>
				</Link>
				<Link to="/projects">
					<div className="nav-box">
						<span>Projects</span>
						<img src={Code} alt="projects" />
					</div>
				</Link>
				<a
					href="https://drive.google.com/file/d/1YXAy4b7gfQIbTt0mnD-grfHBZKfvHVvz/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="nav-box">
						<span>Resume</span>
						<img src={Doc} alt="resume" />
					</div>
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
						<a
							href="https://drive.google.com/file/d/1YXAy4b7gfQIbTt0mnD-grfHBZKfvHVvz/view?usp=sharing"
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

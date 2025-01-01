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
				<div className="logo-box">
					<Link to="/">
						<img src={Icon} alt="logo" />
					</Link>
					<Link to="/">
						<h1>Shahir Ahmed</h1>
					</Link>
				</div>
			</div>
			<div className="nav-links">
				<div className="nav-box">
					<Link to="/">Home</Link>
					<img src={Home} alt="home" />
				</div>
				<div className="nav-box">
					<Link to="/about">About</Link>
					<img src={About} alt="about" />
				</div>
				<div className="nav-box">
					<Link to="/projects">Projects</Link>
					<img src={Code} alt="projects" />
				</div>
				<div className="nav-box">
					<a
						href="https://drive.google.com/file/d/1YXAy4b7gfQIbTt0mnD-grfHBZKfvHVvz/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
					<img src={Doc} alt="resume" />
				</div>
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

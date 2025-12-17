"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Icon from "@/assets/icon.svg";
import Home from "@/assets/home.svg";
import AboutIcon from "@/assets/about.svg";
import Code from "@/assets/code.svg";
import phone from "@/assets/phone.svg";
import Doc from "@/assets/doc.svg";
import hamburgerImg from "@/assets/hamburger.svg";

const Navbar = () => {
	const [hamburgerClass, setHamburgerClass] = useState("");
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

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
		if (path === "/" && (pathname === "/" || pathname === "/home")) {
			return "active";
		}
		return pathname === path ? "active" : "";
	};

	return (
		<nav
			className={`nav-bar ${isScrolled ? "nav-bar-scrolled" : ""}`}
			aria-label="Main navigation"
		>
			<div className="log-container">
				<Link href="/" className="logo-box" aria-label="Shahir Ahmed - Home">
					<Image src={Icon} alt="Shahir Ahmed logo" width={28} height={28} />
					<h1>Shahir Ahmed</h1>
				</Link>
			</div>
			<div className="nav-links">
				<Link
					href="/"
					className={`nav-box ${isActive("/")}`}
					aria-label="Home page"
				>
					<span>Home</span>
					<Image src={Home} alt="" width={24} height={24} aria-hidden="true" />
				</Link>
				<Link
					href="/about"
					className={`nav-box ${isActive("/about")}`}
					aria-label="About page"
				>
					<span>About</span>
					<Image
						src={AboutIcon}
						alt=""
						width={24}
						height={24}
						aria-hidden="true"
					/>
				</Link>
				<Link
					href="/projects"
					className={`nav-box ${isActive("/projects")}`}
					aria-label="Projects page"
				>
					<span>Projects</span>
					<Image src={Code} alt="" width={24} height={24} aria-hidden="true" />
				</Link>
				<Link
					href="/contact"
					className={`nav-box ${isActive("/contact")}`}
					aria-label="Contact page"
				>
					<span>Contact</span>
					<Image src={phone} alt="" width={24} height={24} aria-hidden="true" />
				</Link>

				<a
					href="https://drive.google.com/file/d/1KXPdYbmQQVwjGAx_jBstJnJ54bNlm4Wf/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="nav-box"
					aria-label="View Resume (opens in new tab)"
				>
					<span>Resume</span>
					<Image src={Doc} alt="" width={24} height={24} aria-hidden="true" />
				</a>
				<div
					className="hamburger"
					onClick={toggleHamburgerMenu}
					role="button"
					aria-label="Toggle navigation menu"
					tabIndex={0}
					onKeyDown={(e) => e.key === "Enter" && toggleHamburgerMenu()}
				>
					<Image
						src={hamburgerImg}
						alt=""
						width={24}
						height={24}
						aria-hidden="true"
					/>
					<div className={`hamburger-menu ${hamburgerClass}`} role="menu">
						<Link
							href="/"
							onClick={() => setHamburgerClass("inactive")}
							role="menuitem"
						>
							Home
						</Link>
						<Link
							href="/about"
							onClick={() => setHamburgerClass("inactive")}
							role="menuitem"
						>
							About
						</Link>
						<Link
							href="/projects"
							onClick={() => setHamburgerClass("inactive")}
							role="menuitem"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							onClick={() => setHamburgerClass("inactive")}
							role="menuitem"
						>
							Contact
						</Link>

						<a
							href="https://drive.google.com/file/d/1KXPdYbmQQVwjGAx_jBstJnJ54bNlm4Wf/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setHamburgerClass("inactive")}
							role="menuitem"
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

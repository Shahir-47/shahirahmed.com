"use client";

import { useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";
import HeroArt from "./HeroArt";
import SocialIcons from "./SocialIcons";

const RESUME_URL =
	"https://drive.google.com/file/d/1KXPdYbmQQVwjGAx_jBstJnJ54bNlm4Wf/view?usp=sharing";

const HomePage = () => {
	useEffect(() => {
		const typed = new Typed("#typed-text", {
			strings: [
				"Software Engineer",
				"Full Stack Engineer",
				"Backend Systems Builder",
				"Open Source Contributor",
				"Next.js & TypeScript Developer",
				"Spring Boot Developer",
				"Python & Data Engineer",
				"API & WebSocket Builder",
			],
			typeSpeed: 50,
			backSpeed: 25,
			startDelay: 800,
			backDelay: 2000,
			loop: true,
			showCursor: true,
			cursorChar: "|",
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div className="main-container">
			<section className="first-block-home" aria-label="Introduction">
				<div className="text-container">
					<div className="sub-text-container">
						<div className="first-text-container">
							<h3>Hi, There!</h3>
						</div>
						<div className="second-text-container">
							<h5>
								I&apos;m <span className="name">Shahir Ahmed</span>
							</h5>
						</div>
					</div>

					<div className="typed-text-container">
						<p
							id="typed-text"
							className="typed-text"
							aria-label="Software Engineer"
						></p>
					</div>

					<p className="sub-text">
						I build full-stack products, mostly the parts you never think
						about. Currently at <strong>Sarva</strong>, and a maintainer on{" "}
						<strong>Mermaid.js</strong>.
					</p>

					<div className="button-container">
						<Link className="btn btn-primary" href="/projects">
							My Projects
						</Link>
						<Link className="btn btn-ghost" href="/about">
							About Me
						</Link>
						<a
							className="btn btn-ghost"
							href={RESUME_URL}
							target="_blank"
							rel="noopener noreferrer"
						>
							My Resume
						</a>
					</div>

					<SocialIcons />
				</div>

				<div className="image-container">
					<HeroArt className="computer" />
				</div>
			</section>
		</div>
	);
};

export default HomePage;

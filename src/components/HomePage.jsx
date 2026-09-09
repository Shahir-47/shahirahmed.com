"use client";

import { useEffect } from "react";
import Typed from "typed.js";
import Image from "next/image";
import Link from "next/link";
import Desk from "@/assets/desk.svg";
import SocialIcons from "./SocialIcons";
import AboutArt from "./AboutArt";
import ContactArt from "./ContactArt";
import { projectsData } from "./Projects";

const RESUME_URL =
	"https://drive.google.com/file/d/1KXPdYbmQQVwjGAx_jBstJnJ54bNlm4Wf/view?usp=sharing";

const FEATURED = ["Sarva", "GrabPic", "PaperPulse"];

// Card summaries need a predictable length or the grid rows go ragged.
const summarise = (text, limit = 165) => {
	const plain = text.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
	if (plain.length <= limit) return plain;
	const cut = plain.slice(0, limit);
	return `${cut.slice(0, cut.lastIndexOf(" "))}...`;
};

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

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

		const sections = document.querySelectorAll(".home-section");
		if (!sections.length) return undefined;

		// The hidden state only applies once this runs, so a blocked or failed
		// script leaves every section visible rather than blank.
		document.documentElement.classList.add("reveal-on");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					entry.target.classList.add("is-in");
					observer.unobserve(entry.target);
				});
			},
			{ threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
		);

		sections.forEach((section) => observer.observe(section));

		return () => {
			observer.disconnect();
			document.documentElement.classList.remove("reveal-on");
		};
	}, []);

	const featured = FEATURED.map((name) =>
		projectsData.find((project) => project.title === name)
	).filter(Boolean);

	return (
		<div className="main-container">
			{/* 1. Introduction */}
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
					<Image
						className="computer"
						src={Desk}
						alt="Illustration of a developer working at a desk"
						priority
					/>
				</div>
			</section>

			{/* 2. About */}
			<section className="home-section" id="about-preview" aria-labelledby="about-preview-title">
				<div className="home-about">
					<div>
						<h2 className="home-heading" id="about-preview-title">
							About <span className="accent">me</span>
						</h2>
						<p className="home-copy">
							I&apos;m a Computer Science and Mathematics graduate from
							Dickinson College. At Sarva I work on vector search, a voice
							pipeline for vendor inventory, and payments. Before that I spent a
							year on FarmData2, an NSF-funded platform that working farms use
							every day, and I still contribute to Mermaid.js.
						</p>
						<p className="home-copy">
							Outside of code I help new developers, play soccer, and follow
							Real Madrid.
						</p>
						<Link className="btn btn-primary" href="/about">
							Read more
						</Link>
					</div>

					<AboutArt className="home-portrait" />
				</div>
			</section>

			{/* 3. Selected work */}
			<section className="home-section" id="work-preview" aria-labelledby="work-preview-title">
				<h2 className="home-heading" id="work-preview-title">
					My recent <span className="accent">works</span>
				</h2>

				<div className="home-work-grid">
					{featured.map((project) => (
						<article className="home-work-card" key={project.title}>
							{project.image ? (
								<div className="home-work-media">
									<img src={project.image.src} alt={`${project.title} interface`} loading="lazy" />
								</div>
							) : null}
							<h3>{project.title}</h3>
							<p>{summarise(project.description)}</p>
							<div className="home-work-links">
								{project.liveDemo ? (
									<a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
										Visit
									</a>
								) : null}
								{project.sourceCode ? (
									<a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
										Source
									</a>
								) : null}
							</div>
						</article>
					))}
				</div>

				<Link className="btn btn-ghost" href="/projects">
					See all projects
				</Link>
			</section>

			{/* 4. Contact */}
			<section className="home-section home-contact" id="contact-preview" aria-labelledby="contact-preview-title">
				<div className="home-about">
					<div>
						<h2 className="home-heading" id="contact-preview-title">
							Got a project in <span className="accent">mind?</span>
						</h2>
						<p className="home-copy">
							Always happy to talk about a role, a project, or something you are
							stuck on. I read everything that comes in and I reply.
						</p>
						<div className="button-container">
							<Link className="btn btn-primary" href="/contact">
								Send a message
							</Link>
							<a className="btn btn-ghost" href="mailto:shahir.a@outlook.com">
								shahir.a@outlook.com
							</a>
						</div>
					</div>

					<ContactArt className="home-portrait" />
				</div>
			</section>
		</div>
	);
};

export default HomePage;

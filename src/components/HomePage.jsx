"use client";

import { useEffect } from "react";
import Typed from "typed.js";
import Image from "next/image";
import Link from "next/link";
import Desk from "@/assets/desk.svg";
import SocialIcons from "./SocialIcons";
import AboutArt from "./AboutArt";
import ContactArt from "./ContactArt";
import ScrollCue from "./ScrollCue";
import { projectsData } from "@/data/projects";

const RESUME_URL =
	"https://drive.google.com/file/d/1APlXopNkSxXLLTHnxH-MBNT3GJKWq9Rp/view?usp=sharing";

const FEATURED = ["GrabPic", "PaperPulse", "Home Server"];

const HomePage = () => {
	useEffect(() => {
		const typed = new Typed("#typed-text", {
			strings: [
				"Software Engineer",
				"Full Stack Engineer",
				"CS Master's Student at NYU",
				"Open Source Contributor",
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
							<h3>Hi there!</h3>
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
						I&apos;m a software engineer in New York, working on my Master&apos;s in
						Computer Science at <strong>NYU</strong>.
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


				<ScrollCue href="#about-preview" />

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
							I studied computer science and math at Dickinson College, and now
							I&apos;m doing my Master&apos;s at NYU.
						</p>
						<p className="home-copy">
							Most recently I worked at Sarva, a startup that helps neighborhood
							grocery shops manage their inventory. I built the voice assistant that
							lets shop owners update their stock just by talking to it in their own
							language.
						</p>
						<p className="home-copy">
							Before that, I was a software engineer intern on FarmData2, a research
							project at Dickinson College backed by the National Science Foundation
							and PASA Sustainable Agriculture. We built open source software that
							vegetable farms use to log their daily work and keep records for organic
							certification.
						</p>
						<p className="home-copy">
							I also contribute to Mermaid.js, an open source tool GitHub and
							Microsoft use to turn text into flowcharts and diagrams, and I&apos;m
							ranked 25th out of more than 600 contributors.
						</p>
						<Link className="btn btn-primary" href="/about">
							Read more
						</Link>
					</div>

					<AboutArt className="home-art" />
				</div>

				<ScrollCue href="#work-preview" />
			</section>

			{/* 3. Selected work */}
			<section className="home-section" id="work-preview" aria-labelledby="work-preview-title">
				<h2 className="home-heading" id="work-preview-title">
					My recent <span className="accent">projects</span>
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
							<p>{project.summary}</p>
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

				<ScrollCue href="#contact-preview" />
			</section>

			{/* 4. Contact */}
			<section className="home-section home-contact" id="contact-preview" aria-labelledby="contact-preview-title">
				<div className="home-about">
					<div>
						<h2 className="home-heading" id="contact-preview-title">
							Got a project in <span className="accent">mind?</span>
						</h2>
						<p className="home-copy">
							Always happy to talk about a role, a project, or something you&apos;re stuck
							on.
						</p>
						<div className="button-container">
							<Link className="btn btn-primary" href="/contact">
								Send a message
							</Link>
							<a className="btn btn-ghost" href="mailto:shahir.a@nyu.edu">
								shahir.a@nyu.edu
							</a>
						</div>
					</div>

					<ContactArt className="home-art home-art-contact" />
				</div>
			</section>
		</div>
	);
};

export default HomePage;

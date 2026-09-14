"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Shahir from "@/assets/shahir.jpeg";
import Dickinson from "@/assets/dickinson.png";
import FarmData2 from "@/assets/farmData2.png";
import MermaidJS from "@/assets/mermaid.webp";
import Lumber84 from "@/assets/84.png";
import Sarva from "@/assets/sarva_logo.jpeg";
import Hoya from "@/assets/hoya.png";
import PennApps from "@/assets/penn.png";
import HackHarvard from "@/assets/hackharvardlogo.png";
import Prospectus from "@/assets/prospectus.jpg";
import SweetFriend from "@/assets/sweetFriend.jpg";
import Albatross from "@/assets/albatross.png";
import HarvardX from "@/assets/Harvard_x_logo.png";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import { SiDevpost } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
import GitHubStats from "./GitHubStats";
import TableOfContents from "./TableOfContents";
import "react-vertical-timeline-component/style.min.css";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Box, Typography, Button } from "@mui/material";
import SocialIcons from "./SocialIcons";

const iconSize = {
	marginRight: "10px",
	fontSize: "1.5rem",
};

const About = () => {
	const router = useRouter();

	return (
		<div className="about-page-wrapper">
			<div className="about-page">
				{/* About Me */}
				<section id="about-me" className="about-container">
					<div className="about-text-container">
						<h1 className="about-me">
							About <span>Me</span>
						</h1>
					</div>
					<div className="about-me-div">
						<div className="about-me-text-div">
							<div className="paragraph">
								<p className="about-me-text">
									Hey, I&apos;m Shahir! I&apos;m a software engineer starting my
									Master&apos;s in Computer Science at NYU, and before that I studied
									computer science and math at Dickinson College.
								</p>
								<p className="about-me-text">
									Most recently I worked at{" "}
									<a
										href="https://www.sarvabazaar.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										Sarva
									</a>
									, a startup that helps neighborhood grocery shops run their store by
									voice. A lot of the shop owners were still tracking inventory on
									paper, so I built the voice assistant that lets them add stock or
									check what sold just by talking to it in their own language. While I
									was there, Sarva was picked for the gener8tor and Meta gBETA
									accelerator and made the finals at two pitch competitions.
								</p>
								<p className="about-me-text">
									Before Sarva, I was a software engineer intern on{" "}
									<a
										href="https://github.com/FarmData2"
										target="_blank"
										rel="noopener noreferrer"
									>
										FarmData2
									</a>
									, a research project at Dickinson College backed by the National
									Science Foundation and PASA Sustainable Agriculture. We built open
									source software that vegetable farms use to log their daily work, from
									seeding to harvest, and keep the records they need for organic
									certification.
								</p>
								<p className="about-me-text">
									I also contribute to{" "}
									<a
										href="https://github.com/mermaid-js/mermaid"
										target="_blank"
										rel="noopener noreferrer"
									>
										Mermaid.js
									</a>
									, the open source tool that turns a few lines of text into flowcharts
									and diagrams, used by GitHub and Microsoft. It gets over 10 million
									downloads a week, and I&apos;m ranked 25th out of more than 600
									contributors.
								</p>
								<p className="about-me-text">
									In my free time I build my own apps, like{" "}
									<a
										href="https://grab-pic.vercel.app"
										target="_blank"
										rel="noopener noreferrer"
									>
										GrabPic
									</a>
									. After weddings and events, I&apos;d end up searching the album for
									each person&apos;s face and sending them their photos one at a time,
									over and over. With GrabPic, the host shares one link and every guest
									takes a selfie to get only the photos they&apos;re in.
								</p>
								<p className="about-me-text">
									Feel free to check out my{" "}
									<a
										href="https://github.com/Shahir-47"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
									</a>{" "}
									or reach out through the links below.
								</p>
							</div>

							{/* Social Section */}
							<SocialIcons />
						</div>

						<Image
							src={Shahir}
							alt="Shahir Ahmed - Software Engineer"
							className="about-me-picture"
							width={300}
							height={300}
							priority
						/>
					</div>
				</section>

				{/* Tools and Technologies */}
				<section id="tools-technologies" className="tools-section">
					<div className="tools-header">
						<h2>
							<span className="highlight">Tools</span> and{" "}
							<span className="highlight">Technologies</span> I&apos;ve worked with
						</h2>
					</div>
					<div className="tools-grid">
						<div className="tools-category">
							<h3>Languages</h3>
							<div className="tools-icons">
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
									alt="TypeScript"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
									alt="JavaScript"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"
									alt="Java"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
									alt="Python"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=black"
									alt="C"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/SQL-003B57?style=for-the-badge&logo=postgresql&logoColor=white"
									alt="SQL"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white"
									alt="Lua"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
									alt="HTML5"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
									alt="CSS3"
								/>
							</div>
						</div>

						<div className="tools-category">
							<h3>Frontend</h3>
							<div className="tools-icons">
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
									alt="React"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"
									alt="Next.js"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white"
									alt="Vue.js"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Vuex-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white"
									alt="Vuex"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"
									alt="TailwindCSS"
								/>
							</div>
						</div>

						<div className="tools-category">
							<h3>Backend</h3>
							<div className="tools-icons">
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
									alt="Node.js"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
									alt="Express.js"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white"
									alt="Spring Boot"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white"
									alt="FastAPI"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
									alt="Flask"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
									alt="Django"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/REST%20APIs-02569B?style=for-the-badge"
									alt="REST APIs"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/WebSockets-010101?style=for-the-badge&logo=socketdotio&logoColor=white"
									alt="WebSockets"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"
									alt="JWT"
								/>
							</div>
						</div>

						<div className="tools-category">
							<h3>Databases</h3>
							<div className="tools-icons">
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white"
									alt="PostgreSQL"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/pgvector-336791?style=for-the-badge"
									alt="pgvector"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white"
									alt="Redis"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
									alt="MongoDB"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Neo4j-4581C3?style=for-the-badge&logo=neo4j&logoColor=white"
									alt="Neo4j"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"
									alt="Firebase"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"
									alt="Firestore"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white"
									alt="Supabase"
								/>
							</div>
						</div>

						<div className="tools-category">
							<h3>Cloud & DevOps</h3>
							<div className="tools-icons">
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge"
									alt="AWS"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
									alt="Docker"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"
									alt="GitHub Actions"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
									alt="Vercel"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white"
									alt="Cloudflare"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black"
									alt="Render"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
									alt="Netlify"
								/>
							</div>
						</div>

						<div className="tools-category">
							<h3>AI & Data</h3>
							<div className="tools-icons">
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openaigym&logoColor=white"
									alt="OpenAI"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"
									alt="TensorFlow"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Databricks-FF3621?style=for-the-badge&logo=databricks&logoColor=white"
									alt="Databricks"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/MLflow-0194E2?style=for-the-badge&logo=mlflow&logoColor=white"
									alt="MLflow"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Algolia-003DFF?style=for-the-badge&logo=algolia&logoColor=white"
									alt="Algolia"
								/>
							</div>
						</div>

						<div className="tools-category">
							<h3>APIs & Services</h3>
							<div className="tools-icons">
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white"
									alt="Stripe"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Spotify%20API-1DB954?style=for-the-badge&logo=spotify&logoColor=white"
									alt="Spotify API"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white"
									alt="Cloudinary"
								/>
							</div>
						</div>

						<div className="tools-category">
							<h3>Testing</h3>
							<div className="tools-icons">
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white"
									alt="Vitest"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white"
									alt="Cypress"
								/>
							</div>
						</div>

						<div className="tools-category">
							<h3>Tooling</h3>
							<div className="tools-icons">
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
									alt="Git"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
									alt="Linux"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white"
									alt="Apache Maven"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"
									alt="npm"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white"
									alt="pnpm"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"
									alt="Vite"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Work Experience Timeline */}
				<section id="work-experience" className="timeline-section">
					<h2>Work <span>Experience</span></h2>
					<VerticalTimeline
						lineColor="#00adb5"
						layout="1-column-left"
						className="timeline"
					>
						{/* Sarva */}
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{
								background: "#393e46",
								color: "#fff",
								boxShadow: "0 3px 0 #00adb5",
							}}
							contentArrowStyle={{ borderRight: "7px solid #393e46" }}
							date="May 2025 - Sep 2026"
							dateClassName={"custom-date"}
							iconStyle={{ background: "#00adb5", color: "#fff" }}
							icon={
								<img
									src={Sarva.src}
									alt="Sarva"
									style={{
										width: "100%",
										height: "100%",
										borderRadius: "50%",
										objectFit: "contain",
									}}
								/>
							}
						>
							<h3 className="vertical-timeline-element-title">
								Software Engineer
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								<span style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0 12px" }}>
									<span>Sarva</span>
									<span>Carlisle, PA</span>
								</span>
								<span style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px", marginTop: "6px" }}>
									<a
										href="https://www.sarvabazaar.com"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "#00adb5", textDecoration: "underline" }}
									>
										sarvabazaar.com
									</a>
								</span>
							</h4>
							<ul>
								<li>
									Replaced pen and paper inventory at independent grocery stores with a
									voice assistant that updates stock in 90+ languages
								</li>
								<li>
									Integrated Stripe so every payment splits between the store and the
									driver and no card is charged until pickup
								</li>
								<li>
									Improved product and inventory search 7% by adding semantic search
									with OpenAI embeddings alongside keyword matching
								</li>
								<li>
									Built 3 CI/CD pipelines in GitHub Actions running 2,604 unit tests
									across 173 REST API endpoints to catch bugs before merge
								</li>
								<li>
									Chosen for the gener8tor and Meta gBETA accelerator and named a
									finalist at Ship Tank and launchU pitch competitions
								</li>
							</ul>
						</VerticalTimelineElement>

						{/* Mermaid.js */}
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{
								background: "#393e46",
								color: "#fff",
								boxShadow: "0 3px 0 #00adb5",
							}}
							contentArrowStyle={{ borderRight: "7px solid #393e46" }}
							date="Jan 2025 - Apr 2026"
							dateClassName={"custom-date"}
							iconStyle={{ background: "#00adb5", color: "#fff" }}
							icon={
								<img
									src={MermaidJS.src}
									alt="Mermaid.js"
									style={{ width: "100%", height: "100%", borderRadius: "50%" }}
								/>
							}
						>
							<h3 className="vertical-timeline-element-title">
								Open Source Contributor
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								<span style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0 12px" }}>
									<span>Mermaid.js</span>
									<span>Remote</span>
								</span>
								<span style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px", marginTop: "6px" }}>
									<a
										href="https://github.com/mermaid-js/mermaid/pulls?q=is%3Apr+involves%3AShahir-47+is%3Aclosed"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "#00adb5", textDecoration: "underline" }}
									>
										Pull requests
									</a>
									<a
										href="https://github.com/mermaid-js/mermaid/graphs/contributors"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "#00adb5", textDecoration: "underline" }}
									>
										Contributor ranking
									</a>
									<a
										href="https://github.com/mermaid-js/mermaid"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "#00adb5", textDecoration: "underline" }}
									>
										GitHub repository
									</a>
								</span>
							</h4>
							<ul>
								<li>
									Ranked 25th among 600+ contributors by merging 3 pull requests into a
									diagramming library with 10M+ weekly downloads
								</li>
								<li>
									Shipped chart and journey diagram features into a 100,000 line
									TypeScript codebase used by GitHub and Microsoft
								</li>
								<li>
									Wrote Cypress end-to-end tests for each feature and cleared every
									automated check before a maintainer approved it
								</li>
							</ul>
						</VerticalTimelineElement>

						{/* FarmData2 */}
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{
								background: "#393e46",
								color: "#fff",
								boxShadow: "0 3px 0 #00adb5",
							}}
							contentArrowStyle={{ borderRight: "7px solid #393e46" }}
							date="May 2024 - May 2025"
							dateClassName={"custom-date"}
							iconStyle={{ background: "rgb(82 91 58)", color: "#fff" }}
							icon={
								<img
									src={FarmData2.src}
									alt="FarmData2"
									style={{ width: "100%", height: "100%", borderRadius: "50%" }}
								/>
							}
						>
							<h3 className="vertical-timeline-element-title">
								Software Engineer Intern
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								<span style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0 12px" }}>
									<span>FarmData2, Dickinson College</span>
									<span>Carlisle, PA</span>
								</span>
								<span style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px", marginTop: "6px" }}>
									<a
										href="https://github.com/FarmData2/FarmData2"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "#00adb5", textDecoration: "underline" }}
									>
										GitHub repository
									</a>
									<a
										href="https://github.com/FarmData2/FarmData2/pulls?q=is%3Apr+involves%3AShahir-47+is%3Aclosed"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "#00adb5", textDecoration: "underline" }}
									>
										Pull requests
									</a>
								</span>
							</h4>
							<ul>
								<li>
									Cut page load time by 60% on a National Science Foundation funded farm
									platform by moving 22+ Vue.js components to Vuex
								</li>
								<li>
									Automated crop logging to save farmers 12+ hours a week by building
									18+ Node.js REST APIs and 30+ Cypress tests
								</li>
							</ul>
						</VerticalTimelineElement>

						{/* Teaching Assistant */}
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{
								background: "#393e46",
								color: "#fff",
								boxShadow: "0 3px 0 #00adb5",
							}}
							contentArrowStyle={{ borderRight: "7px solid #393e46" }}
							date="Sep 2022 - May 2025"
							dateClassName={"custom-date"}
							iconStyle={{ background: "#00adb5", color: "#fff" }}
							icon={
								<img
									src={Dickinson.src}
									alt="Dickinson College"
									style={{
										width: "100%",
										height: "100%",
										borderRadius: "50%",
										objectFit: "contain",
									}}
								/>
							}
						>
							<h3 className="vertical-timeline-element-title">
								Teaching Assistant
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								<span style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0 12px" }}>
									<span>Computer Science Department, Dickinson College</span>
									<span>Carlisle, PA</span>
								</span>
							</h4>
							<ul>
								<li>
									Raised average assignment scores by 15% for 25+ students across 6
									semesters through weekly Python and Java code reviews
								</li>
							</ul>
						</VerticalTimelineElement>

						{/* 84 Lumber (Volunteer) */}
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{
								background: "#393e46",
								color: "#fff",
								boxShadow: "0 3px 0 #00adb5",
							}}
							contentArrowStyle={{ borderRight: "7px solid #393e46" }}
							date="Sep 2023 - Jan 2024"
							dateClassName={"custom-date"}
							iconStyle={{ background: "#00adb5", color: "#fff" }}
							icon={
								<img
									src={Lumber84.src}
									alt="84 Lumber"
									style={{ width: "100%", height: "100%", borderRadius: "50%" }}
								/>
							}
						>
							<h3 className="vertical-timeline-element-title">
								Software Developer, Volunteer
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								<span style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0 12px" }}>
									<span>84 Lumber</span>
									<span>Remote</span>
								</span>
								<span style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px", marginTop: "6px" }}>
									<a
										href="https://www.dickinson.edu/news/article/5821/dickinson_students_work_with_alum_to_breathe_new_life_into_84_lumbers_legacy_systems"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "#00adb5", textDecoration: "underline" }}
									>
										Featured in Dickinson News
									</a>
								</span>
							</h4>
							<ul>
								<li>
									Converted 10,000+ lines of legacy CBASIC into Python and Java for a
									$9B retailer by building a translator with ANTLR
								</li>
							</ul>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</section>

				{/* OSS Contributions */}
				<section id="open-source" className="oss-section">
					<h2 className="section-title">Open Source Contributions</h2>

					<div
						className="open-source-section"
						style={{
							maxWidth: 950,
							margin: "0 auto",
							padding: "0 1.2rem",
						}}
					>
						{/* Mermaid.js */}
						<div className="oss-item">
							<img
								src={MermaidJS.src}
								alt="Mermaid.js"
								style={{
									width: 65,
									height: 65,
									borderRadius: 14,
									objectFit: "cover",
									background: "#fff",
									marginRight: 0,
									boxShadow: "0 0 10px 1px #0005",
								}}
							/>
							<div style={{ flex: 1 }}>
								<div
									style={{
										display: "flex",
										flexWrap: "wrap",
										alignItems: "baseline",
										gap: "4px 12px",
									}}
								>
									<a
										href="https://github.com/mermaid-js/mermaid"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											color: "var(--teal)",
											fontWeight: 600,
											fontSize: "1.33rem",
										}}
									>
										Mermaid.js
									</a>
									<span style={{ color: "var(--text-2)", fontSize: 15 }}>
										Ranked 25th out of 600+ contributors
									</span>
								</div>
								<div
									style={{
										marginTop: 8,
										fontSize: 14,
										fontWeight: 600,
										color: "var(--teal)",
									}}
								>
									<a
										href="https://npmtrends.com/mermaid"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "var(--teal)" }}
									>
										10M+ weekly downloads
									</a>{" "}
									· Used by GitHub and Microsoft
								</div>
								<p
									style={{
										margin: "14px 0 0",
										fontSize: 15,
										lineHeight: 1.6,
										color: "var(--text-2)",
									}}
								>
									An open source tool that turns plain text into flowcharts and diagrams.
								</p>
								<p
									style={{
										margin: "14px 0 0",
										fontSize: 16,
										lineHeight: 1.65,
										color: "var(--text)",
									}}
								>
									I&apos;ve merged 3 pull requests into Mermaid, and every change I made shipped
									with Cypress end-to-end tests and passed all of its automated checks before
									a maintainer approved it. Here&apos;s what I added:
								</p>
								<ul
									style={{
										fontSize: 15,
										lineHeight: 1.55,
										color: "var(--text-2)",
										margin: "8px 0 0",
										paddingLeft: 18,
									}}
								>
									<li style={{ marginTop: 6 }}>
										<a
											href="https://github.com/mermaid-js/mermaid/pull/6475"
											target="_blank"
											rel="noopener noreferrer"
											style={{ color: "var(--teal)", textDecoration: "underline" }}
										>
											A showDataLabel option that draws values inside bar charts and sizes
											them to fit every bar
										</a>
									</li>
									<li style={{ marginTop: 6 }}>
										<a
											href="https://github.com/mermaid-js/mermaid/pull/6274"
											target="_blank"
											rel="noopener noreferrer"
											style={{ color: "var(--teal)", textDecoration: "underline" }}
										>
											Knuth-Plass word wrapping for journey diagram legends, so long labels
											stop overlapping the diagram
										</a>
									</li>
									<li style={{ marginTop: 6 }}>
										<a
											href="https://github.com/mermaid-js/mermaid/pull/6225"
											target="_blank"
											rel="noopener noreferrer"
											style={{ color: "var(--teal)", textDecoration: "underline" }}
										>
											Title color, font, and size options for journey diagrams
										</a>
									</li>
								</ul>
								<div
									style={{
										display: "flex",
										flexWrap: "wrap",
										gap: "6px 22px",
										marginTop: 18,
										fontSize: 14,
									}}
								>
									<a
										href="https://github.com/mermaid-js/mermaid/graphs/contributors"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "var(--teal)" }}
									>
										Contributor graph
									</a>
									<a
										href="https://github.com/mermaid-js/mermaid/pulls?q=is%3Apr+involves%3AShahir-47+is%3Aclosed"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "var(--teal)" }}
									>
										All pull requests
									</a>
								</div>
							</div>
						</div>

						{/* Full Portfolio */}
						<div className="oss-item">
							<div style={{ flex: 1 }}>
								<div
									style={{
										fontWeight: 600,
										fontSize: "1.17rem",
										color: "var(--teal)",
									}}
								>
									See My Full Open Source Portfolio
								</div>
								<p
									style={{
										margin: "8px 0 0",
										fontSize: 15,
										lineHeight: 1.6,
										color: "var(--text-2)",
									}}
								>
									The projects I&apos;ve contributed to, with a link to each merged pull
									request.
								</p>
								<a
									href="https://github.com/Shahir-47/open-source-contributions"
									target="_blank"
									rel="noopener noreferrer"
									id="open-source-button"
									style={{
										display: "inline-block",
										background: "#00adb5",
										color: "#fff",
										borderRadius: 8,
										padding: "7px 18px",
										fontWeight: 500,
										fontSize: 15,
										marginTop: 16,
										textDecoration: "none",
										boxShadow: "0 1px 3px 0 rgba(0, 173, 181, 0.10)",
										transition: "background 0.3s ease",
									}}
								>
									Open Source Portfolio →
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Hackathon Experience Timeline */}
				<section id="hackathons" className="timeline-section">
					<h2 className="hack-h2">Hackathon <span>Experience</span></h2>
					<VerticalTimeline
						lineColor="#00adb5"
						layout="1-column-left"
						className="timeline"
					>
						{/* HoyaHacks: Prospectus */}
						<VerticalTimelineElement
							className="vertical-timeline-element--hackathon"
							contentStyle={{
								background: "#393e46",
								color: "#fff",
								boxShadow: "0 3px 0 #00adb5",
							}}
							contentArrowStyle={{ borderRight: "7px solid #393e46" }}
							date="HoyaHacks 2024"
							dateClassName={"custom-date"}
							iconStyle={{ background: "#00adb5", color: "#fff" }}
							icon={
								<img
									src={Hoya.src}
									alt="HoyaHacks"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "contain",
										borderRadius: "50%",
									}}
								/>
							}
						>
							<h3 className="vertical-timeline-element-title">Prospectus</h3>
							<h4 className="vertical-timeline-element-subtitle">HoyaHacks</h4>
							<img
								src={Prospectus.src}
								alt="Prospectus - AI college admissions assistant built at HoyaHacks 2024"
								loading="lazy"
								decoding="async"
								style={{
									width: "100%",
									borderRadius: "8px",
									marginTop: "1rem",
									border: "2px solid #00adb5",
									padding: "5px",
									backgroundColor: "#454b55",
									boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
								}}
							/>
							<p>
								HoyaHacks was my first hackathon. Our team wanted to build an AI
								assistant that could answer students&apos; questions about any college,
								and we planned a full retrieval-augmented generation setup on Azure to
								power it.
							</p>
							<p>
								We didn&apos;t get it working in time. We had the website and the
								architecture mapped out, but the pieces never came together into
								something we could demo, so later that year I went into PennApps focused
								on getting everything connected early.
							</p>
							<p>
								<strong>Tech Stack:</strong>
							</p>
							<div className="tech-stack" style={{ marginTop: "1rem" }}>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
									alt="React"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
									alt="Django"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Azure%20OpenAI-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white"
									alt="Azure OpenAI"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
									alt="MongoDB Atlas"
								/>
							</div>
							<div
								style={{
									marginTop: "1rem",
									display: "flex",
									gap: "10px",
									flexWrap: "wrap",
								}}
							>
								<a
									href="https://devpost.com/software/prospectus"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "none" }}
								>
									<button className="devpost">
										<SiDevpost style={iconSize} /> View on Devpost
									</button>
								</a>
								<a
									href="https://github.com/HoyaHacks2024-Team"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "none" }}
								>
									<button className="github">
										<FaGithub style={iconSize} /> GitHub Repo
									</button>
								</a>
							</div>
						</VerticalTimelineElement>

						{/* PennApps: SweetFriend */}
						<VerticalTimelineElement
							className="vertical-timeline-element--hackathon"
							contentStyle={{
								background: "#393e46",
								color: "#fff",
								boxShadow: "0 3px 0 #00adb5",
							}}
							contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
							date="PennApps 2024"
							dateClassName={"custom-date"}
							iconStyle={{ background: "#00adb5", color: "#fff" }}
							icon={
								<img
									src={PennApps.src}
									alt="PennApps"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "contain",
										borderRadius: "50%",
									}}
								/>
							}
						>
							<h3 className="vertical-timeline-element-title">SweetFriend</h3>
							<h4 className="vertical-timeline-element-subtitle">PennApps</h4>
							<img
								src={SweetFriend.src}
								alt="SweetFriend - Diabetes management app built at PennApps 2024"
								loading="lazy"
								decoding="async"
								style={{
									width: "100%",
									borderRadius: "8px",
									marginTop: "1rem",
									border: "2px solid #00adb5",
									padding: "5px",
									backgroundColor: "#454b55",
									boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
								}}
							/>
							<p>
								One of my teammates at PennApps lives with type 1 diabetes, and carb
								counting and insulin dosing were a daily guessing game for them. So we
								built SweetFriend, which shows live readings from a Dexcom glucose
								monitor and estimates the carbs in a meal from a single photo.
							</p>
							<p>
								I built the React frontend, including the glucose chart where meals and
								workouts show up on the timeline. This time everything came together,
								and every major feature was working by the end of the weekend.
							</p>
							<p>
								<strong>Tech Stack:</strong>
							</p>
							<div className="tech-stack" style={{ marginTop: "1rem" }}>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
									alt="React"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
									alt="Flask"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
									alt="MongoDB"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Dexcom-5CBB5B?style=for-the-badge&logo=ai&logoColor=white"
									alt="Dexcom"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=twilio&logoColor=white"
									alt="Twilio"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
									alt="Vercel"
								/>
							</div>
							<div
								style={{
									marginTop: "1rem",
									display: "flex",
									gap: "10px",
									flexWrap: "wrap",
								}}
							>
								<a
									href="https://devpost.com/software/sweetfriend"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "none" }}
								>
									<button className="devpost">
										<SiDevpost style={iconSize} /> View on Devpost
									</button>
								</a>
								<a
									href="https://github.com/dmicz/SweetFriend"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "none" }}
								>
									<button className="github">
										<FaGithub style={iconSize} /> GitHub Repo
									</button>
								</a>
								<a
									href="https://sweet-friend.vercel.app/app/dashboard"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "none" }}
								>
									<button className="live-preview">
										<MdVisibility style={iconSize} /> Live Preview
									</button>
								</a>
							</div>
						</VerticalTimelineElement>

						{/* HackHarvard: Albatross */}
						<VerticalTimelineElement
							className="vertical-timeline-element--hackathon"
							contentStyle={{
								background: "#393e46",
								color: "#fff",
								boxShadow: "0 3px 0 #00adb5",
							}}
							contentArrowStyle={{ borderRight: "7px solid #393e46" }}
							date="HackHarvard 2024"
							dateClassName={"custom-date"}
							iconStyle={{ background: "#fff", color: "#fff" }}
							icon={
								<img
									src={HackHarvard.src}
									alt="HackHarvard"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "contain",
										borderRadius: "50%",
									}}
								/>
							}
						>
							<h3 className="vertical-timeline-element-title">Albatross</h3>
							<h4 className="vertical-timeline-element-subtitle">
								HackHarvard
							</h4>
							<img
								src={Albatross.src}
								alt="Albatross - AI-powered safe navigation app built at HackHarvard 2024"
								loading="lazy"
								decoding="async"
								style={{
									width: "100%",
									borderRadius: "8px",
									marginTop: "1rem",
									border: "2px solid #00adb5",
									padding: "5px",
									backgroundColor: "#454b55",
									boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
								}}
							/>
							<p>
								At HackHarvard, two of my teammates had felt unsafe walking through
								parts of Boston, so we built Albatross, a navigation app that finds a
								fast walking route that stays out of crime hot zones.
							</p>
							<p>
								We turned 50K+ crime records into hot zones, and I built the Vue.js
								frontend that shows them on the map along with the safer route. By the
								end of the 36 hours, we had it routing live through Boston.
							</p>
							<p>
								<strong>Tech Stack:</strong>
							</p>
							<div className="tech-stack" style={{ marginTop: "1rem" }}>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white"
									alt="Vue.js"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white"
									alt="Cloudflare"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Databricks-E87352?style=for-the-badge&logo=databricks&logoColor=white"
									alt="Databricks"
								/>
								<img
									loading="lazy"
									decoding="async"
									src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
									alt="Python"
								/>
							</div>
							<div
								style={{
									marginTop: "1rem",
									display: "flex",
									gap: "10px",
									flexWrap: "wrap",
								}}
							>
								<a
									href="https://devpost.com/software/albatross"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "none" }}
								>
									<button className="devpost">
										<SiDevpost style={iconSize} /> View on Devpost
									</button>
								</a>
								<a
									href="https://github.com/orgs/HackHarvard2024-Team/repositories"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "none" }}
								>
									<button className="github">
										<FaGithub style={iconSize} /> GitHub Repo
									</button>
								</a>
								<a
									href="https://albatross-hack.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "none" }}
								>
									<button className="live-preview">
										<MdVisibility style={iconSize} /> Live Preview
									</button>
								</a>
							</div>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</section>

				{/* Education Timeline */}
				<section id="education" className="timeline-section">
					<h2>Education</h2>
					<VerticalTimeline
						lineColor="#00adb5"
						layout="1-column-left"
						className="timeline"
					>
						{/* New York University */}
						<VerticalTimelineElement
							className="vertical-timeline-element--education"
							contentStyle={{
								background: "#393e46",
								color: "#fff",
								boxShadow: "0 3px 0 #00adb5",
							}}
							contentArrowStyle={{ borderRight: "7px solid #393e46" }}
							date="Sep 2026 - May 2028 (expected)"
							dateClassName={"custom-date"}
							iconStyle={{ background: "#57068c", color: "#fff" }}
							icon={<SchoolIcon />}
						>
							<h3 className="vertical-timeline-element-title">
								New York University
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								New York, NY
							</h4>
							<p>
								<strong>Degree:</strong> M.S. in Computer Science
							</p>
							<p>
								<strong>Coursework:</strong> Design and Analysis of Algorithms, Big
								Data, Virtual and Augmented Reality
							</p>
						</VerticalTimelineElement>

						{/* Dickinson College */}
						<VerticalTimelineElement
							className="vertical-timeline-element--education"
							contentStyle={{
								background: "#393e46",
								color: "#fff",
								boxShadow: "0 3px 0 #00adb5",
							}}
							contentArrowStyle={{ borderRight: "7px solid #393e46" }}
							date="Aug 2021 - May 2025"
							dateClassName={"custom-date"}
							iconStyle={{ background: "#00adb5", color: "#fff" }}
							icon={
								<img
									src={Dickinson.src}
									alt="Dickinson College"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "contain",
										borderRadius: "50%",
									}}
								/>
							}
						>
							<h3 className="vertical-timeline-element-title">
								Dickinson College
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								Carlisle, PA
							</h4>
							<p>
								<strong>Degree:</strong> B.S. in Computer Science and Mathematics
							</p>
							<p>
								<strong>GPA:</strong> 3.52 / 4.00
							</p>
							<p>
								<strong>Coursework:</strong> Data Structures, Analysis of Algorithms,
								Operating Systems, Object-Oriented Programming, Database Systems
							</p>
							<p>
								<strong>Honors:</strong> Dean&apos;s List, Pi Mu Epsilon (math honor
								society), The 1783 Scholarship
							</p>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</section>

				{/* Certifications Section */}
				<section id="certifications" className="certifications-section">
					<h2 className="section-title">Certifications</h2>

					<div className="certifications-container">
						{/* CS50 Certification */}
						<div className="cert-section">
							<div className="cert-logo">
								<img src={HarvardX.src} alt="HarvardX" />
							</div>

							<div className="cert-body">
								<h3 className="cert-title">
									CS50x: Introduction to Computer Science
								</h3>
								<p className="cert-note">
									Harvard&apos;s intro course on <strong>HarvardX</strong>, where I learned C and memory management before moving on to Python, SQL, and Flask.
								</p>
							</div>

							<a
								className="cert-link"
								href="https://courses.edx.org/certificates/679d72781ed04aaba91ad9ec4ead0de3"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaCertificate />
								View certificate
							</a>
						</div>

						{/* MATLAB Certification */}
						<div className="cert-section">
							<div className="cert-logo cert-logo-matlab">
								<span>MATLAB</span>
							</div>

							<div className="cert-body">
								<h3 className="cert-title">MATLAB Onramp</h3>
								<p className="cert-note">
									An intro course from <strong>MathWorks</strong> on working with matrices, plotting data, and writing MATLAB scripts.
								</p>
							</div>

							<a
								className="cert-link"
								href="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=1945277d-7a1c-4899-981f-d28b4a0e68a7&"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaCertificate />
								View certificate
							</a>
						</div>
					</div>
				</section>

				{/* GitHub Stats */}
				<section id="github-stats">
					<GitHubStats />
				</section>

				{/* Projects Section Link */}
				<section id="projects-link">
					<Box
						sx={{
							textAlign: "center",
							color: "#eeeeee",
							padding: "1rem",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<h2 className="projects-link-h2">
							Check Out My <span style={{ color: "#00adb5" }}>Projects</span>
						</h2>
						<Typography className="projects-link-p">
							Everything I&apos;ve built outside of work, including my hackathon
							projects.
						</Typography>
						<Button
							onClick={() => router.push("/projects")}
							variant="contained"
							id="projects-link-btn"
							startIcon={<CodeIcon />}
							sx={{
								backgroundColor: "#00adb5",
								color: "#eeeeee",
								"&:hover": { backgroundColor: "#00c8d1" },
							}}
						>
							View Projects
						</Button>
					</Box>
				</section>

				{/* Social Section */}
				<section id="connect">
					<Box
						sx={{
							textAlign: "center",
							color: "#eeeeee",
						}}
					>
						<Typography variant="h5" id="social-connect">
							Feel free to <span style={{ color: "#00adb5" }}>connect</span>{" "}
							with me
						</Typography>
						<SocialIcons />
					</Box>
				</section>
			</div>
			<TableOfContents />
		</div>
	);
};

export default About;

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
						🧑‍💻 About <span>Me</span>
					</h1>
				</div>
				<div className="about-me-div">
					<div className="about-me-text-div">
						<div className="paragraph">
							<p className="about-me-text">
								Hey, I&apos;m Shahir - a Computer Science & Mathematics graduate
								from Dickinson College and Software Engineer. I build full-stack
								products with React, Next.js, TypeScript, Spring Boot, Python,
								and PostgreSQL.
							</p>
							<p className="about-me-text">
								Currently a Software Engineer at{" "}
								<a
									href="https://www.sarvabazaar.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>Sarva</strong>
								</a>
								, where I&apos;m building AI-powered tools for South Asian
								grocery supply chains, from voice-based inventory with OpenAI
								Whisper to RAG pipelines and payments with Stripe Connect.
								Previously, I was a Software Engineer Intern on{" "}
								<a
									href="https://github.com/FarmData2"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>FarmData2</strong>
								</a>{" "}
								and a top 25 contributor to{" "}
								<a
									href="https://github.com/mermaid-js/mermaid"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>Mermaid.js</strong>
								</a>
								. Browse my open source work{" "}
								<a
									href="https://github.com/Shahir-47/open-source-contributions"
									target="_blank"
									rel="noopener noreferrer"
								>
									here
								</a>
								.
							</p>
							<p className="about-me-text">
								Recent projects include{" "}
								<a
									href="https://queue-up.onrender.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>Queue Up</strong>
								</a>{" "}
								(music-based social platform with Spotify integration),{" "}
								<a
									href="https://cosign-nwwl.onrender.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>CoSign</strong>
								</a>{" "}
								(accountability platform with deadline enforcement), and{" "}
								<a
									href="https://albatross-hack.netlify.app/map"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>Albatross</strong>
								</a>{" "}
								(AI-powered safe navigation).
							</p>
							<p className="about-me-text">
								Outside of code, I enjoy helping new devs, playing soccer, and
								following Real Madrid. Feel free to check out my{" "}
								<a
									href="https://github.com/Shahir-47"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>GitHub</strong>
								</a>{" "}
								or reach out below.
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
						🛠️ <span className="highlight">Tools</span> and{" "}
						<span className="highlight">Technologies</span> I&apos;ve worked
						with
					</h2>
				</div>
				<div className="tools-grid">
					{/* Programming Languages */}
					<div className="tools-category">
						<h3>Programming Languages</h3>
						<div className="tools-icons">
							<img
								loading="lazy"
								decoding="async"
								src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
								alt="JavaScript"
							/>
							<img
								loading="lazy"
								decoding="async"
								src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
								alt="TypeScript"
							/>
							<img
								loading="lazy"
								decoding="async"
								src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"
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
								src="https://img.shields.io/badge/SQL-003B57?style=for-the-badge&logo=postgresql&logoColor=white"
								alt="SQL"
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

					{/* Frontend Frameworks */}
					<div className="tools-category">
						<h3>Frontend Frameworks</h3>
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
								src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white"
								alt="Vue.js"
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
								src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"
								alt="TailwindCSS"
							/>
						</div>
					</div>

					{/* Backend & Server */}
					<div className="tools-category">
						<h3>Backend & Server</h3>
						<div className="tools-icons">
							<img
								loading="lazy"
								decoding="async"
								src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white"
								alt="Spring Boot"
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
								src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
								alt="Flask"
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
								src="https://img.shields.io/badge/RESTful%20APIs-02569B?style=for-the-badge&logo=api&logoColor=white"
								alt="RESTful APIs"
							/>
							<img
								loading="lazy"
								decoding="async"
								src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white"
								alt="WebSockets"
							/>
						</div>
					</div>

					{/* Databases & Storage */}
					<div className="tools-category">
						<h3>Databases & Storage</h3>
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
								src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
								alt="MongoDB"
							/>
							<img
								loading="lazy"
								decoding="async"
								src="https://img.shields.io/badge/Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"
								alt="Firestore"
							/>
						</div>
					</div>

					{/* Cloud & Infrastructure */}
					<div className="tools-category">
						<h3>Cloud & Infrastructure</h3>
						<div className="tools-icons">
							<img
								loading="lazy"
								decoding="async"
								src="https://img.shields.io/badge/AWS%20S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"
								alt="AWS S3"
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
								src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
								alt="Vercel"
							/>
							<img
								loading="lazy"
								decoding="async"
								src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
								alt="Linux"
							/>
						</div>
					</div>

					{/* Testing & Quality */}
					<div className="tools-category">
						<h3>Testing & Quality</h3>
						<div className="tools-icons">
							<img
								loading="lazy"
								decoding="async"
								src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white"
								alt="Cypress"
							/>
						</div>
					</div>

					{/* Development Tools */}
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
								src="https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white"
								alt="Maven"
							/>
							<img
								loading="lazy"
								decoding="async"
								src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"
								alt="NPM"
							/>
							<img
								loading="lazy"
								decoding="async"
								src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white"
								alt="PNPM"
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
				<h2>💼 Work Experience</h2>
				<VerticalTimeline
					lineColor="#4fd1c5"
					layout="1-column-left"
					className="timeline"
				>
					{/* Current Role - Sarva */}
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
							border: "2px solid #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid rgb(33, 33, 33)" }}
						date="May 2025 - Present"
						dateClassName={"custom-date"}
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
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
							Software Engineer -{" "}
							<span style={{ color: "#4fd1c5" }}>Current Role</span>
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Sarva - Vendor Management Platform & Marketplace for Grocery
							Supply Chains
							<span style={{ marginLeft: "8px" }}>
								<a
									href="https://www.sarvabazaar.com"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#4fd1c5", textDecoration: "underline" }}
								>
									[sarvabazaar.com]
								</a>
							</span>
						</h4>
						<ul>
							<li>
								Cut p95 latency by 50% by replacing sequential scans with vector
								similarity search in a Python RAG pipeline
							</li>
							<li>
								Reduced vendor inventory time by 60% by building a voice-based
								system with OpenAI Whisper, supporting 90+ languages
							</li>
							<li>
								Reduced chargeback fraud by implementing Stripe Connect with
								identity verification in a Next.js/TypeScript platform
							</li>
							<li>
								Built 4 AI assistants with GPT structured outputs for
								natural-language order tracking, product search, and inventory
								management
							</li>
							<li>
								Added Firebase AppCheck and role-based authentication to secure
								API routes across customer, vendor, and driver portals
							</li>
						</ul>
					</VerticalTimelineElement>

					{/* FarmData2 (Software Engineer) */}
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid rgb(33, 33, 33)" }}
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
							FarmData2 - Organic Farm Management Software at Dickinson College
							<span style={{ marginLeft: "8px" }}>
								<a
									href="https://github.com/FarmData2/FarmData2"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#4fd1c5", textDecoration: "underline" }}
								>
									[GitHub Repository]
								</a>
							</span>
							<span style={{ marginLeft: "8px" }}>
								<a
									href="https://github.com/FarmData2/FarmData2/pulls?q=is%3Apr+involves%3AShahir-47+is%3Aclosed"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#4fd1c5", textDecoration: "underline" }}
								>
									[Contributions]
								</a>
							</span>
						</h4>
						<ul>
							<li>
								Reduced form latency by 60% on an NSF-funded farm platform by
								refactoring 22+ Vue.js components to Vuex
							</li>
							<li>
								Automated farm workflows by building 18+ Node.js REST APIs with
								PostgreSQL transaction rollbacks and 30+ Cypress tests
							</li>
						</ul>
					</VerticalTimelineElement>

					{/* Mermaid.js (Open Source) */}
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid rgb(33, 33, 33)" }}
						date="Jan 2025 - April 2025"
						dateClassName={"custom-date"}
						iconStyle={{ background: "#009688", color: "#fff" }}
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
							Mermaid.js - Open-Source Data Visualization Library
							<a
								href="https://github.com/mermaid-js/mermaid/pulls?q=is%3Apr+involves%3AShahir-47+is%3Aclosed"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: "#4fd1c5",
									textDecoration: "underline",
									marginLeft: "8px",
								}}
							>
								[Contributions]
							</a>
							<a
								href="https://github.com/mermaid-js/mermaid/graphs/contributors"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: "#4fd1c5",
									textDecoration: "underline",
									marginLeft: "8px",
								}}
							>
								[Ranked #25 of 600+ Contributors]
							</a>
							<span style={{ marginLeft: "8px" }}>
								<a
									href="https://github.com/mermaid-js/mermaid"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#4fd1c5", textDecoration: "underline" }}
								>
									[GitHub Repository]
								</a>
							</span>
						</h4>
						<ul>
							<li>
								Ranked #25 among 600+ contributors by shipping 3 merged PRs for
								a library serving 1.4M+ weekly downloads
							</li>
							<li>
								Delivered features and bug fixes across 20+ diagram types in an
								86K-star codebase used by GitHub, VS Code, and Notion
							</li>
						</ul>
					</VerticalTimelineElement>

					{/* 84 Lumber (Volunteer) */}
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid rgb(33, 33, 33)" }}
						date="Sept 2023 - Jan 2024"
						dateClassName={"custom-date"}
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={
							<img
								src={Lumber84.src}
								alt="84 Lumber"
								style={{ width: "100%", height: "100%", borderRadius: "50%" }}
							/>
						}
					>
						<h3 className="vertical-timeline-element-title">
							Software Engineer (Volunteer)
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							84 Lumber - Building Materials Distribution & Retail Company
							<span style={{ marginLeft: "8px" }}>
								<a
									href="https://www.dickinson.edu/news/article/5821/dickinson_students_work_with_alum_to_breathe_new_life_into_84_lumbers_legacy_systems"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#4fd1c5", textDecoration: "underline" }}
								>
									[Featured in Dickinson News]
								</a>
							</span>
						</h4>
						<ul>
							<li>
								Built a legacy code transpilation pipeline using ANTLR to
								migrate 10K+ lines of CBASIC into Python and Java for a $9B
								company
							</li>
						</ul>
					</VerticalTimelineElement>

					{/* Teaching Assistant */}
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid rgb(33, 33, 33)" }}
						date="Aug 2022 - May 2025"
						dateClassName={"custom-date"}
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
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
							Dickinson College Math and CS Department
						</h4>
						<ul>
							<li>
								Mentored 25+ students across 6 semesters in Python and Java
								through weekly labs, office hours, and code reviews
							</li>
						</ul>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</section>

			{/* OSS Contributions */}
			<section id="open-source" className="oss-section">
				<h2
					className="section-title"
					style={{
						textAlign: "center",
						fontWeight: 700,
						margin: "0 0 3rem 0",
						letterSpacing: "0.02em",
						color: "#4fd1c5",
						textShadow: "0 2px 16px #0009",
					}}
				>
					🌟 Open Source Contributions
				</h2>

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
									fontWeight: 600,
									fontSize: "1.33rem",
									color: "#69f9e6",
									marginBottom: 3,
								}}
							>
								<a
									href="https://github.com/mermaid-js/mermaid"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#f992cf" }}
								>
									Mermaid.js
								</a>
								<span style={{ marginLeft: 8, color: "#e2e2e2", fontSize: 16 }}>
									(Top 25 contributor out of 600+ contributors)
								</span>
							</div>
							<div
								style={{
									fontSize: 16,
									color: "#f3f6fa",
									marginBottom: 12,
									marginTop: 12,
								}}
							>
								• Shipped 3 merged PRs for text wrapping, auto-scaling data
								labels, and customizable styling in a library serving{" "}
								<a
									style={{ color: "#4fd1c5", textDecoration: "underline" }}
									href="https://npmtrends.com/mermaid"
								>
									1.4M+ weekly downloads
								</a>
								.
							</div>
							<ul
								style={{
									fontSize: 15,
									color: "#c7e9f1",
									margin: 0,
									marginBottom: 9,
									paddingLeft: 18,
								}}
							>
								<li>
									<a
										href="https://github.com/mermaid-js/mermaid/pull/6475"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "#43e8d8", textDecoration: "underline" }}
									>
										Added dynamic, auto-scaling data labels for bar charts
									</a>
								</li>
								<li>
									<a
										href="https://github.com/mermaid-js/mermaid/pull/6274"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "#43e8d8", textDecoration: "underline" }}
									>
										Engineered smart word wrapping using Knuth-Plass algorithm
									</a>
								</li>
								<li>
									<a
										href="https://github.com/mermaid-js/mermaid/pull/6225"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "#43e8d8", textDecoration: "underline" }}
									>
										Enabled full theme customization for Journey diagrams
									</a>
								</li>
							</ul>
							<div style={{ fontSize: 14, color: "#aaaaaa", marginTop: 15 }}>
								<a
									href="https://github.com/mermaid-js/mermaid/graphs/contributors"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#61ffe7",
										marginRight: 18,
									}}
								>
									Contributor graph
								</a>
								<a
									href="https://github.com/mermaid-js/mermaid/pulls?q=is%3Apr+involves%3AShahir-47+is%3Aclosed"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#61ffe7" }}
								>
									All PRs
								</a>
							</div>
						</div>
					</div>

					{/* FarmData2 */}
					<div className="oss-item">
						<img
							src={FarmData2.src}
							alt="FarmData2"
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
									fontWeight: 600,
									fontSize: "1.33rem",
									color: "#69f9e6",
									marginBottom: 3,
								}}
							>
								<a
									href="https://github.com/FarmData2/FarmData2"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#a3ffad" }}
								>
									FarmData2
								</a>
								<span style={{ marginLeft: 8, color: "#e2e2e2", fontSize: 16 }}>
									(Open-source contributor)
								</span>
							</div>
							<div
								style={{
									fontSize: 16,
									color: "#f3f6fa",
									marginBottom: 12,
									marginTop: 12,
								}}
							>
								• 25+ PRs, 14,000+ lines added. Refactored 22+ Vue components,
								built 18+ REST APIs, and added Cypress tests to automate
								real-world farm operations.
							</div>
							<div style={{ fontSize: 14, color: "#aaaaaa", marginTop: 2 }}>
								<a
									href="https://github.com/FarmData2/FarmData2/graphs/contributors"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#61ffe7",
										marginRight: 18,
									}}
								>
									Contributor graph
								</a>
								<a
									href="https://github.com/FarmData2/FarmData2/pulls?q=is%3Apr+involves%3AShahir-47+is%3Aclosed"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#61ffe7" }}
								>
									All PRs
								</a>
							</div>
						</div>
					</div>

					{/* Full Portfolio */}
					<div className="oss-item">
						<span style={{ fontSize: 32, marginRight: 18 }}>🗂️</span>
						<div style={{ flex: 1 }}>
							<div
								style={{
									fontWeight: 600,
									fontSize: "1.17rem",
									color: "#b8fffb",
									marginBottom: 5,
								}}
							>
								See My Full Open Source Portfolio
							</div>
							<div style={{ fontSize: 15, color: "#e9e9f3", marginBottom: 7 }}>
								Detailed breakdown, merged PRs, and stats for every major
								project.
							</div>
							<a
								href="https://github.com/Shahir-47/open-source-contributions"
								target="_blank"
								rel="noopener noreferrer"
								id="open-source-button"
								style={{
									display: "inline-block",
									background: "#7952B3",
									color: "#fff",
									borderRadius: 8,
									padding: "5px 17px",
									fontWeight: 500,
									fontSize: 15,
									marginTop: 2,
									textDecoration: "none",
									boxShadow: "0 1px 3px 0 rgba(121,82,179,0.1)",
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
				<h2 className="hack-h2">💡 Hackathon Experience</h2>
				<VerticalTimeline
					lineColor="#4fd1c5"
					layout="1-column-left"
					className="timeline"
				>
					{/* HoyaHacks: Prospectus */}
					<VerticalTimelineElement
						className="vertical-timeline-element--hackathon"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid rgb(33, 33, 33)" }}
						date="HoyaHacks 2024"
						dateClassName={"custom-date"}
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
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
								border: "2px solid #4fd1c5",
								padding: "5px",
								backgroundColor: "#333",
								boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
							}}
						/>
						<p>
							My first hackathon, where we built an AI-powered college
							admissions assistant using React, Django, Azure OpenAI, and vector
							embeddings. We shipped a frontend demo and high-level
							architecture. Didn&apos;t finish a working product, but it taught
							me how to design systems under real constraints and set the stage
							for shipping at later events.
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
									<SiDevpost style={iconSize} /> View on DevPost
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
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
						date="PennApps 2024"
						dateClassName={"custom-date"}
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
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
								border: "2px solid #4fd1c5",
								padding: "5px",
								backgroundColor: "#333",
								boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
							}}
						/>
						<p>
							A diabetes management app built in 36 hours with a team of 4. I
							led the React frontend, building the dashboard, live glucose
							charts, and meal photo upload powered by Tune Studio&apos;s vision
							model. Integrated the Dexcom API for continuous glucose data,
							wired up Twilio for critical alerts, and connected it all through
							a Flask/MongoDB backend with Cerebras for AI health insights.
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
									<SiDevpost style={iconSize} /> View on DevPost
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
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid rgb(33, 33, 33)" }}
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
						<h4 className="vertical-timeline-element-subtitle">HackHarvard</h4>
						<img
							src={Albatross.src}
							alt="Albatross - AI-powered safe navigation app built at HackHarvard 2024"
							loading="lazy"
							decoding="async"
							style={{
								width: "100%",
								borderRadius: "8px",
								marginTop: "1rem",
								border: "2px solid #4fd1c5",
								padding: "5px",
								backgroundColor: "#333",
								boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
							}}
						/>
						<p>
							AI-powered navigation app that finds the safest routes using
							real-time crime data. Built the Vue.js frontend with interactive
							crime polygon overlays and safe route visualization. Processed
							50K+ crime addresses into zone density scores using Databricks and
							MLflow, served through Cloudflare Workers to the HERE Routing API.
							Deployed a working NYC demo during the hackathon.
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
									<SiDevpost style={iconSize} /> View on DevPost
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
				<h2>🎓 Education</h2>
				<VerticalTimeline
					lineColor="#4fd1c5"
					layout="1-column-left"
					className="timeline"
				>
					{/* Dickinson College */}
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid  rgb(33, 33, 33)" }}
						date="August 2021 - May 2025"
						dateClassName={"custom-date"}
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
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
						<h4 className="vertical-timeline-element-subtitle">Carlisle, PA</h4>
						<p>
							<strong>Degree:</strong> B.S. in Computer Science & Mathematics
							<br />
							<strong>GPA:</strong> 3.52 / 4.00
							<br />
							<strong>Honors:</strong> Dean&apos;s List, Pi Mu Epsilon (Math
							Honor Society), 1783 Scholarship
						</p>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</section>

			{/* Certifications Section */}
			<section id="certifications" className="certifications-section">
				<h2
					className="section-title"
					style={{
						textAlign: "center",
						fontSize: "2.3rem",
						fontWeight: 700,
						margin: "4rem 0 3rem 0",
						letterSpacing: "0.02em",
						color: "#4fd1c5",
						textShadow: "0 2px 16px #0009",
					}}
				>
					🏆 Certifications & Achievements
				</h2>

				<div
					className="certifications-container"
					style={{
						maxWidth: 900,
						margin: "0 auto",
						padding: "0 1.2rem",
					}}
				>
					{/* CS50 Certification */}
					<div className="cert-section">
						<img
							src={HarvardX.src}
							alt="HarvardX"
							style={{
								width: 60,
								height: 60,
								borderRadius: 12,
								objectFit: "contain",
								background: "#fff",
								padding: "8px",
								boxShadow: "0 0 10px 1px #0005",
							}}
						/>
						<div style={{ flex: 1 }}>
							<div
								style={{
									fontWeight: 600,
									fontSize: "1.25rem",
									color: "#69f9e6",
									marginBottom: 8,
								}}
							>
								CS50x: Introduction to Computer Science
							</div>
							<div style={{ fontSize: 15, color: "#c7e9f1", marginBottom: 10 }}>
								<strong>HarvardX</strong> | Algorithms, data structures, web
								development using C, Python, SQL, JavaScript
							</div>
							<a
								href="https://courses.edx.org/certificates/679d72781ed04aaba91ad9ec4ead0de3"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									display: "inline-flex",
									alignItems: "center",
									background: "#4fd1c5",
									color: "#000",
									borderRadius: 8,
									padding: "6px 14px",
									fontWeight: 500,
									fontSize: 14,
									textDecoration: "none",
									boxShadow: "0 1px 3px 0 rgba(79,209,197,0.3)",
									transition: "background 0.3s ease",
								}}
							>
								<FaCertificate
									style={{ marginRight: "6px", fontSize: "14px" }}
								/>
								View Certificate
							</a>
						</div>
					</div>

					{/* MATLAB Certification */}
					<div className="cert-section">
						<div
							style={{
								width: 60,
								height: 60,
								borderRadius: 12,
								background: "#0076A8",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								boxShadow: "0 0 10px 1px #0005",
							}}
						>
							<span
								style={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}
							>
								MATLAB
							</span>
						</div>
						<div style={{ flex: 1 }}>
							<div
								style={{
									fontWeight: 600,
									fontSize: "1.25rem",
									color: "#69f9e6",
									marginBottom: 8,
								}}
							>
								MATLAB Onramp
							</div>
							<div style={{ fontSize: 15, color: "#c7e9f1", marginBottom: 10 }}>
								<strong>MathWorks</strong> | MATLAB programming and
								computational mathematics
							</div>
							<a
								href="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=1945277d-7a1c-4899-981f-d28b4a0e68a7&"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									display: "inline-flex",
									alignItems: "center",
									background: "#0076A8",
									color: "#fff",
									borderRadius: 8,
									padding: "6px 14px",
									fontWeight: 500,
									fontSize: 14,
									textDecoration: "none",
									boxShadow: "0 1px 3px 0 rgba(0,118,168,0.3)",
									transition: "background 0.3s ease",
								}}
							>
								<FaCertificate
									style={{ marginRight: "6px", fontSize: "14px" }}
								/>
								View Certificate
							</a>
						</div>
					</div>

					{/* Academic Honors */}
					<div
						className="academic"
						style={{
							background: "rgba(52, 21, 65, 0.75)",
							borderRadius: 16,
							boxShadow: "0 1px 8px 0 rgba(121,82,179,0.08)",
							padding: "1.5rem 2rem",
						}}
					>
						<div
							style={{
								fontWeight: 600,
								fontSize: "1.25rem",
								color: "#b8fffb",
								marginBottom: 15,
								display: "flex",
								alignItems: "center",
							}}
						>
							🎓 Academic Honors
						</div>
						<div style={{ display: "grid", gap: "12px" }}>
							<div style={{ fontSize: 15, color: "#e9e9f3" }}>
								• <strong>The 1783 Scholarship</strong> - Merit-based
								scholarship at Dickinson College
							</div>
							<div style={{ fontSize: 15, color: "#e9e9f3" }}>
								• <strong>Dean&apos;s List</strong> - Academic excellence
								recognition
							</div>
							<div style={{ fontSize: 15, color: "#e9e9f3" }}>
								• <strong>Pi Mu Epsilon</strong> - National Mathematics Honor
								Society
							</div>
						</div>
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
						color: "#e0e0e0",
						padding: "1rem",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<h2 className="projects-link-h2">
						Check Out My <span style={{ color: "#fff" }}>Projects</span> 🚀
					</h2>
					<Typography className="projects-link-p">
						Browse my work in web development, systems programming, and more.
					</Typography>
					<Button
						onClick={() => router.push("/projects")}
						variant="contained"
						id="projects-link-btn"
						startIcon={<CodeIcon />}
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
						color: "#e0e0e0",
					}}
				>
					<Typography variant="h5" id="social-connect">
						Feel free to <span style={{ color: "#4fd1c5" }}>connect</span> with me
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

import Shahir from "../assets/shahir.jpeg";
import Dickinson from "../assets/dickinson.png";
import HarvardX from "../assets/Harvard_x_logo.png";
import FarmData2 from "../assets/farmData2.png";
import MermaidJS from "../assets/mermaid.webp";
import Lumber84 from "../assets/84.png";
import Hoya from "../assets/hoya.png";
import PennApps from "../assets/penn.png";
import HackHarvard from "../assets/hackharvardlogo.png";
import Prospectus from "../assets/prospectus.jpg";
import SweetFriend from "../assets/sweetFriend.jpg";
import Albatross from "../assets/albatross.png";
import CodeIcon from "@mui/icons-material/Code";
import { SiDevpost } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import GitHubStats from "./GitHubStats";
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
	return (
		<div className="about-page">
			{/* About Me */}
			<div className="about-container">
				<div className="about-text-container">
					<h1 className="about-me">
						🧑‍💻 About <span>Me</span>
					</h1>
				</div>
				<div className="about-me-div">
					<div className="about-me-text-div">
						<div className="paragraph">
							<p className="about-me-text">
								Hey, I’m Shahir. I build scalable full-stack web apps with
								React, Vue, Node.js, Express, AWS, and Firebase. I enjoy solving
								tough problems, modern web architecture, and taking projects
								from “just an idea” to production.
							</p>
							<p className="about-me-text">
								My open source journey includes being a top 25 contributor to{" "}
								<a
									href="https://github.com/mermaid-js/mermaid"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>Mermaid.js</strong>
								</a>{" "}
								and ranking #2 at{" "}
								<a
									href="https://github.com/FarmData2"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>FarmData2</strong>
								</a>
								. I focus on feature development, bug fixes, and designing
								systems people actually use. You can browse my open source work{" "}
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
								Some of my recent projects include{" "}
								<a
									href="https://www.sarvabazaar.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>Sarva</strong>
								</a>{" "}
								(a grocery delivery platform) and{" "}
								<a
									href="https://peer-to-playlist.onrender.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>Peer-to-Playlist</strong>
								</a>{" "}
								(a music matching app). I have shipped hacks at PennApps and
								HackHarvard, which challenged me to level up and build under
								pressure.
							</p>
							<p className="about-me-text">
								Outside of code, you’ll find me helping new devs, playing
								soccer, and following{" "}
								<a
									href="https://www.realmadrid.com/en"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>Real Madrid</strong>
								</a>{" "}
								like my life depends on it. If you want to connect, check out my{" "}
								<a
									href="https://github.com/Shahir-47"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>GitHub</strong>
								</a>{" "}
								or socials below.
							</p>
							<p className="about-me-text">
								Reach out if you want to collaborate or just talk tech. Always
								up for new projects or swapping dev jokes.
							</p>
						</div>

						{/* Social Section */}
						<SocialIcons />
					</div>

					<img src={Shahir} alt="Shahir" className="about-me-picture" />
				</div>
			</div>

			{/* OSS Contributions */}
			<div className="oss-section">
				{/* Open Source Contributions Section */}
				<h2
					className="section-title"
					style={{
						textAlign: "center",
						fontSize: "2.3rem",
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
					<div
						style={{
							display: "flex",
							alignItems: "flex-start",
							background: "#222",
							borderRadius: 16,
							marginBottom: "2.1rem",
							boxShadow: "0 1px 12px 0 rgba(0,0,0,0.13)",
							padding: "1.5rem 2rem",
							gap: "2.3rem",
						}}
					>
						<img
							src={MermaidJS}
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
									(Top 25 contributor)
								</span>
							</div>
							<div style={{ fontSize: 16, color: "#f3f6fa", marginBottom: 13 }}>
								• 75+ commits. Delivered innovative charting features, resolved
								core rendering bugs, and improved overall usability for millions
								of users.
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
										Engineered smart word wrapping to prevent legend/label
										overlap
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
							<div style={{ fontSize: 14, color: "#aaaaaa", marginTop: 2 }}>
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
					<div
						style={{
							display: "flex",
							alignItems: "flex-start",
							background: "#222",
							borderRadius: 16,
							marginBottom: "2.1rem",
							boxShadow: "0 1px 12px 0 rgba(0,0,0,0.13)",
							padding: "1.5rem 2rem",
							gap: "2.3rem",
						}}
					>
						<img
							src={FarmData2}
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
									(#2 overall contributor)
								</span>
							</div>
							<div style={{ fontSize: 16, color: "#f3f6fa", marginBottom: 13 }}>
								• 25+ PRs, 14,000+ lines added. Built complex data entry forms,
								elevated user experience, and modernized backend architecture
								for real-world farm operations.
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
					<div
						style={{
							display: "flex",
							alignItems: "center",
							background: "rgba(52, 21, 65, 0.75)",
							borderRadius: 16,
							marginBottom: 0,
							boxShadow: "0 1px 8px 0 rgba(121,82,179,0.08)",
							padding: "1.45rem 2rem",
							gap: "2.1rem",
						}}
					>
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
								Get a detailed breakdown, merged PRs, and stats for every major
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
									boxShadow: "0 1px 3px 0 rgba(121,82,179,0.1)",
									transition: "background 0.3s ease",
								}}
							>
								Open Source Portfolio →
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Tools and Technologies */}
			<div className="tools-section">
				<div className="tools-header">
					<h2>
						🛠️ <span className="highlight">Tools</span> and{" "}
						<span className="highlight">Technologies</span> I’ve worked with
					</h2>
				</div>
				<div className="tools-grid">
					{/* Programming Languages */}
					<div className="tools-category">
						<h3>Programming Languages</h3>
						<div className="tools-icons">
							<img
								src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"
								alt="Java"
							/>
							<img
								src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
								alt="JavaScript"
							/>
							<img
								src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
								alt="TypeScript"
							/>
							<img
								src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
								alt="Python"
							/>
							<img
								src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"
								alt="C"
							/>
							<img
								src="https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white"
								alt="Lua"
							/>
							<img
								src="https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white"
								alt="R"
							/>
							<img
								src="https://img.shields.io/badge/MATLAB-0076A8?style=for-the-badge&logo=mathworks&logoColor=white"
								alt="MATLAB"
							/>
						</div>
					</div>

					{/* Frontend */}
					<div className="tools-category">
						<h3>Frontend</h3>
						<div className="tools-icons">
							<img
								src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
								alt="HTML"
							/>
							<img
								src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
								alt="CSS"
							/>
							<img
								src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white"
								alt="Vue.js"
							/>
							<img
								src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
								alt="React"
							/>
							<img
								src="https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white"
								alt="Electron"
							/>
							<img
								src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"
								alt="Bootstrap"
							/>
							<img
								src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"
								alt="TailwindCSS"
							/>
							<img
								src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black"
								alt="Webpack"
							/>
							<img
								src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black"
								alt="Babel"
							/>
							<img
								src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"
								alt="ESLint"
							/>
							<img
								src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"
								alt="Prettier"
							/>
							<img
								src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"
								alt="npm"
							/>
						</div>
					</div>

					{/* Backend */}
					<div className="tools-category">
						<h3>Backend</h3>
						<div className="tools-icons">
							<img
								src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
								alt="Node.js"
							/>
							<img
								src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
								alt="Express.js"
							/>
							<img
								src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
								alt="Flask"
							/>
							<img
								src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"
								alt="Firebase"
							/>
							<img
								src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white"
								alt="Socket.IO"
							/>
						</div>
					</div>

					{/* Databases */}
					<div className="tools-category">
						<h3>Databases</h3>
						<div className="tools-icons">
							<img
								src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white"
								alt="PostgreSQL"
							/>
							<img
								src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
								alt="MongoDB"
							/>
							<img
								src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white"
								alt="SQLite"
							/>
							<img
								src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
								alt="MySQL"
							/>
							<img
								src="https://img.shields.io/badge/SQL-003B57?style=for-the-badge&logo=postgresql&logoColor=white"
								alt="SQL"
							/>
						</div>
					</div>

					{/* Cloud, DevOps & Utilities */}
					<div className="tools-category">
						<h3>Cloud, DevOps & Utilities</h3>
						<div className="tools-icons">
							<img
								src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
								alt="AWS"
							/>
							<img
								src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
								alt="Vercel"
							/>
							<img
								src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
								alt="Docker"
							/>
							<img
								src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white"
								alt="Cloudflare"
							/>
							<img
								src="https://img.shields.io/badge/VirtualBox-183A61?style=for-the-badge&logo=virtualbox&logoColor=white"
								alt="VM VirtualBox"
							/>
							<img
								src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
								alt="Linux"
							/>
							<img
								src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
								alt="Git"
							/>
							<img
								src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
								alt="GitHub"
							/>
							<img
								src="https://img.shields.io/badge/VS%20Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
								alt="VS Code"
							/>
							<img
								src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white"
								alt="Eclipse"
							/>
							<img
								src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white"
								alt="Bash"
							/>
							<img
								src="https://img.shields.io/badge/Mermaid.js-009688?style=for-the-badge&logo=data:image/png;base64,..."
								alt="Mermaid.js"
							/>
						</div>
					</div>

					{/* Testing */}
					<div className="tools-category">
						<h3>Testing</h3>
						<div className="tools-icons">
							<img
								src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white"
								alt="Cypress"
							/>
							<img
								src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"
								alt="Jest"
							/>
							<img
								src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white"
								alt="Vitest"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Work Experience Timeline */}
			<div className="timeline-section">
				<h2>💼 Work Experience</h2>
				<VerticalTimeline
					lineColor="#4fd1c5"
					layout="1-column-left"
					className="timeline"
				>
					{/* FarmData2 (Part-Time) */}
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid rgb(33, 33, 33)" }}
						date="Aug 2024 – May 2025"
						dateClassName={"custom-date"}
						iconStyle={{ background: "rgb(82 91 58)", color: "#fff" }}
						icon={
							<img
								src={FarmData2}
								alt="FarmData2"
								style={{ width: "100%", height: "100%", borderRadius: "50%" }}
							/>
						}
					>
						<h3 className="vertical-timeline-element-title">
							Software Developer – Part-Time
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							FarmData2 | Dickinson College
							<span style={{ marginLeft: "8px" }}>
								<a
									href="https://github.com/FarmData2"
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
								Designed and built REST API endpoints with Node.js, Express, and
								PostgreSQL for real-time crop management, enabling selective
								termination across 20+ farm beds on an 80-acre USDA-certified
								organic farm.
							</li>
							<li>
								Developed front-end forms in Vue.js, integrating state
								management and automating record-keeping for USDA compliance.
							</li>
							<li>
								Optimized Vue.js reactivity by restructuring computed properties
								and watchers, reducing form rendering latency by 25%.
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
						date="Jan 2025 – May 2025"
						dateClassName={"custom-date"}
						iconStyle={{ background: "#009688", color: "#fff" }}
						icon={
							<img
								src={MermaidJS}
								alt="Mermaid.js"
								style={{ width: "100%", height: "100%", borderRadius: "50%" }}
							/>
						}
					>
						<h3 className="vertical-timeline-element-title">
							Open Source Contributor
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Mermaid.js
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
								Built a configurable text wrapping system for diagram labels
								using a custom line-breaking algorithm, letting users set max
								label width and improving layout flexibility for millions of
								users.
								<a
									href="https://github.com/mermaid-js/mermaid/pull/6274"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#4fd1c5",
										textDecoration: "underline",
										marginLeft: "5px",
									}}
								>
									[PR #6274]
								</a>
							</li>
							<li>
								Added customizable title styling (color, font, size) for Journey
								diagrams with new YAML-based config options, enhancing
								accessibility and supporting enterprise branding.
								<a
									href="https://github.com/mermaid-js/mermaid/pull/6225"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#4fd1c5",
										textDecoration: "underline",
										marginLeft: "5px",
									}}
								>
									[PR #6225]
								</a>
							</li>
							<li>
								Engineered auto-scaling data labels for XY bar charts using
								JavaScript and D3.js, improving readability for visualizations
								across GitHub and Notion.
								<a
									href="https://github.com/mermaid-js/mermaid/pull/6475"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#4fd1c5",
										textDecoration: "underline",
										marginLeft: "5px",
									}}
								>
									[PR #6475]
								</a>
							</li>
						</ul>
					</VerticalTimelineElement>

					{/* FarmData2 (Internship) */}
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid rgb(33, 33, 33)" }}
						date="May 2024 – Aug 2024"
						dateClassName={"custom-date"}
						iconStyle={{ background: "rgb(82 91 58)", color: "#fff" }}
						icon={
							<img
								src={FarmData2}
								alt="FarmData2"
								style={{ width: "100%", height: "100%", borderRadius: "50%" }}
							/>
						}
					>
						<h3 className="vertical-timeline-element-title">
							Software Developer Intern
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							FarmData2 | Dickinson College
							<span style={{ marginLeft: "8px" }}>
								<a
									href="https://github.com/FarmData2"
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
								Developed and refined 30+ Cypress and Jest tests, boosting
								system reliability and raising test coverage from 50% to 80%.
							</li>
							<li>
								Built Vue.js front-end forms to replace spreadsheets, cutting
								manual entry errors for USDA certification.
							</li>
							<li>
								Integrated farmOS API for soil disturbance, seeding, and
								transplanting logs, saving staff 3 hours of weekly
								record-keeping.
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
						date="Sept 2023 – Jan 2024"
						dateClassName={"custom-date"}
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={
							<img
								src={Lumber84}
								alt="84 Lumber"
								style={{ width: "100%", height: "100%", borderRadius: "50%" }}
							/>
						}
					>
						<h3 className="vertical-timeline-element-title">
							Software Developer – Volunteer
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							84 Lumber
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
								Developed an NLP-based pipeline using ANTLR to parse and convert
								legacy CBASIC code into Python, Java, and .NET, making code
								migration faster and reducing manual review effort.
							</li>
							<li>
								Designed and implemented an Abstract Syntax Tree (AST) framework
								for automated code documentation with Doxygen, making it easier
								for new developers to understand and work with legacy code.
							</li>
						</ul>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>

			{/* Hackathon Experience Timeline */}
			<div className="timeline-section">
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
								src={Hoya}
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
							src={Prospectus}
							alt="Prospectus"
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
							Prospectus was my very first hackathon project, where I jumped
							right into building an ambitious AI-powered college admissions
							assistant. Our idea was to leverage React, Django, Azure OpenAI,
							and custom vector embeddings for smart, query-based guidance about
							universities.
						</p>
						<p>
							While we didn’t end up with a fully functional product, the
							experience was incredibly valuable. I learned a ton about
							designing architectures, working with unfamiliar tools, and
							collaborating under real-world constraints. Even though we only
							got a frontend demo and a high-level architecture, it gave me
							first-hand insight into how complex building real applications can
							be.
						</p>
						<p>
							Prospectus motivated me to level up my technical and teamwork
							skills for future hackathons. That first weekend set the stage for
							actually shipping working projects at later events.
						</p>
						<p>
							<strong>Tech Stack (planned and prototyped):</strong>
						</p>
						<div className="tech-stack" style={{ marginTop: "1rem" }}>
							<img
								src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
								alt="React"
							/>
							<img
								src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
								alt="Django"
							/>
							<img
								src="https://img.shields.io/badge/Azure%20OpenAI-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white"
								alt="Azure OpenAI"
							/>
							<img
								src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white"
								alt="Cloudflare"
							/>
							<img
								src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white"
								alt="Kubernetes"
							/>
							<img
								src="https://img.shields.io/badge/Llama%20Index-4CAF50?style=for-the-badge&logo=ai&logoColor=white"
								alt="Llama Index"
							/>
							<img
								src="https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
								alt="MongoDB Atlas"
							/>
							<img
								src="https://img.shields.io/badge/VoyageAI-FF5722?style=for-the-badge&logo=ai&logoColor=white"
								alt="VoyageAI"
							/>
							<img
								src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
								alt="GitHub"
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
								src={PennApps}
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
							src={SweetFriend}
							alt="SweetFriend"
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
							SweetFriend is a full-stack diabetes management app that gives
							users real-time glucose tracking, AI meal recognition, and instant
							health insights. I led the frontend development using React,
							building a responsive dashboard, custom chart components for live
							blood sugar graphs, and an intuitive photo upload feature for meal
							recognition powered by Tune Studio’s vision model.
						</p>
						<p>
							I implemented the integration with the Dexcom API, bringing
							continuous glucose data into the app and linking it with event
							logging. The Flask backend connects user events and meal
							predictions, stores data in MongoDB, and uses Cerebras for
							ultra-fast AI health advice. I also helped wire up Twilio for
							notifications, alerting users about critical changes in their
							glucose levels. Shipping a polished MVP with this level of
							integration in just 36 hours took grit, and the project made me
							much more confident with complex health tech stacks and real-time
							API workflows.
						</p>
						<p>
							<strong>Tech Stack:</strong>
						</p>
						<div className="tech-stack" style={{ marginTop: "1rem" }}>
							<img
								src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
								alt="React"
							/>
							<img
								src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
								alt="Flask"
							/>
							<img
								src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
								alt="MongoDB"
							/>
							<img
								src="https://img.shields.io/badge/Dexcom-5CBB5B?style=for-the-badge&logo=ai&logoColor=white"
								alt="Dexcom"
							/>
							<img
								src="https://img.shields.io/badge/Tune%20AI-4A90E2?style=for-the-badge&logo=ai&logoColor=white"
								alt="Tune AI"
							/>
							<img
								src="https://img.shields.io/badge/Cerebras-F7B93E?style=for-the-badge&logo=ai&logoColor=white"
								alt="Cerebras"
							/>
							<img
								src="https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=twilio&logoColor=white"
								alt="Twilio"
							/>
							<img
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
								src={HackHarvard}
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
							src={Albatross}
							alt="Albatross"
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
							Albatross is an AI-powered navigation app that helps users avoid
							high-risk areas in any city by finding the safest routes using
							real-time crime data. My role was building the Vue.js frontend,
							where I designed and implemented the interactive dashboard that
							overlays crime polygons and safe routes on a dynamic map. I
							connected the frontend with a backend pipeline using AWS and
							Databricks for data processing, MLflow for clustering high-crime
							zones, and Cloudflare Workers to serve the routing data to the
							HERE Routing API.
						</p>
						<p>
							I focused on getting geospatial data and route overlays working
							smoothly so users could instantly see where to travel more safely.
							We built and deployed a working demo for New York City during the
							hackathon, and even in demo mode the system visualizes hot zones
							and safer paths in real time. Building Albatross pushed me to the
							next level with map rendering, geospatial data, and full-stack
							cloud integration.
						</p>
						<p>
							<strong>Tech Stack:</strong>
						</p>
						<div className="tech-stack" style={{ marginTop: "1rem" }}>
							<img
								src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white"
								alt="Vue.js"
							/>
							<img
								src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white"
								alt="Cloudflare"
							/>
							<img
								src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
								alt="AWS"
							/>
							<img
								src="https://img.shields.io/badge/Databricks-E87352?style=for-the-badge&logo=databricks&logoColor=white"
								alt="Databricks"
							/>
							<img
								src="https://img.shields.io/badge/MLflow-0194E2?style=for-the-badge&logo=ai&logoColor=white"
								alt="MLflow"
							/>
							<img
								src="https://img.shields.io/badge/Here%20Routing-7D3F98?style=for-the-badge&logo=here&logoColor=white"
								alt="Here Routing"
							/>
							<img
								src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
								alt="Python"
							/>
							<img
								src="https://img.shields.io/badge/Scala-DC322F?style=for-the-badge&logo=scala&logoColor=white"
								alt="Scala"
							/>
							<img
								src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
								alt="JavaScript"
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
			</div>

			{/* Education Timeline */}
			<div className="timeline-section">
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
						date="Expected May 2025"
						dateClassName={"custom-date"}
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={
							<img
								src={Dickinson}
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
							<strong>Degree:</strong> Bachelor of Science in Computer Science &
							Mathematics
							<br />
							<strong>GPA:</strong> 3.52 / 4.00
						</p>
						<p>
							<strong>Honors:</strong> Dean&apos;s List, Pi Mu Epsilon (Math
							Honor Society), 1783 Scholarship Recipient
						</p>
						<p>
							<strong>Relevant Coursework:</strong>
							<ul
								style={{ columnCount: 2, marginTop: "0.5rem", marginBottom: 0 }}
							>
								<li>Data Structures</li>
								<li>Analysis of Algorithms</li>
								<li>Object-Oriented Programming</li>
								<li>Computer Architecture</li>
								<li>Operating Systems</li>
								<li>Database Systems</li>
								<li>Computer Networks</li>
								<li>Computability & Complexity</li>
								<li>Open Source Development</li>
								<li>Graph Theory</li>
							</ul>
						</p>
					</VerticalTimelineElement>

					{/* HarvardX CS50x */}
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid  rgb(45, 45, 45)" }}
						date="January 2021"
						dateClassName={"custom-date"}
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={
							<img
								src={HarvardX}
								alt="HarvardX CS50x"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
									borderRadius: "50%",
								}}
							/>
						}
					>
						<h3 className="vertical-timeline-element-title">HarvardX CS50x</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Online Certification
						</h4>
						<p>
							<strong>Description:</strong> An intensive, hands-on introduction
							to computer science, focused on problem-solving and programming
							fundamentals.
						</p>
						<p>
							<strong>Key Topics:</strong>
							<ul style={{ marginTop: "0.5rem" }}>
								<li>Programming in C, Python, SQL, JavaScript, HTML/CSS</li>
								<li>Algorithms and Data Structures</li>
								<li>Software Engineering Principles</li>
								<li>Web Development and Database Management</li>
							</ul>
						</p>
						<p>
							<strong>Certificate: </strong>
							<a
								href="https://courses.edx.org/certificates/679d72781ed04aaba91ad9ec4ead0de3"
								target="_blank"
								rel="noopener noreferrer"
								style={{ color: "#4fd1c5" }}
							>
								View Certification
							</a>
						</p>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>

			{/* GitHub Stats */}
			<GitHubStats />

			{/* Projects Section Link */}
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
					I’ve worked on a variety of exciting projects showcasing my skills in
					web development, software engineering, and more. Click the button
					below to see them!
				</Typography>
				<Button
					href="/projects" // Redirects to the projects page
					variant="contained"
					id="projects-link"
					startIcon={<CodeIcon />}
				>
					View Projects
				</Button>
			</Box>

			{/* Social Section */}
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
		</div>
	);
};

export default About;

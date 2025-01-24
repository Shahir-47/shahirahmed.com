import Shahir from "../assets/shahir.jpeg";
import Dickinson from "../assets/dickinson.png";
import HarvardX from "../assets/Harvard_x_logo.png";
import FarmData2 from "../assets/farmData2.png";
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
								Hi, I’m Shahir—a senior at <strong>Dickinson College</strong>,
								majoring in <strong>Computer Science</strong> and{" "}
								<strong>Mathematics</strong>. My coding journey started with
								curiosity and has grown into a passion for exploring new
								technologies and solving problems through code. Whether
								it&apos;s tackling bugs or creating something from scratch, I
								genuinely enjoy the process (even the occasional debugging
								marathons 😅).
							</p>
							<p className="about-me-text">
								Over the years, I’ve had the chance to contribute to impactful
								projects like{" "}
								<a
									href="https://github.com/FarmData2"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>FarmData2</strong>
								</a>
								, where I enhanced system reliability and streamlined workflows,
								and{" "}
								<a
									href="https://tinyurl.com/bp5j9uwa"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>84 Lumber</strong>
								</a>
								, where I worked on modernizing legacy systems. These
								experiences have taught me the value of collaboration,
								persistence, and writing clean, maintainable code.
							</p>
							<p className="about-me-text">
								Hackathons have been another exciting part of my journey. From
								my first project at HoyaHacks, which was a learning experience
								(to say the least), to building{" "}
								<a
									href="https://devpost.com/software/sweetfriend"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>SweetFriend</strong>
								</a>{" "}
								at PennApps and{" "}
								<a
									href="https://devpost.com/software/albatross"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>Albatross</strong>
								</a>{" "}
								at HackHarvard, every event has pushed me to think outside the
								box, work under tight deadlines, and grow as a developer.
							</p>
							<p className="about-me-text">
								When I’m not coding, you can find me mentoring fellow students
								as a teaching assistant, cheering for{" "}
								<a
									href="https://www.realmadrid.com/en"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>Real Madrid</strong>
								</a>{" "}
								⚽, or working on personal projects that let me experiment with
								new tools and ideas. You can explore my{" "}
								<a
									href="https://github.com/Shahir-47"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>GitHub</strong>
								</a>{" "}
								to see what I’ve been up to!
							</p>
							<p className="about-me-text">
								Want to know more? Scroll down to explore my{" "}
								<strong>work experience</strong>,{" "}
								<strong>hackathon adventures</strong>,{" "}
								<strong>education</strong>, and the{" "}
								<strong>tools and technologies</strong> I’ve worked with. You
								can also visit my{" "}
								<a href="/contact" target="_self">
									<strong>Contact</strong>
								</a>{" "}
								page or connect directly using the social icons below. However
								you choose, I’d love to hear from you and collaborate on
								something exciting! 😊
							</p>
						</div>

						{/* Social Section */}
						<SocialIcons />
					</div>
					<img src={Shahir} alt="Shahir" className="about-me-picture" />
				</div>
			</div>

			<div className="tools-section">
				<div className="tools-header">
					<h2>
						🛠️ <span className="highlight">Tools</span> and{" "}
						<span className="highlight">Technologies</span> I’ve worked with
					</h2>
				</div>
				<div className="tools-grid">
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
								src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"
								alt="C"
							/>
							<img
								src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
								alt="Python"
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
							<img
								src="https://img.shields.io/badge/SQL-003B57?style=for-the-badge&logo=postgresql&logoColor=white"
								alt="SQL"
							/>
						</div>
					</div>

					<div className="tools-category">
						<h3>Web Development</h3>
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
								src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
								alt="Node.js"
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
						</div>
					</div>

					<div className="tools-category">
						<h3>Tools & Platforms</h3>
						<div className="tools-icons">
							<img
								src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
								alt="AWS"
							/>
							<img
								src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white"
								alt="Cloudflare"
							/>
							<img
								src="https://img.shields.io/badge/Databricks-FF3621?style=for-the-badge&logo=databricks&logoColor=white"
								alt="Databricks"
							/>
							<img
								src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
								alt="Flask"
							/>
							<img
								src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
								alt="Vercel"
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
								src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
								alt="Docker"
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
								src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white"
								alt="Bash"
							/>
							<img
								src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white"
								alt="Cypress"
							/>
							<img
								src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"
								alt="Jest"
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
						contentArrowStyle={{ borderRight: "7px solid  rgb(33, 33, 33)" }}
						date="September 2024 - Present"
						dateClassName={"custom-date"}
						iconStyle={{ background: "rgb(82 91 58)", color: "#fff" }}
						icon={
							<img
								src={FarmData2}
								alt="FarmData2"
								style={{
									width: "100%",
									height: "100%",
									borderRadius: "50%",
								}}
							/>
						}
					>
						<h3 className="vertical-timeline-element-title">
							Software Engineer – Part-Time
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							FarmData2
							<span style={{ marginLeft: "8px" }}>
								<a
									href="https://github.com/FarmData2"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#4fd1c5", textDecoration: "underline" }}
								>
									[https://github.com/FarmData2]
								</a>
							</span>
						</h4>
						<p>
							<strong>Key Achievements:</strong>
							<ul>
								<li>
									Implemented a precise crop x bed termination feature,
									supporting 20+ beds across 500+ acres, enabling more accurate
									record-keeping for organic certification.
								</li>
								<li>
									Refactored reactivity models in Vue.js components, reducing
									error rates by 30% and improving performance during real-time
									data entry.
								</li>
								<li>
									Developed and documented new log types to track soil
									disturbance and seeding activities, expanding functionality to
									meet organic certification requirements.
								</li>
								<li>
									Achieved 90% test coverage by creating unit, E2E, and
									component tests, identifying and resolving 10+ edge cases in
									critical workflows.
								</li>
								<li>
									Enhanced user experience by redesigning key forms, decreasing
									user input time by 40% and improving data accuracy.
								</li>
							</ul>
						</p>
					</VerticalTimelineElement>

					{/* FarmData2 (Summer Intern) */}
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid  rgb(33, 33, 33)" }}
						date="May 2024 - July 2024"
						dateClassName={"custom-date"}
						iconStyle={{ background: "rgb(82 91 58)", color: "#fff" }}
						icon={
							<img
								src={FarmData2}
								alt="FarmData2"
								style={{
									width: "100%",
									height: "100%",
									borderRadius: "50%",
								}}
							/>
						}
					>
						<h3 className="vertical-timeline-element-title">
							Software Engineer – Summer Intern
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							FarmData2
							<span style={{ marginLeft: "8px" }}>
								<a
									href="https://github.com/FarmData2"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#4fd1c5", textDecoration: "underline" }}
								>
									[https://github.com/FarmData2]
								</a>
							</span>
						</h4>
						<p>
							<strong>Key Achievements:</strong>
							<ul>
								<li>
									Resolved 55+ features and issues over 8 weeks, implementing
									solutions for soil disturbance, seeding, and harvesting
									workflows, enhancing core functionality.
								</li>
								<li>
									Built reusable Vue.js components and streamlined workflows for
									future developers with modular design patterns.
								</li>
								<li>
									Improved test coverage from 50% to 80% by developing unit and
									E2E tests, minimizing deployment regressions in soil
									disturbance and seeding workflows.
								</li>
								<li>
									Developed front-end forms with Vue.js, HTML, Bootstrap, and
									JavaScript, reducing manual record-keeping errors by 40% and
									streamlining data collection for organic certification.
								</li>
								<li>
									Collaborated with a team of developers in an Agile
									environment, accelerating feature delivery by 20% through
									efficient sprint planning and task prioritization.
								</li>
							</ul>
						</p>
					</VerticalTimelineElement>

					{/* 84 Lumber (Volunteer) */}
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid  rgb(45, 45, 45)" }}
						date="September 2023 - January 2024"
						dateClassName={"custom-date"}
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={
							<img
								src={Lumber84}
								alt="84 Lumber"
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
							Software Engineer – Volunteer
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							84 Lumber
							<span style={{ marginLeft: "8px" }}>
								<a
									href="https://tinyurl.com/bp5j9uwa"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#4fd1c5", textDecoration: "underline" }}
								>
									[https://tinyurl.com/bp5j9uwa]
								</a>
							</span>
						</h4>
						<p>
							<strong>Key Achievements:</strong>
							<ul>
								<li>
									Constructed an NLP-based pipeline leveraging ANTLR to parse
									and convert legacy CBASIC code into modern languages (Python,
									Java, .NET), reducing manual code review by 40%.
								</li>
								<li>
									Constructed an Abstract Syntax Tree (AST) framework for
									automated documentation, accelerating new developer onboarding
									by 30% using Doxygen.
								</li>
								<li>
									Created a .NET Core 7 REST API with MySQL integration,
									streamlining CRUD operations from a Unix-based environment.
								</li>
							</ul>
						</p>
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
					{/* HoyaHacks */}
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
							At my first hackathon, I faced the challenge of building a complex
							AI assistant for college admissions. Despite our efforts, the
							project remained incomplete. This experience motivated me to hone
							my skills and push harder at subsequent hackathons.
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
								src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
								alt="Django"
							/>
							<img
								src="https://img.shields.io/badge/Azure%20OpenAI-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white"
								alt="Azure OpenAI"
							/>
							<img
								src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
								alt="GitHub"
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

					{/* SweetFriend */}
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
							Determined to succeed, I contributed as the frontend developer to
							SweetFriend, a web app for managing diabetes. This time, we
							delivered a fully functional product, leveraging lessons learned
							from HoyaHacks.
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
								src="https://img.shields.io/badge/Tune%20AI-4A90E2?style=for-the-badge&logo=ai&logoColor=white"
								alt="Tune AI"
							/>
							<img
								src="https://img.shields.io/badge/Cerebras-F7B93E?style=for-the-badge&logo=ai&logoColor=white"
								alt="Cerebras"
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
									<SiDevpost style={iconSize} />
									View on DevPost
								</button>
							</a>
							<a
								href="https://github.com/dmicz/SweetFriend"
								target="_blank"
								rel="noopener noreferrer"
								style={{ textDecoration: "none" }}
							>
								<button className="github">
									<FaGithub style={iconSize} />
									GitHub Repo
								</button>
							</a>
							<a
								href="https://sweet-friend.vercel.app/app/dashboard"
								target="_blank"
								rel="noopener noreferrer"
								style={{ textDecoration: "none" }}
							>
								<button className="live-preview">
									<MdVisibility style={iconSize} />
									Live Preview
								</button>
							</a>
						</div>
					</VerticalTimelineElement>

					{/* HackHarvard */}
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
							With the confidence gained from PennApps, I tackled the more
							complex Albatross project, a safe-routing tool using real-time
							crime data. After a challenging weekend in Boston, we successfully
							delivered a working product, demonstrating significant growth in
							my skills.
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
								src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
								alt="Python"
							/>
							<img
								src="https://img.shields.io/badge/Scala-DC322F?style=for-the-badge&logo=scala&logoColor=white"
								alt="Scala"
							/>
							<img
								src="https://img.shields.io/badge/Here%20Routing-7D3F98?style=for-the-badge&logo=here&logoColor=white"
								alt="Here Routing"
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
									<SiDevpost style={iconSize} />
									View on DevPost
								</button>
							</a>
							<a
								href="https://github.com/orgs/HackHarvard2024-Team/repositories"
								target="_blank"
								rel="noopener noreferrer"
								style={{ textDecoration: "none" }}
							>
								<button className="github">
									<FaGithub style={iconSize} />
									GitHub Repo
								</button>
							</a>
							<a
								href="https://albatross-hack.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
								style={{ textDecoration: "none" }}
							>
								<button className="live-preview">
									<MdVisibility style={iconSize} />
									Live Preview
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
							<strong>GPA:</strong> 3.58
						</p>
						<p>
							<strong>Relevant Coursework:</strong>
							<ul>
								<li>Data Structures & Analysis of Algorithms</li>
								<li>Object-Oriented Programming & Computer Architecture</li>
								<li>Computer Networks & Operating Systems</li>
								<li>Database Systems & Computational Mathematics</li>
								<li>Graph Theory & Computability and Complexity</li>
								<li>Probability, Statistics, & Linear Algebra</li>
								<li>Discrete Mathematics & Logic</li>
								<li>Operations Research & Introduction to Data Science</li>
								<li>Open Source Development & Number Theory</li>
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
							<strong>Description:</strong> An intensive introduction to
							computer science concepts, focusing on problem-solving and
							programming fundamentals.
						</p>
						<p>
							<strong>Key Topics:</strong>
							<ul>
								<li>Programming in C, Python, SQL, JavaScript, HTML/CSS</li>
								<li>Algorithms, Data Structures, & Software Engineering</li>
								<li>Web Development & Database Management</li>
							</ul>
						</p>
						<p>
							<strong>Certificate:</strong>{" "}
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

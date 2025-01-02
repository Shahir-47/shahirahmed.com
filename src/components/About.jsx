import Shahir from "../assets/shahir.png";
import GitSocial from "../assets/gitSocial.svg";
import Linked from "../assets/linked.svg";
import Docker from "../assets/docker.svg";
import Sql from "../assets/sql.svg";
import Eclipse from "../assets/eclipse.svg";
import Lua from "../assets/lua.svg";
import Vue from "../assets/vue.svg";
import Cypress from "../assets/cypress.svg";
import Vscode from "../assets/vscode.svg";
import C from "../assets/c.svg";
import Npm from "../assets/npm.svg";
import Babel from "../assets/babel.svg";
import Prettier from "../assets/prettier.svg";
import Eslint from "../assets/eslint.svg";
import Webpack from "../assets/webpack.svg";
import Jest from "../assets/jest.svg";
import Git from "../assets/git.svg";
import Python from "../assets/python.svg";
import Java from "../assets/java.svg";
import Linux from "../assets/linux.svg";
import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import Js from "../assets/js.svg";
import Matlab from "../assets/matlab.svg";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import EngineeringIcon from "@mui/icons-material/Engineering";
import GitHubStats from "./GitHubStats";
import "react-vertical-timeline-component/style.min.css";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

const tools = [
	{ src: Html, title: "HTML" },
	{ src: Css, title: "CSS" },
	{ src: Js, title: "JavaScript" },
	{ src: Git, title: "Git" },
	{ src: Npm, title: "NPM" },
	{ src: Vscode, title: "VS Code" },
	{ src: Docker, title: "Docker" },
	{ src: Linux, title: "Linux" },
	{ src: Python, title: "Python" },
	{ src: Java, title: "Java" },
	{ src: Sql, title: "SQL" },
	{ src: Webpack, title: "Webpack" },
	{ src: Vue, title: "Vue.js" },
	{ src: Babel, title: "Babel" },
	{ src: Jest, title: "Jest" },
	{ src: Prettier, title: "Prettier" },
	{ src: Eslint, title: "Eslint" },
	{ src: Cypress, title: "Cypress" },
	{ src: C, title: "C++" },
	{ src: Lua, title: "Lua" },
	{ src: Eclipse, title: "Eclipse" },
	{ src: Matlab, title: "Matlab" },
];

const About = () => {
	return (
		<div className="about-page">
			<div className="about-container">
				<div className="about-text-container">
					<h1 className="about-me">
						About <span>Me</span>
					</h1>
				</div>
				<div className="about-me-div">
					<div className="about-me-text-div">
						<div className="paragraph">
							<p className="about-me-text">
								Hello! I&apos;m Shahir, a dedicated Computer Science and
								Mathematics student at Dickinson College, where I&apos;m
								mastering the art of full-stack development, with a keen eye on
								creating innovative web solutions. My academic journey is richly
								complemented by hands-on experience, especially noted during my
								transformative internship at 84 Lumber. There, I took the lead
								in modernizing technology by converting 50,000 lines of legacy
								code into contemporary and scalable Java and Python
								applications, showcasing my proficiency in these languages and
								my knack for efficient problem-solving.
							</p>
							<p className="about-me-text">
								My commitment to tech excellence is demonstrated through a
								series of challenging projects. I&apos;ve dedicated myself to
								developing a variety of applications, from interactive games to
								dynamic web applications, each serving as a platform for
								learning and applying new technologies and coding techniques.
								These projects, available in my active GitHub repository,
								highlight my dedication to coding excellence and my passion for
								exploring the boundaries of web and software development.
							</p>
							<p className="about-me-text">
								As I continue to evolve in this dynamic field, my goal is to
								leverage my skills in a professional setting where I can
								contribute to meaningful tech solutions and further hone my
								expertise. Whether working solo or as part of a team, I approach
								every project with a meticulous analytical mindset, constantly
								striving to exceed expectations and drive innovation in the tech
								space.
							</p>
							<p className="about-me-text">
								Let&apos;s connect to explore opportunities in web development,
								collaborate on exciting projects, or simply to exchange insights
								on the latest in technology!
							</p>
						</div>
						<div className="social-icons">
							<a
								href="https://github.com/Shahir-47"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={GitSocial} alt="GitHub" />
							</a>
							<a
								href="https://www.linkedin.com/in/shahir47/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={Linked} alt="LinkedIn" />
							</a>
						</div>
					</div>
					<img src={Shahir} alt="Shahir" className="about-me-picture" />
				</div>
			</div>
			<div className="second-div">
				<div className="second-div-text">
					<p>
						<span className="highlight">Tools</span> and{" "}
						<span className="highlight">Technologies</span> I&apos;ve worked
						with
					</p>
				</div>
				<div className="carousel-container">
					<div className="carousel">
						{tools.map((tool, index) => (
							<div className="carousel-item" key={index}>
								<img src={tool.src} alt={tool.title} />
								<p>{tool.title}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Education Timeline */}
			<div className="timeline-section">
				<h2>Education</h2>
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
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={<SchoolIcon />}
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
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={<SchoolIcon />}
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

			{/* Work Experience Timeline */}
			<div className="timeline-section">
				<h2>Work Experience</h2>
				<VerticalTimeline
					lineColor="#4fd1c5"
					layout="1-column-left"
					className="timeline"
				>
					{/* Starting Icon */}
					<VerticalTimelineElement
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={<WorkIcon />}
					/>

					{/* FarmData2 */}
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid  rgb(33, 33, 33)" }}
						date="May 2024 - Present"
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={<EngineeringIcon />}
					>
						<h3 className="vertical-timeline-element-title">
							Software Engineer
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Dickinson College • FarmData2
						</h4>
						<p>
							<strong>Key Achievements:</strong>
							<ul>
								<li>
									Resolved 55+ GitHub issues in 8 weeks by refactoring Vue.js
									components and implementing Cypress tests, increasing code
									reliability by 30%.
								</li>
								<li>
									Optimized back-end integration by configuring Axios requests
									and collaborating with farmOS APIs, reducing data transfer
									times by 25%.
								</li>
								<li>
									Improved test coverage from 50% to 80% by developing unit and
									E2E tests, minimizing deployment regressions in soil
									disturbance and seeding workflows.
								</li>
								<li>
									Engineered front-end forms with Vue.js, HTML, Bootstrap, and
									JavaScript, reducing manual record-keeping errors by 40% and
									streamlining data collection for organic certification.
								</li>
							</ul>
						</p>
					</VerticalTimelineElement>

					{/* 84 Lumber */}
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid  rgb(45, 45, 45)" }}
						date="September 2023 - January 2024"
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={<EngineeringIcon />}
					>
						<h3 className="vertical-timeline-element-title">
							Software Engineer (Volunteer)
						</h3>
						<h4 className="vertical-timeline-element-subtitle">84 Lumber</h4>
						<p>
							<strong>Key Achievements:</strong>
							<ul>
								<li>
									Engineered an NLP-based pipeline leveraging ANTLR to parse and
									convert legacy CBASIC code into modern languages (Python,
									Java, .NET), reducing manual code review by 40%.
								</li>
								<li>
									Constructed an Abstract Syntax Tree (AST) framework for
									automated documentation, accelerating new developer onboarding
									by 30% using Doxygen.
								</li>
								<li>
									Developed a .NET Core 7 REST API with MySQL integration,
									streamlining CRUD operations from a Unix-based environment and
									modernizing critical backend workflows.
								</li>
							</ul>
						</p>
					</VerticalTimelineElement>

					{/* Teaching Assistant */}
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 33, 33)",
							color: "#fff",
							boxShadow: "0 3px 0 #4fd1c5",
						}}
						contentArrowStyle={{ borderRight: "7px solid  rgb(33, 33, 33)" }}
						date="January 2022 - Present"
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={<WorkIcon />}
					>
						<h3 className="vertical-timeline-element-title">
							Teaching Assistant
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Dickinson College
						</h4>
						<p>
							<strong>Key Achievements:</strong>
							<ul>
								<li>
									Facilitated weekly lab sessions for 25+ students, increasing
									average assignment completion rate by 20% through one-on-one
									code reviews and debugging guidance in Python and Java.
								</li>
								<li>
									Guided undergraduates in data structures and algorithms,
									boosting overall exam performance by 15% through targeted
									review sessions and collaborative problem-solving exercises.
								</li>
							</ul>
						</p>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>

			{/* Hackathon Experience Timeline */}
			<div className="timeline-section">
				<h2>Hackathon Experience</h2>
				<VerticalTimeline
					lineColor="#4fd1c5"
					layout="1-column-left"
					className="timeline"
				>
					{/* Starting Icon */}
					<VerticalTimelineElement
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={<CodeIcon />}
					/>

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
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={<CodeIcon />}
					>
						<h3 className="vertical-timeline-element-title">Prospectus</h3>
						<h4 className="vertical-timeline-element-subtitle">HoyaHacks</h4>
						<img
							src="../assets/hoyahacks.png"
							alt="HoyaHacks"
							style={{
								width: "100%",
								borderRadius: "8px",
								marginBottom: "1rem",
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
						<div style={{ marginTop: "1rem" }}>
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
									<i
										className="fab fa-devpost"
										style={{ marginRight: "10px" }}
									></i>{" "}
									View on DevPost
								</button>
							</a>
							<a
								href="https://github.com/HoyaHacks2024-Team"
								target="_blank"
								rel="noopener noreferrer"
								style={{ textDecoration: "none" }}
							>
								<button className="github">
									<i
										className="fab fa-github"
										style={{ marginRight: "10px" }}
									></i>{" "}
									GitHub Repo
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
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={<CodeIcon />}
					>
						<h3 className="vertical-timeline-element-title">SweetFriend</h3>
						<h4 className="vertical-timeline-element-subtitle">PennApps</h4>
						<img
							src="../assets/pennapps.png"
							alt="PennApps"
							style={{
								width: "100%",
								borderRadius: "8px",
								marginBottom: "1rem",
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
						<div style={{ marginTop: "1rem" }}>
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
									<i
										className="fab fa-devpost"
										style={{ marginRight: "10px" }}
									></i>{" "}
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
									<i
										className="fab fa-github"
										style={{ marginRight: "10px" }}
									></i>{" "}
									GitHub Repo
								</button>
							</a>
							<a
								href="https://sweet-friend.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								style={{ textDecoration: "none" }}
							>
								<button className="live-preview">
									<i
										className="fas fa-external-link-alt"
										style={{ marginRight: "10px" }}
									></i>{" "}
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
						iconStyle={{ background: "#4fd1c5", color: "#fff" }}
						icon={<CodeIcon />}
					>
						<h3 className="vertical-timeline-element-title">Albatross</h3>
						<h4 className="vertical-timeline-element-subtitle">HackHarvard</h4>
						<img
							src="../assets/hackharvard.png"
							alt="HackHarvard"
							style={{
								width: "100%",
								borderRadius: "8px",
								marginBottom: "1rem",
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
						<div style={{ marginTop: "1rem" }}>
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
									<i
										className="fab fa-devpost"
										style={{ marginRight: "10px" }}
									></i>{" "}
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
									<i
										className="fab fa-github"
										style={{ marginRight: "10px" }}
									></i>{" "}
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
									<i
										className="fas fa-external-link-alt"
										style={{ marginRight: "10px" }}
									></i>{" "}
									Live Preview
								</button>
							</a>
						</div>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>

			{/* GitHub Stats */}
			<GitHubStats />
		</div>
	);
};

export default About;

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
		</div>
	);
};

export default About;

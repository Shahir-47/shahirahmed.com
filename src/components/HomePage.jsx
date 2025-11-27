import { useEffect } from "react";
import Typed from "typed.js";
import Computer from "../assets/computer.png";
import Hand from "../assets/hand.svg";
import Hacker from "../assets/hacker.svg";
import SocialIcons from "./SocialIcons";
import { Box, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";

const HomePage = () => {
	useEffect(() => {
		const typed = new Typed("#typed-text", {
			strings: [
				"Full Stack Developer",
				"Creative Coder",
				"Computer Science Student",
				"Mathematics Student",
				"Aspiring Software Developer",
				"Emerging Full Stack Developer",
				"Programming Enthusiast",
				"Future Tech Professional",
				"Student of Software Engineering",
				"Coding Hobbyist",
				"Software Engineer in Training",
				"Software Engineer in the Making",
				"Software Engineer in the Works",
			],
			typeSpeed: 50,
			backSpeed: 25,
			startDelay: 1000,
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
			{/* First Block */}
			<div className="first-block-home">
				<div className="text-container">
					<div className="sub-text-container">
						<div className="first-text-container">
							<h3>Hi, There!</h3>
							<img className="wave" src={Hand} alt="Wave" />
						</div>
						<div className="second-text-container">
							<h5>
								I&apos;m <span className="name">Shahir Ahmed</span>
							</h5>
						</div>
					</div>
					<div className="typed-text-container">
						<p id="typed-text" className="typed-text"></p>
					</div>
				</div>
				<div className="image-container">
					<img className="computer" src={Computer} alt="Computer" />
				</div>
			</div>

			{/* Second Block */}
			<div className="second-block-home">
				<div className="second-block-text-container">
					<div className="text-div">
						<div className="sub-div">
							<p className="sub-text">
								Learn more about my background and skills by visiting the{" "}
								<strong>About</strong> page, exploring my{" "}
								<strong>Projects</strong>, or reviewing my{" "}
								<strong>Resume</strong>.
							</p>
							<Box
								sx={{
									display: "flex",
									gap: "2rem",
									justifyContent: "center",
									flexWrap: "wrap",
								}}
								className="button-container"
							>
								<Button
									variant="contained"
									href="/about"
									startIcon={<PersonIcon />}
									sx={{
										backgroundColor: "#4fd1c5",
										color: "#222",
										fontWeight: "bold",
										"&:hover": {
											backgroundColor: "#a569bd",
											boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
											color: "#fff",
										},
									}}
								>
									About Me
								</Button>
								<Button
									variant="contained"
									href="/projects"
									startIcon={<CodeIcon />}
									sx={{
										backgroundColor: "#4fd1c5",
										color: "#222",
										fontWeight: "bold",
										"&:hover": {
											backgroundColor: "#a569bd",
											boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
											color: "#fff",
										},
									}}
								>
									My Projects
								</Button>
								<Button
									variant="contained"
									href="https://drive.google.com/file/d/1KXPdYbmQQVwjGAx_jBstJnJ54bNlm4Wf/view?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
									startIcon={<DescriptionIcon />}
									sx={{
										backgroundColor: "#4fd1c5",
										color: "#222",
										fontWeight: "bold",
										"&:hover": {
											backgroundColor: "#a569bd",
											boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
											color: "#fff",
										},
									}}
								>
									My Resume
								</Button>
							</Box>
							<p className="sub-text">
								You can also <strong>Contact Me</strong> via the{" "}
								<a href="/contact">Contact Me page</a> or through my social
								links below.
							</p>
						</div>
						<SocialIcons />
					</div>
					<img className="hacker" src={Hacker} alt="Hacker" />
				</div>
			</div>
		</div>
	);
};

export default HomePage;

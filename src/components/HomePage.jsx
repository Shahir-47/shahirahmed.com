import { useEffect } from "react";
import Typed from "typed.js";
import Computer from "../assets/computer.png";
import Hand from "../assets/hand.svg";
import Hacker from "../assets/hacker.svg";
import GitSocial from "../assets/gitSocial.svg";
import Linked from "../assets/linked.svg";

const HomePage = () => {
	useEffect(() => {
		// Initialize Typed.js
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
			// Destroy Typed instance on component unmount
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
						<h3>
							If opportunity doesn&apos;t knock,{" "}
							<span className="span-door">build a door.</span>
						</h3>
						<div className="sub-div">
							<p className="sub-text">
								<span className="highlight">
									Embracing challenges with innovation and determination,{" "}
								</span>
								I channel my passion for coding into crafting solutions where
								none existed before. In the ever-evolving world of web
								development, I&apos;m committed to turning obstacles into
								stepping stones for growth and learning.
							</p>
							<p className="sub-text">
								With every line of code, I aim to build web applications that
								are intuitive and efficient. My goal is to create tools that not
								only function smoothly but also enhance the user experience.
								It&apos;s about paving new pathways to success and ensuring they
								lead to meaningful results for both users and businesses.
							</p>
						</div>
					</div>
					<img className="hacker" src={Hacker} alt="Hacker" />
				</div>

				{/* Social Block */}
				<div className="social-block">
					<div className="social-text-div">
						<h3>FIND ME ON</h3>
						<p className="social-sub-text">
							Feel free to <span>connect</span> with me
						</p>
					</div>
					<div className="social-icons">
						<a
							href="https://github.com/Shahir-47"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="social-icon" src={GitSocial} alt="GitHub" />
						</a>
						<a
							href="https://www.linkedin.com/in/shahir47/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="social-icon" src={Linked} alt="LinkedIn" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;

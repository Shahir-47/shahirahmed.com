import PropTypes from "prop-types";
import Masonry from "react-masonry-css";
import Todo from "../assets/todo.png";
import Battleship from "../assets/battleship.png";
import Weather from "../assets/weather.png";
import Tictac from "../assets/tictac.png";
import Calculator from "../assets/calculator.png";
import Restaurant from "../assets/restaurant.png";
import Etch from "../assets/etch.png";
import FD2 from "../assets/fd2.png";
import SweetFriend from "../assets/sweetFriend.jpg";
import Albatross from "../assets/albatross.png";
import ResumeApp from "../assets/resume-app.png";
import SpaceAccuracy from "../assets/space.png";
import SocialIcons from "./SocialIcons";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";

const projectsData = [
	{
		image: FD2,
		title: "FarmData2",
		description:
			"FarmData2 is an open-source platform for diversified vegetable farms, streamlining data entry, reporting, and analytics for organic certification and sustainable farming practices.",
		liveDemo: null,
		sourceCode: "https://github.com/FarmData2/FarmData2",
		repo: "FarmData2",
	},
	{
		image: Albatross,
		title: "Albatross",
		description:
			"Albatross is a hackathon project leveraging AI and real-time crime data to enhance urban safety by calculating and displaying the safest navigation routes. Built with Vue.js, it features an interactive map highlighting high-risk zones and optimized routes, currently operating in demo mode.",
		liveDemo: "https://albatross-hack.netlify.app/",
		sourceCode: "https://github.com/orgs/HackHarvard2024-Team/repositories",
		repo: "Albatross",
	},
	{
		image: SweetFriend,
		title: "SweetFriend",
		description:
			"SweetFriend is a diabetes management web app integrating Dexcom glucose monitors for real-time glucose tracking, AI-powered meal recognition, and personalized health insights. It simplifies carb counting, meal logging, and glucose trend analysis to empower users in managing diabetes effectively.",
		liveDemo: "https://sweetfriend.vercel.app/",
		sourceCode: "https://github.com/dmicz/SweetFriend",
		repo: "SweetFriend",
	},
	{
		image: Weather,
		title: "Weather App",
		description:
			"Weather Whiz is a web app providing current weather, hourly & 2-day forecasts for different locations. Switch between imperial & metric units. Built with HTML, CSS, JS, Webpack, Babel, ESLint & Prettier. APIs: OpenWeather & Mapbox. Stay prepared with accurate weather data!",
		liveDemo: "https://shahir-47.github.io/Weather-Whiz/",
		sourceCode: "https://github.com/Shahir-47/Weather-Whiz",
		repo: "Weather-Whiz",
	},
	{
		image: Todo,
		title: "Todo List",
		description:
			"Todo List is a powerful task management application that helps you stay organized and productive. Manage tasks, projects, and notes effortlessly. Features include priority levels, due dates, search functionality, and dark/light theme. Get started and boost your productivity today!",
		liveDemo: "https://shahir-47.github.io/Todo-List/",
		sourceCode: "https://github.com/Shahir-47/Todo-List",
		repo: "Todo-List",
	},
	{
		image: Battleship,
		title: "Battleship",
		description:
			"A web-based Battleship game with a strategic AI. Players engage in classic naval warfare against a computer. Code is open for contributions and tests ensure robust gameplay. Play now!",
		liveDemo: "https://shahir-47.github.io/Battleship/",
		sourceCode: "https://github.com/Shahir-47/Battleship",
		repo: "Battleship",
	},
	{
		image: Tictac,
		title: "Tic Tac Toe",
		description:
			"Enjoy the classic Tic Tac Toe game with customizable markers, colors, and player names. Play against a friend or challenging AI. Responsive design, visually appealing interface. Source code for HTML, CSS, JavaScript implementation. Experience hours of interactive and addictive fun!",
		liveDemo: "https://shahir-47.github.io/Tic-Tac-Toe/",
		sourceCode: "https://github.com/Shahir-47/Tic-Tac-toe",
		repo: "Tic-Tac-Toe",
	},
	{
		image: ResumeApp,
		title: "Resume Builder",
		description:
			"A user-friendly web application for creating, editing, and previewing professional resumes. Features include customizable sections, reorder functionality, and PDF export. Perfect for users looking to design structured and visually appealing resumes.",
		liveDemo: "https://resume-maker-template.netlify.app/",
		sourceCode: "https://github.com/Shahir-47/CV-Application",
		repo: "CV-Application",
	},
	{
		image: "",
		title: "Recover",
		description:
			"Recover is a forensic recovery program in C that retrieves JPEG files from a memory card image by identifying unique file signatures. Designed for data recovery, the program processes memory blocks and reconstructs images into standalone files.",
		sourceCode: "https://github.com/Shahir-47/Recover",
		repo: "Recover",
	},
	{
		image: "",
		title: "DNA Profiling",
		description:
			"A forensic DNA profiling program that matches a DNA sequence to an individual based on Short Tandem Repeats (STRs). The tool reads STR counts from a CSV database, analyzes the longest runs of STR repeats in a DNA sequence, and identifies a match or declares 'No match.'",
		sourceCode: "https://github.com/Shahir-47/DNA",
	},
	{
		image: "",
		title: "Speller",
		description:
			"A high-performance spell-checking program built with C, leveraging hash tables for efficient word lookups. It identifies misspelled words in a text file, supports customizable dictionaries, and provides detailed performance metrics for operations like loading, checking, and memory management.",
		sourceCode: "https://github.com/Shahir-47/speller",
		repo: "speller",
	},
	{
		image: "",
		title: "Filter",
		description:
			"An image processing program in C that applies grayscale, sepia, reflection, and blur filters to BMP images. Demonstrates low-level pixel manipulation and memory-efficient algorithms to transform images with high performance.",
		sourceCode: "https://github.com/Shahir-47/filter",
		repo: "filter",
	},
	{
		image: SpaceAccuracy,
		title: "SpaceAccuracy",
		description:
			"A 2D shooter game where players aim to hit an alien and score points while the challenge increases with each hit. Developed in Lua with robust OOP principles, the game highlights skills in game logic, animations, and shooting mechanics.",
		sourceCode: "https://github.com/Shahir-47/SpaceAccuracy",
		repo: "SpaceAccuracy",
	},
	{
		image: "",
		title: "Runoff Voting System",
		description:
			"Runoff is a ranked-choice voting program that simulates instant-runoff elections. It efficiently handles voter preferences, redistributing votes in multiple rounds until a candidate achieves a majority.",
		sourceCode: "https://github.com/Shahir-47/Runoff",
		repo: "Runoff",
	},
	{
		image: "",
		title: "Credit Card Validator",
		description:
			"Credit is a C program that validates credit card numbers using Luhn's Algorithm and identifies card types (Visa, MasterCard, or AMEX). It demonstrates data validation, algorithm implementation, and structured logic for handling edge cases effectively.",
		sourceCode: "https://github.com/Shahir-47/Credit",
		repo: "Credit",
	},
	{
		image: Etch,
		title: "Etch a Sketch",
		description:
			"Experience the classic Etch-a-Sketch fun online! Draw and create masterpieces with this simple web application. Built using HTML, CSS, and JavaScript.",
		liveDemo: "https://shahir-47.github.io/Etch-a-Sketch/",
		sourceCode: "https://github.com/Shahir-47/Etch-a-Sketch/",
		repo: "Etch-a-Sketch",
	},
	{
		image: Calculator,
		title: "Calculator",
		description:
			"This is a simple calculator application with keyboard support. It allows you to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also includes additional features like calculating the factorial and exponentiation.",
		liveDemo: "https://shahir-47.github.io/Calculator/",
		sourceCode: "https://github.com/Shahir-47/Calculator",
		repo: "Calculator",
	},
	{
		image: Restaurant,
		title: "Restaurant Page",
		description:
			"A web-based platform that provides information and features related to a fictional restaurant called the Galactic Cantina. The application allows users to explore various sections such as the home page, menu page, contact page, about us page, review page, and FAQ page.",
		liveDemo: "https://shahir-47.github.io/Restaurant-Page/",
		sourceCode: "https://github.com/Shahir-47/Restaurant-Page",
		repo: "Restaurant-Page",
	},
];

const ProjectItem = ({
	image,
	title,
	description,
	liveDemo,
	sourceCode,
	highlight,
}) => (
	<Box
		sx={{
			backgroundColor: "#222",
			padding: "1.5rem",
			borderRadius: "10px",
			boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
			transition: "transform 0.3s ease",
			"&:hover": { transform: "scale(1.05)" },
		}}
	>
		{image && (
			<img
				src={image}
				alt={title}
				style={{
					width: "100%",
					borderRadius: "8px",
					marginBottom: "1rem",
				}}
			/>
		)}

		<Typography
			variant="h5"
			sx={{
				color: "#4fd1c5",
				fontWeight: "bold",
				marginBottom: "0.5rem",
			}}
			dangerouslySetInnerHTML={{ __html: highlight(title) }}
		/>
		<Typography
			sx={{ color: "#e0e0e0", marginBottom: "1rem" }}
			dangerouslySetInnerHTML={{ __html: highlight(description) }}
		/>
		<Box sx={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
			{liveDemo && (
				<Button
					variant="contained"
					href={liveDemo}
					target="_blank"
					rel="noopener noreferrer"
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
					Live Demo
				</Button>
			)}
			<Button
				variant="outlined"
				href={sourceCode}
				target="_blank"
				rel="noopener noreferrer"
				sx={{
					borderColor: "#4fd1c5",
					color: "#4fd1c5",
					fontWeight: "bold",
					"&:hover": {
						borderColor: "#a569bd",
						color: "#a569bd",
						boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
					},
				}}
			>
				Source Code
			</Button>
		</Box>
	</Box>
);

const Projects = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const highlightText = (text) => {
		if (!searchTerm) return text;
		const regex = new RegExp(`(${searchTerm})`, "gi");
		return text.replace(regex, "<mark>$1</mark>");
	};

	const filteredProjects = projectsData.filter(
		(project) =>
			project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.description.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		700: 1,
	};

	return (
		<Box
			sx={{
				color: "#e0e0e0",
				maxWidth: "1200px",
				margin: "0 auto",
				padding: "2rem",
				flex: "1",
			}}
		>
			<Typography
				variant="h4"
				sx={{
					textAlign: "center",
					color: "#4fd1c5",
					fontWeight: "bold",
					marginBottom: "2rem",
				}}
			>
				📂 Projects
			</Typography>
			<Box
				sx={{
					marginBottom: "2rem",
				}}
			>
				<TextField
					fullWidth
					label="Search Projects"
					variant="outlined"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					sx={{
						backgroundColor: "#333",
						borderRadius: "5px",
						"& .MuiInputLabel-root": {
							color: "#4fd1c5",
							transition: "color 0.3s ease",
						},
						"& .MuiInputLabel-root.Mui-focused": {
							color: "#a569bd",
						},
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: "#4fd1c5",
								transition: "border-color 0.3s ease",
							},
							"&:hover fieldset": {
								borderColor: "#4fd1c5",
							},
							"&.Mui-focused fieldset": {
								borderColor: "#a569bd",
							},
						},
						"& .MuiInputBase-input": {
							color: "#e0e0e0",
						},
					}}
				/>
			</Box>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{filteredProjects.map((project, index) => (
					<ProjectItem key={index} {...project} highlight={highlightText} />
				))}
			</Masonry>
			<Box sx={{ textAlign: "center", color: "#e0e0e0", marginTop: "3rem" }}>
				<Typography
					variant="h5"
					sx={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1.2rem" }}
				>
					Feel free to <span style={{ color: "#4fd1c5" }}>connect</span> with me
				</Typography>
				<SocialIcons />
			</Box>
		</Box>
	);
};

ProjectItem.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	liveDemo: PropTypes.string.isRequired,
	sourceCode: PropTypes.string.isRequired,
	highlight: PropTypes.func.isRequired,
};

export default Projects;

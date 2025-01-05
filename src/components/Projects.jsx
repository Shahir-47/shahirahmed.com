import PropTypes from "prop-types";
import Todo from "../assets/todo.png";
import Battleship from "../assets/battleship.png";
import Weather from "../assets/weather.png";
import Tictac from "../assets/tictac.png";
import Calculator from "../assets/calculator.png";
import Restaurant from "../assets/restaurant.png";
import Etch from "../assets/etch.png";
import SocialIcons from "./SocialIcons";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";

const projectsData = [
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
		image: Weather,
		title: "Weather App",
		description:
			"Weather Whiz is a web app providing current weather, hourly & 2-day forecasts for different locations. Switch between imperial & metric units. Built with HTML, CSS, JS, Webpack, Babel, ESLint & Prettier. APIs: OpenWeather & Mapbox. Stay prepared with accurate weather data!",
		liveDemo: "https://shahir-47.github.io/Weather-Whiz/",
		sourceCode: "https://github.com/Shahir-47/Weather-Whiz",
		repo: "Weather-Whiz",
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
	{
		image: Etch,
		title: "Etch a Sketch",
		description:
			"Experience the classic Etch-a-Sketch fun online! Draw and create masterpieces with this simple web application. Built using HTML, CSS, and JavaScript.",
		liveDemo: "https://shahir-47.github.io/Etch-a-Sketch/",
		sourceCode: "https://github.com/Shahir-47/Etch-a-Sketch/",
		repo: "Etch-a-Sketch",
	},
];

const fetchRepoDates = async () => {
	const baseUrl = "https://api.github.com/repos/Shahir-47/";
	const updatedProjects = await Promise.all(
		projectsData.map(async (project) => {
			const response = await fetch(`${baseUrl}${project.repo}`);
			const data = await response.json();
			return {
				...project,
				createdAt: new Date(data.created_at),
			};
		})
	);
	return updatedProjects;
};

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
		<img
			src={image}
			alt={title}
			style={{
				width: "100%",
				borderRadius: "8px",
				marginBottom: "1rem",
			}}
		/>
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

ProjectItem.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	liveDemo: PropTypes.string.isRequired,
	sourceCode: PropTypes.string.isRequired,
	highlight: PropTypes.func.isRequired,
};

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
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
					gap: "2rem",
				}}
			>
				{filteredProjects.map((project, index) => (
					<ProjectItem key={index} {...project} highlight={highlightText} />
				))}
			</Box>
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
export default Projects;

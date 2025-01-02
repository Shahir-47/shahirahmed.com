import PropTypes from "prop-types";
import Todo from "../assets/todo.png";
import Battleship from "../assets/battleship.png";
import Weather from "../assets/weather.png";
import Tictac from "../assets/tictac.png";
import Calculator from "../assets/calculator.png";
import Restaurant from "../assets/restaurant.png";
import Etch from "../assets/etch.png";

const projectsData = [
	{
		image: Todo,
		title: "Todo List",
		description:
			"Todo List is a powerful task management application that helps you stay organized and productive. Manage tasks, projects, and notes effortlessly. Features include priority levels, due dates, search functionality, and dark/light theme. Get started and boost your productivity today!",
		liveDemo: "https://shahir-47.github.io/Todo-List/",
		sourceCode: "https://github.com/Shahir-47/Todo-List",
	},
	{
		image: Battleship,
		title: "Battleship",
		description:
			"A web-based Battleship game with a strategic AI. Players engage in classic naval warfare against a computer. Code is open for contributions and tests ensure robust gameplay. Play now!",
		liveDemo: "https://shahir-47.github.io/Battleship/",
		sourceCode: "https://github.com/Shahir-47/Battleship",
	},
	{
		image: Weather,
		title: "Weather App",
		description:
			"Weather Whiz is a web app providing current weather, hourly & 2-day forecasts for different locations. Switch between imperial & metric units. Built with HTML, CSS, JS, Webpack, Babel, ESLint & Prettier. APIs: OpenWeather & Mapbox. Stay prepared with accurate weather data!",
		liveDemo: "https://shahir-47.github.io/Weather-Whiz/",
		sourceCode: "https://github.com/Shahir-47/Weather-Whiz",
	},
	{
		image: Tictac,
		title: "Tic Tac Toe",
		description:
			"Enjoy the classic Tic Tac Toe game with customizable markers, colors, and player names. Play against a friend or challenging AI. Responsive design, visually appealing interface. Source code for HTML, CSS, JavaScript implementation. Experience hours of interactive and addictive fun!",
		liveDemo: "https://shahir-47.github.io/Tic-Tac-Toe/",
		sourceCode: "https://github.com/Shahir-47/Tic-Tac-toe",
	},
	{
		image: Calculator,
		title: "Calculator",
		description:
			"This is a simple calculator application with keyboard support. It allows you to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also includes additional features like calculating the factorial and exponentiation.",
		liveDemo: "https://shahir-47.github.io/Calculator/",
		sourceCode: "https://github.com/Shahir-47/Calculator",
	},
	{
		image: Restaurant,
		title: "Restaurant Page",
		description:
			"A web-based platform that provides information and features related to a fictional restaurant called the Galactic Cantina. The application allows users to explore various sections such as the home page, menu page, contact page, about us page, review page, and FAQ page.",
		liveDemo: "https://shahir-47.github.io/Restaurant-Page/",
		sourceCode: "https://github.com/Shahir-47/Restaurant-Page",
	},
	{
		image: Etch,
		title: "Etch a Sketch",
		description:
			"Experience the classic Etch-a-Sketch fun online! Draw and create masterpieces with this simple web application. Built using HTML, CSS, and JavaScript.",
		liveDemo: "https://shahir-47.github.io/Etch-a-Sketch/",
		sourceCode: "https://github.com/Shahir-47/Etch-a-Sketch/",
	},
];

const ProjectItem = ({ image, title, description, liveDemo, sourceCode }) => (
	<div className="project-item">
		<img src={image} alt={title} />
		<div className="project-item-div">
			<h1>{title}</h1>
			<p>{description}</p>
			<div className="project-link-div">
				<a href={liveDemo} target="_blank" rel="noopener noreferrer">
					Live Demo
				</a>
				<a href={sourceCode} target="_blank" rel="noopener noreferrer">
					Source Code
				</a>
			</div>
		</div>
	</div>
);
ProjectItem.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	liveDemo: PropTypes.string.isRequired,
	sourceCode: PropTypes.string.isRequired,
};

const Projects = () => {
	return (
		<div className="project-div">
			<h1>Projects</h1>
			<div className="project-container">
				{projectsData.map((project, index) => (
					<ProjectItem key={index} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;

import PropTypes from "prop-types";
import Masonry from "react-masonry-css";
import Etch from "../assets/etch.png";
import FD2 from "../assets/fd2.png";
import SweetFriend from "../assets/sweetFriend.jpg";
import Albatross from "../assets/albatross.png";
import SpaceAccuracy from "../assets/space.png";
import SocialIcons from "./SocialIcons";
import bittorrent from "../assets/bittorrent.svg";
import Peer from "../assets/peer.png";
import Sarva from "../assets/sarva.png";
import Open from "../assets/open.png";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import { SiDevpost } from "react-icons/si";
import { Launch } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";

const DevpostButton = ({ link }) => (
	<Button
		variant="contained"
		href={link}
		target="_blank"
		rel="noopener noreferrer"
		fullWidth
		sx={{
			backgroundColor: "#0066ff",
			color: "#fff",
			fontWeight: "bold",
			"&:hover": {
				backgroundColor: "#0044bb",
				color: "#fff",
				boxShadow: "0 4px 15px rgba(0, 102, 255, 0.25)",
			},
			minWidth: 0,
			padding: "8px 0",
			fontSize: "1rem",
		}}
		startIcon={<SiDevpost />}
	>
		Devpost
	</Button>
);

DevpostButton.propTypes = {
	link: PropTypes.string.isRequired,
};

const projectsData = [
	{
		image: FD2,
		title: "FarmData2",
		description:
			"FarmData2 is an open-source platform for diversified vegetable farms, streamlining data entry, reporting, and analytics for organic certification and sustainable farming practices.",
		liveDemo: null,
		sourceCode: "https://github.com/FarmData2/",
		repo: "FarmData2",
	},
	{
		image: Open,
		title: "Open Source Contributions",
		description: `
			Top contributor to <b>Mermaid.js</b> (Top 25, key features & PRs) and <b>FarmData2</b> (#2 overall, 25+ PRs, 14K+ lines added).<br/>
			Check out my open source journey, major PRs, stats, and merged features for both projects.<br/>
			<ul style="margin: 0 0 0 1.5em; padding: 0;">
				<li>
					<a href="https://github.com/mermaid-js/mermaid/pulls?q=is%3Apr+involves%3AShahir-47+is%3Aclosed" target="_blank" style="color: #4fd1c5; text-decoration: underline;">
						Mermaid.js PRs (Top 25 contributor)
					</a>
				</li>
				<li>
					<a href="https://github.com/FarmData2/FarmData2/pulls?q=is%3Apr+involves%3AShahir-47+is%3Aclosed" target="_blank" style="color: #4fd1c5; text-decoration: underline;">
						FarmData2 PRs (#2 contributor)
					</a>
				</li>
				<li>
					<a href="https://github.com/Shahir-47/open-source-contributions" target="_blank" style="color: #4fd1c5; text-decoration: underline;">
						See full OSS portfolio & stats
					</a>
				</li>
			</ul>
		`,
		sourceCode: "https://github.com/Shahir-47/open-source-contributions", // 'Source Code' button also points here
		devpost: null,
		repo: "Open-Source-Contributions",
	},
	{
		image: Sarva, // Add your Sarva app logo or screenshot if available
		title: "Sarva (Public Template)",
		description:
			"Sarva is a full-stack grocery delivery platform for South Asian markets. This open template demonstrates a real-world, role-based marketplace built with Next.js, Firebase, Stripe, and Google Maps API. Features include customer ordering, vendor management, driver delivery flows, real-time order tracking, and split payments. The live production app operates at sarvabazaar.com with private code, while this repo is a complete, secure public demo.",
		liveDemo: "https://www.sarvabazaar.com/",
		sourceCode: "https://github.com/Shahir-47/sarva-template", // Replace with your public template repo
		devpost: null, // No Devpost link, leave as null
		repo: "sarva-template",
	},
	{
		image: Peer, // Add your Peer-to-Playlist screenshot here, or leave blank for now
		title: "Peer-to-Playlist",
		description:
			"Peer-to-Playlist is a social web app that matches users based on Spotify music preferences, featuring real-time chat, multimedia messaging, and music sharing. Built with React, Express, MongoDB, and AWS S3. I designed the architecture, led backend development, and built the music-based matching and real-time messaging systems. Includes secure authentication, file sharing, and Spotify data integration.",
		liveDemo: "https://peer-to-playlist.onrender.com/",
		sourceCode: "https://github.com/Shahir-47/Peer-to-Playlist",
		repo: "Peer-to-Playlist",
	},
	{
		image: Albatross,
		title: "Albatross",
		description:
			"Albatross is a hackathon project leveraging AI and real-time crime data to enhance urban safety by calculating and displaying the safest navigation routes. Built with Vue.js, it features an interactive map highlighting high-risk zones and optimized routes, currently operating in demo mode.",
		liveDemo: "https://albatross-hack.netlify.app/",
		sourceCode: "https://github.com/orgs/HackHarvard2024-Team/repositories",
		devpost: "https://devpost.com/software/albatross",
		repo: "Albatross",
	},
	{
		image: SweetFriend,
		title: "SweetFriend",
		description:
			"SweetFriend is a diabetes management web app integrating Dexcom glucose monitors for real-time glucose tracking, AI-powered meal recognition, and personalized health insights. It simplifies carb counting, meal logging, and glucose trend analysis to empower users in managing diabetes effectively.",
		liveDemo: "https://sweet-friend.vercel.app/app/dashboard",
		sourceCode: "https://github.com/dmicz/SweetFriend",
		devpost: "https://devpost.com/software/sweetfriend",
		repo: "SweetFriend",
	},
	{
		image: bittorrent,
		title: "BitTorrent Client JS",
		description:
			"A lightweight BitTorrent client implemented in JavaScript that seamlessly handles both .torrent files and magnet links. It features a modular architecture for peer discovery, piece verification, and metadata exchange. The client demonstrates advanced networking concepts through its implementation of the BitTorrent protocol, supporting concurrent downloads, SHA-1 integrity checking, and HTTP tracker communication.",
		liveDemo: null,
		sourceCode: "https://github.com/Shahir-47/bittorrent-client-js",
		repo: "bittorrent-client-js",
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
		title: "Recover",
		description:
			"Recover is a forensic recovery program in C that retrieves JPEG files from a memory card image by identifying unique file signatures. Designed for data recovery, the program processes memory blocks and reconstructs images into standalone files.",
		sourceCode: "https://github.com/Shahir-47/Recover",
		repo: "Recover",
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
		title: "DNA Profiling",
		description:
			"A forensic DNA profiling program that matches a DNA sequence to an individual based on Short Tandem Repeats (STRs). The tool reads STR counts from a CSV database, analyzes the longest runs of STR repeats in a DNA sequence, and identifies a match or declares 'No match.'",
		sourceCode: "https://github.com/Shahir-47/DNA",
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
];

const ProjectItem = ({
	image,
	title,
	description,
	liveDemo,
	sourceCode,
	devpost,
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
		<Box
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				gap: "0.75rem",
				mt: 2,
			}}
		>
			{liveDemo && (
				<Button
					variant="contained"
					href={liveDemo}
					target="_blank"
					rel="noopener noreferrer"
					fullWidth
					startIcon={<Launch />}
					sx={{
						backgroundColor: "#4fd1c5",
						color: "#222",
						fontWeight: "bold",
						"&:hover": {
							backgroundColor: "#a569bd",
							boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
							color: "#fff",
						},
						fontSize: "1rem",
						py: 1.1,
					}}
				>
					Visit Website
				</Button>
			)}
			<Button
				variant="outlined"
				href={sourceCode}
				target="_blank"
				rel="noopener noreferrer"
				fullWidth
				startIcon={<FaGithub />}
				sx={{
					borderColor: "#4fd1c5",
					color: "#4fd1c5",
					fontWeight: "bold",
					"&:hover": {
						borderColor: "#a569bd",
						color: "#a569bd",
						boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
					},
					fontSize: "1rem",
					py: 1.1,
				}}
			>
				Source Code
			</Button>
			{devpost && (
				<Button
					variant="contained"
					href={devpost}
					target="_blank"
					rel="noopener noreferrer"
					fullWidth
					startIcon={<SiDevpost />}
					sx={{
						backgroundColor: "#0066ff",
						color: "#fff",
						fontWeight: "bold",
						"&:hover": {
							backgroundColor: "#0044bb",
							color: "#fff",
							boxShadow: "0 4px 15px rgba(0, 102, 255, 0.25)",
						},
						fontSize: "1rem",
						py: 1.1,
					}}
				>
					Devpost
				</Button>
			)}
		</Box>
	</Box>
);

const Projects = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [showAllProjects, setShowAllProjects] = useState(false);

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
		default: 4,
		2500: 3,
		1100: 2,
		700: 1,
	};

	return (
		<Box
			className="projects"
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
				{filteredProjects.slice(0, 8).map((project, index) => (
					<ProjectItem key={index} {...project} highlight={highlightText} />
				))}
			</Masonry>

			{filteredProjects.length > 8 && (
				<Box sx={{ textAlign: "center", margin: "2rem 0" }}>
					<Button
						variant="contained"
						onClick={() => setShowAllProjects(!showAllProjects)}
						endIcon={
							showAllProjects ? <KeyboardArrowUp /> : <KeyboardArrowDown />
						}
						sx={{
							width: "100%",
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
						{showAllProjects ? "Show Less" : "Show More"}
					</Button>
				</Box>
			)}

			{showAllProjects && (
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{filteredProjects.slice(8).map((project, index) => (
						<ProjectItem
							key={index + 8}
							{...project}
							highlight={highlightText}
						/>
					))}
				</Masonry>
			)}

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
	devpost: PropTypes.string,
	highlight: PropTypes.func.isRequired,
};

export default Projects;

import PropTypes from "prop-types";
import Etch from "../assets/etch.png";
import FD2 from "../assets/fd2.png";
import SweetFriend from "../assets/sweetFriend.jpg";
import Albatross from "../assets/albatross.png";
import SpaceAccuracy from "../assets/space.png";
import SocialIcons from "./SocialIcons";
import Peer from "../assets/peer.png";
import Sarva from "../assets/sarva.png";
import Open from "../assets/open.png";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import { SiDevpost } from "react-icons/si";
import { Launch } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";

const projectsData = [
	{
		image: Sarva,
		title: "Sarva (Public Template)",
		description:
			"Sarva is a full-stack grocery delivery platform for South Asian markets. This open template demonstrates a real-world, role-based marketplace built with Next.js, Firebase, Stripe, and Google Maps API. Features include customer ordering, vendor management, driver delivery flows, real-time order tracking, and split payments. The live production app operates at sarvabazaar.com with private code, while this repo is a complete, secure public demo.",
		liveDemo: "https://www.sarvabazaar.com/",
		sourceCode: "https://github.com/Shahir-47/sarva-template",
		devpost: null,
		repo: "sarva-template",
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
		sourceCode: "https://github.com/Shahir-47/open-source-contributions",
		devpost: null,
		repo: "Open-Source-Contributions",
	},
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
		image: Peer,
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
		image: "",
		title: "PandOS",
		description:
			"PandOS is a complete custom operating system kernel implemented in C for the uMPS3 RISC emulator. Features include time-sharing, multiprogramming, TLB-based virtual memory management, system calls, and interrupt handling for concurrent process execution and memory safety. This project demonstrates deep understanding of operating system concepts and low-level systems programming.",
		liveDemo: null,
		sourceCode:
			"https://gitfront.io/r/Shahir-47/abfsq8dhTm4Z/Custom-OS-Kernel/",
		devpost: null,
		repo: "PandOS",
	},
	{
		image: "",
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
		image: Etch,
		title: "Etch a Sketch",
		description:
			"Experience the classic Etch-a-Sketch fun online! Draw and create masterpieces with this simple web application. Built using HTML, CSS, and JavaScript.",
		liveDemo: "https://shahir-47.github.io/Etch-a-Sketch/",
		sourceCode: "https://github.com/Shahir-47/Etch-a-Sketch/",
		repo: "Etch-a-Sketch",
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
		title: "Recover",
		description:
			"Recover is a forensic recovery program in C that retrieves JPEG files from a memory card image by identifying unique file signatures. Designed for data recovery, the program processes memory blocks and reconstructs images into standalone files.",
		sourceCode: "https://github.com/Shahir-47/Recover",
		repo: "Recover",
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
		title: "DNA Profiling",
		description:
			"A forensic DNA profiling program that matches a DNA sequence to an individual based on Short Tandem Repeats (STRs). The tool reads STR counts from a CSV database, analyzes the longest runs of STR repeats in a DNA sequence, and identifies a match or declares 'No match.'",
		sourceCode: "https://github.com/Shahir-47/DNA",
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
			padding: {
				xs: "1rem",
				sm: "1.25rem",
				md: "1.5rem",
				lg: "2rem",
				xl: "2.5rem",
			},
			borderRadius: { xs: "8px", sm: "10px", md: "12px" },
			boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
			marginBottom: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
			transition: "transform 0.3s ease, box-shadow 0.3s ease",
			"&:hover": {
				transform: "translateY(-3px)",
				boxShadow: "0 6px 25px rgba(79, 209, 197, 0.2)",
			},
			display: "flex",
			flexDirection: { xs: "column", md: "row" },
			gap: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2rem" },
			alignItems: "flex-start",
			// Extra large screens (2560px+)
			"@media (min-width: 2560px)": {
				padding: "3.5rem",
				borderRadius: "16px",
				marginBottom: "2rem",
				gap: "2.5rem",
			},
		}}
	>
		{/* Image Section */}
		{image && (
			<Box
				sx={{
					flexShrink: 0,
					width: {
						xs: "100%",
						sm: "100%",
						md: "200px",
						lg: "250px",
						xl: "300px",
					},
					height: {
						xs: "150px",
						sm: "180px",
						md: "140px",
						lg: "160px",
						xl: "180px",
					},
					// Extra large screens (2560px+)
					"@media (min-width: 2560px)": {
						width: "450px",
						height: "280px",
					},
				}}
			>
				<img
					src={image}
					alt={title}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						borderRadius: "8px",
						border: "2px solid #4fd1c5",
					}}
				/>
			</Box>
		)}

		{/* Content Section */}
		<Box sx={{ flex: 1 }}>
			<Typography
				variant="h4"
				sx={{
					color: "#4fd1c5",
					fontWeight: "bold",
					marginBottom: { xs: "0.5rem", sm: "0.625rem", md: "0.75rem" },
					fontSize: {
						xs: "1.1rem",
						sm: "1.2rem",
						md: "1.3rem",
						lg: "1.4rem",
						xl: "1.5rem",
					},
					lineHeight: 1.2,
					// Extra large screens (2560px+)
					"@media (min-width: 2560px)": {
						fontSize: "2.4rem",
						marginBottom: "1rem",
					},
				}}
				dangerouslySetInnerHTML={{ __html: highlight(title) }}
			/>

			<Typography
				sx={{
					color: "#e0e0e0",
					marginBottom: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
					fontSize: {
						xs: "0.85rem",
						sm: "0.9rem",
						md: "0.95rem",
						lg: "1rem",
						xl: "1.1rem",
					},
					lineHeight: { xs: 1.4, sm: 1.45, md: 1.5 },
					// Extra large screens (2560px+)
					"@media (min-width: 2560px)": {
						fontSize: "1.6rem",
						lineHeight: 1.6,
						marginBottom: "2rem",
					},
				}}
				dangerouslySetInnerHTML={{ __html: highlight(description) }}
			/>

			{/* Action Buttons */}
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					gap: { xs: "0.5rem", sm: "0.625rem", md: "0.75rem" },
					flexWrap: "wrap",
					// Extra large screens (2560px+)
					"@media (min-width: 2560px)": {
						gap: "1rem",
					},
				}}
			>
				{liveDemo && (
					<Button
						variant="contained"
						href={liveDemo}
						target="_blank"
						rel="noopener noreferrer"
						startIcon={<Launch />}
						sx={{
							backgroundColor: "#4fd1c5",
							color: "#222",
							fontWeight: "bold",
							px: { xs: 1.5, sm: 2 },
							py: { xs: 0.5, sm: 0.625, md: 0.75 },
							"&:hover": {
								backgroundColor: "#a569bd",
								boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
								color: "#fff",
							},
							fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
							minWidth: { xs: "100px", sm: "110px", md: "120px" },
							// Extra large screens (2560px+)
							"@media (min-width: 2560px)": {
								fontSize: "1.2rem",
								px: 3,
								py: 1.2,
								minWidth: "180px",
								"& .MuiSvgIcon-root": {
									fontSize: "1.4rem",
								},
							},
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
					startIcon={<FaGithub />}
					sx={{
						borderColor: "#4fd1c5",
						color: "#4fd1c5",
						fontWeight: "bold",
						px: { xs: 1.5, sm: 2 },
						py: { xs: 0.5, sm: 0.625, md: 0.75 },
						"&:hover": {
							borderColor: "#a569bd",
							color: "#a569bd",
							boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
						},
						fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
						minWidth: { xs: "100px", sm: "110px", md: "120px" },
						// Extra large screens (2560px+)
						"@media (min-width: 2560px)": {
							fontSize: "1.2rem",
							px: 3,
							py: 1.2,
							minWidth: "180px",
							borderWidth: "2px",
							"&:hover": {
								borderWidth: "2px",
								borderColor: "#a569bd",
								color: "#a569bd",
								boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
							},
						},
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
						startIcon={<SiDevpost />}
						sx={{
							backgroundColor: "#0066ff",
							color: "#fff",
							fontWeight: "bold",
							px: { xs: 1.5, sm: 2 },
							py: { xs: 0.5, sm: 0.625, md: 0.75 },
							"&:hover": {
								backgroundColor: "#0044bb",
								color: "#fff",
								boxShadow: "0 4px 15px rgba(0, 102, 255, 0.25)",
							},
							fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
							minWidth: { xs: "100px", sm: "110px", md: "120px" },
							// Extra large screens (2560px+)
							"@media (min-width: 2560px)": {
								fontSize: "1.2rem",
								px: 3,
								py: 1.2,
								minWidth: "180px",
								"& .MuiSvgIcon-root": {
									fontSize: "1.4rem",
								},
							},
						}}
					>
						Devpost
					</Button>
				)}
			</Box>
		</Box>
	</Box>
);

const Projects = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [showAllProjects, setShowAllProjects] = useState(false);

	const highlightText = (text) => {
		if (!searchTerm) return text;
		const regex = new RegExp(`(${searchTerm})`, "gi");
		return text.replace(
			regex,
			"<mark style='background-color: #4fd1c5; color: #222; padding: 2px 4px; border-radius: 3px;'>$1</mark>"
		);
	};

	const filteredProjects = projectsData.filter(
		(project) =>
			project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.description.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const projectsToShow = showAllProjects
		? filteredProjects
		: filteredProjects.slice(0, 8);

	return (
		<Box
			className="projects"
			sx={{
				color: "#e0e0e0",
				maxWidth: {
					xs: "100%",
					sm: "900px",
					md: "1000px",
					lg: "1200px",
					xl: "1400px",
				},
				margin: "0 auto",
				padding: { xs: "1rem", sm: "1.5rem", md: "2rem", xl: "2.5rem" },
				flex: "1",
				// Extra large screens (2560px+)
				"@media (min-width: 2560px)": {
					maxWidth: "1800px",
					padding: "4rem",
				},
			}}
		>
			<Typography
				variant="h2"
				sx={{
					textAlign: "center",
					color: "#4fd1c5",
					fontWeight: "bold",
					marginBottom: {
						xs: "1.5rem",
						sm: "1.75rem",
						md: "2rem",
						xl: "2.5rem",
					},
					fontSize: {
						xs: "1.5rem",
						sm: "1.7rem",
						md: "2rem",
						lg: "2.2rem",
						xl: "2.4rem",
					},
					// Extra large screens (2560px+)
					"@media (min-width: 2560px)": {
						fontSize: "3.5rem",
						marginBottom: "3rem",
					},
				}}
			>
				📂 Projects
			</Typography>

			{/* Search Bar */}
			<Box
				sx={{
					marginBottom: {
						xs: "1.5rem",
						sm: "1.75rem",
						md: "2rem",
						xl: "2.5rem",
					},
					// Extra large screens (2560px+)
					"@media (min-width: 2560px)": {
						marginBottom: "3rem",
					},
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
						borderRadius: "8px",
						"& .MuiInputLabel-root": {
							color: "#4fd1c5",
							transition: "color 0.3s ease",
							fontSize: { xs: "0.9rem", sm: "1rem", xl: "1.1rem" },
							// Extra large screens (2560px+)
							"@media (min-width: 2560px)": {
								fontSize: "1.4rem",
							},
						},
						"& .MuiInputLabel-root.Mui-focused": {
							color: "#a569bd",
						},
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: "#4fd1c5",
								transition: "border-color 0.3s ease",
								// Extra large screens (2560px+)
								"@media (min-width: 2560px)": {
									borderWidth: "2px",
								},
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
							fontSize: { xs: "0.9rem", sm: "1rem", xl: "1.1rem" },

							// Extra large screens (2560px+)
							"@media (min-width: 2560px)": {
								fontSize: "1.4rem",
							},
						},
					}}
				/>
			</Box>

			{/* Projects List */}
			<Box>
				{projectsToShow.map((project, index) => (
					<ProjectItem key={index} {...project} highlight={highlightText} />
				))}
			</Box>

			{/* Show More/Less Button */}
			{filteredProjects.length > 8 && (
				<Box
					sx={{
						textAlign: "center",
						margin: { xs: "1.5rem 0", sm: "2rem 0", xl: "2.5rem 0" },
						// Extra large screens (2560px+)
						"@media (min-width: 2560px)": {
							margin: "3rem 0",
						},
					}}
				>
					<Button
						variant="contained"
						onClick={() => setShowAllProjects(!showAllProjects)}
						endIcon={
							showAllProjects ? <KeyboardArrowUp /> : <KeyboardArrowDown />
						}
						sx={{
							backgroundColor: "#4fd1c5",
							color: "#222",
							fontWeight: "bold",
							px: { xs: 2, sm: 2.5, md: 3, xl: 3.5 },
							py: { xs: 0.75, sm: 0.875, md: 1, xl: 1.125 },
							fontSize: {
								xs: "0.85rem",
								sm: "0.9rem",
								md: "0.95rem",
								xl: "1rem",
							},
							"&:hover": {
								backgroundColor: "#a569bd",
								boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
								color: "#fff",
							},
							// Extra large screens (2560px+)
							"@media (min-width: 2560px)": {
								fontSize: "1.3rem",
								px: 4,
								py: 1.5,
								"& .MuiSvgIcon-root": {
									fontSize: "1.6rem",
								},
							},
						}}
					>
						{showAllProjects
							? `Show Less Projects`
							: `Show ${filteredProjects.length - 8} More Projects`}
					</Button>
				</Box>
			)}

			{/* Social Section */}
			<Box
				sx={{
					textAlign: "center",
					color: "#e0e0e0",
					marginTop: { xs: "2rem", sm: "2.5rem", md: "3rem", xl: "3.5rem" },
					// Extra large screens (2560px+)
					"@media (min-width: 2560px)": {
						marginTop: "4rem",
					},
				}}
			>
				<Typography
					variant="h4"
					sx={{
						fontWeight: "bold",
						marginBottom: {
							xs: "1rem",
							sm: "1.25rem",
							md: "1.5rem",
							xl: "1.75rem",
						},
						fontSize: {
							xs: "1.1rem",
							sm: "1.2rem",
							md: "1.3rem",
							lg: "1.4rem",
							xl: "1.5rem",
						},
						// Extra large screens (2560px+)
						"@media (min-width: 2560px)": {
							fontSize: "2rem",
							marginBottom: "2rem",
						},
					}}
				>
					Feel free to <span style={{ color: "#4fd1c5" }}>connect</span> with me
				</Typography>
				<SocialIcons />
			</Box>
		</Box>
	);
};

ProjectItem.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	liveDemo: PropTypes.string,
	sourceCode: PropTypes.string.isRequired,
	devpost: PropTypes.string,
	highlight: PropTypes.func.isRequired,
};

export default Projects;

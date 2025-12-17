"use client";

import PropTypes from "prop-types";
import Image from "next/image";
import Etch from "@/assets/etch.png";
import FD2 from "@/assets/fd2.png";
import SweetFriend from "@/assets/sweetFriend.jpg";
import Albatross from "@/assets/albatross.png";
import SpaceAccuracy from "@/assets/space.png";
import SocialIcons from "./SocialIcons";
import Peer from "@/assets/peer.png";
import Sarva from "@/assets/sarva.png";
import Open from "@/assets/open.png";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Typography, Button, TextField, Chip } from "@mui/material";
import { useState } from "react";
import { SiDevpost } from "react-icons/si";
import { Launch } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";

const CATEGORIES = {
	ALL: "All",
	PROFESSIONAL: "Professional",
	OPENSOURCE: "Open Source",
	HACKATHON: "Hackathon",
	PERSONAL: "Personal",
};

const projectsData = [
	// === PROFESSIONAL ===
	{
		image: Sarva,
		title: "Sarva",
		description:
			"Full-stack vendor management platform and grocery marketplace for South Asian supply chains. Designed 4 role-specific AI assistants with RAG over Firestore and Algolia, cutting task time by 50%. Built a vendor AI toolkit to auto-generate product descriptions, pricing, and nutrition (80% faster setup). Implemented batch inventory management with Whisper voice input supporting 90+ languages, Stripe Connect split payouts with Identity verification (85% fraud reduction), and real-time order tracking via Google Maps. Built 20+ pages in Next.js with Firebase Auth, Firestore, Storage, and Cloud Functions deployed to Vercel.",
		liveDemo: "https://www.sarvabazaar.com/",
		sourceCode: null,
		devpost: null,
		repo: "sarva-template",
		category: CATEGORIES.PROFESSIONAL,
	},
	{
		image: FD2,
		title: "FarmData2",
		description:
			"Open-source farm management platform at Dickinson College. Partnered with 12+ farmers to build 15+ real-time crop management features supporting daily operations and USDA certification requirements. Developed a full-stack crop tracking system using Node.js, PostgreSQL, and Vue.js with Cypress end-to-end tests at 80%+ coverage. Integrated 18+ farmOS API endpoints to automate logging workflows and refactored 22 Vue components, reducing form rendering latency by 60% and saving farm staff 12+ hours per week.",
		liveDemo: null,
		sourceCode: "https://github.com/FarmData2/FarmData2",
		repo: "FarmData2",
		category: CATEGORIES.PROFESSIONAL,
	},

	// === OPEN SOURCE ===
	{
		image: Open,
		title: "Open Source Contributions",
		description: `
			Top contributor to <b>Mermaid.js</b> (#25 of 600+ contributors) and <b>FarmData2</b> (#2 overall, 25+ PRs, 14K+ lines).<br/><br/>
			<b>Mermaid.js:</b> Delivered 3 merged PRs implementing text wrapping algorithms, auto-scaling data labels, and customizable styling for a library serving 1.2M+ weekly downloads. Contributed to a 100K+ line codebase, shipping features now powering diagrams across GitHub, VS Code, Notion, and Microsoft Word.<br/><br/>
			<ul style="margin: 0 0 0 1.5em; padding: 0;">
				<li>
					<a href="https://github.com/mermaid-js/mermaid/pulls?q=is%3Apr+involves%3AShahir-47+is%3Aclosed" target="_blank" style="color: #4fd1c5; text-decoration: underline;">
						Mermaid.js PRs
					</a>
				</li>
				<li>
					<a href="https://github.com/FarmData2/FarmData2/pulls?q=is%3Apr+involves%3AShahir-47+is%3Aclosed" target="_blank" style="color: #4fd1c5; text-decoration: underline;">
						FarmData2 PRs
					</a>
				</li>
				<li>
					<a href="https://github.com/Shahir-47/open-source-contributions" target="_blank" style="color: #4fd1c5; text-decoration: underline;">
						Full OSS Portfolio & Stats
					</a>
				</li>
			</ul>
		`,
		sourceCode: "https://github.com/Shahir-47/open-source-contributions",
		devpost: null,
		repo: "Open-Source-Contributions",
		category: CATEGORIES.OPENSOURCE,
	},

	// === PERSONAL ===
	{
		image: Peer,
		title: "Peer-to-Playlist",
		description:
			"Full-stack social networking app that matches users through a weighted scoring algorithm analyzing their Spotify listening history, playlists, and top artists. Built with React, Express.js, and MongoDB. Features a real-time messaging system with Socket.IO handling 500+ concurrent connections, file sharing via AWS S3 and Cloudinary CDN, embedded Spotify playback, and automated link previews. Includes secure authentication and complete Spotify API integration.",
		liveDemo: "https://peer-to-playlist.onrender.com/",
		sourceCode: "https://github.com/Shahir-47/Peer-to-Playlist",
		repo: "Peer-to-Playlist",
		category: CATEGORIES.PERSONAL,
	},

	// === HACKATHON ===
	{
		image: Albatross,
		title: "Albatross",
		description:
			"AI-powered navigation app that reroutes users based on their selected safety level. Built with Vue.js, the app sends routes to Cloudflare Workers to check against high-crime zones. Geocoded 50K+ crime addresses using Google API, mapped them to zones using public boundary data, ranked zones by crime density, and stored them in AWS Databricks so Cloudflare Workers can check route intersections and reroute in real-time. Built at HackHarvard 2024.",
		liveDemo: "https://albatross-hack.netlify.app/",
		sourceCode: "https://github.com/orgs/HackHarvard2024-Team/repositories",
		devpost: "https://devpost.com/software/albatross",
		repo: "Albatross",
		category: CATEGORIES.HACKATHON,
	},
	{
		image: SweetFriend,
		title: "SweetFriend",
		description:
			"Diabetes management web app integrating Dexcom glucose monitors for real-time glucose tracking, AI-powered meal recognition via Tune Studio's vision model, and personalized health insights powered by Cerebras. Built with React and Flask, featuring MongoDB for data storage and Twilio for critical glucose alerts. Simplifies carb counting, meal logging, and glucose trend analysis. Built at PennApps 2024.",
		liveDemo: "https://sweet-friend.vercel.app/app/dashboard",
		sourceCode: "https://github.com/dmicz/SweetFriend",
		devpost: "https://devpost.com/software/sweetfriend",
		repo: "SweetFriend",
		category: CATEGORIES.HACKATHON,
	},

	// === MORE PERSONAL PROJECTS ===
	{
		image: "",
		title: "PandOS",
		description:
			"Complete custom operating system kernel implemented in C for the uMPS3 RISC emulator. Features include time-sharing, multiprogramming, TLB-based virtual memory management, system calls, and interrupt handling for concurrent process execution and memory safety. Demonstrates deep understanding of operating system concepts and low-level systems programming.",
		liveDemo: null,
		sourceCode:
			"https://gitfront.io/r/Shahir-47/abfsq8dhTm4Z/Custom-OS-Kernel/",
		devpost: null,
		repo: "PandOS",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: "",
		title: "BitTorrent Client JS",
		description:
			"Lightweight BitTorrent client implemented in JavaScript that handles both .torrent files and magnet links. Features modular architecture for peer discovery, piece verification, and metadata exchange. Implements the full BitTorrent protocol with concurrent downloads, SHA-1 integrity checking, and HTTP tracker communication.",
		liveDemo: null,
		sourceCode: "https://github.com/Shahir-47/bittorrent-client-js",
		repo: "bittorrent-client-js",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: SpaceAccuracy,
		title: "SpaceAccuracy",
		description:
			"2D shooter game where players aim to hit an alien and score points while the challenge increases with each hit. Developed in Lua with robust OOP principles, featuring game logic, animations, and shooting mechanics.",
		sourceCode: "https://github.com/Shahir-47/SpaceAccuracy",
		repo: "SpaceAccuracy",
		category: CATEGORIES.PERSONAL,
	},
	// {
	// 	image: Etch,
	// 	title: "Etch a Sketch",
	// 	description:
	// 		"Classic Etch-a-Sketch experience online. Draw and create with this interactive web application built using HTML, CSS, and JavaScript.",
	// 	liveDemo: "https://shahir-47.github.io/Etch-a-Sketch/",
	// 	sourceCode: "https://github.com/Shahir-47/Etch-a-Sketch/",
	// 	repo: "Etch-a-Sketch",
	// 	category: CATEGORIES.PERSONAL,
	// },
	{
		image: "",
		title: "Speller",
		description:
			"High-performance spell-checking program built with C, leveraging hash tables for efficient word lookups. Identifies misspelled words, supports customizable dictionaries, and provides detailed performance metrics.",
		sourceCode: "https://github.com/Shahir-47/speller",
		repo: "speller",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: "",
		title: "Recover",
		description:
			"Forensic recovery program in C that retrieves JPEG files from a memory card image by identifying unique file signatures. Processes memory blocks and reconstructs images into standalone files.",
		sourceCode: "https://github.com/Shahir-47/Recover",
		repo: "Recover",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: "",
		title: "Filter",
		description:
			"Image processing program in C that applies grayscale, sepia, reflection, and blur filters to BMP images. Demonstrates low-level pixel manipulation and memory-efficient algorithms.",
		sourceCode: "https://github.com/Shahir-47/filter",
		repo: "filter",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: "",
		title: "DNA Profiling",
		description:
			"Forensic DNA profiling program that matches a DNA sequence to an individual based on Short Tandem Repeats (STRs). Reads STR counts from a CSV database and analyzes the longest runs of STR repeats.",
		sourceCode: "https://github.com/Shahir-47/DNA",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: "",
		title: "Runoff Voting System",
		description:
			"Ranked-choice voting program that simulates instant-runoff elections. Efficiently handles voter preferences, redistributing votes in multiple rounds until a candidate achieves a majority.",
		sourceCode: "https://github.com/Shahir-47/Runoff",
		repo: "Runoff",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: "",
		title: "Credit Card Validator",
		description:
			"C program that validates credit card numbers using Luhn's Algorithm and identifies card types (Visa, MasterCard, or AMEX). Demonstrates data validation and structured logic for edge cases.",
		sourceCode: "https://github.com/Shahir-47/Credit",
		repo: "Credit",
		category: CATEGORIES.PERSONAL,
	},
];

const ProjectItem = ({
	image,
	title,
	description,
	liveDemo,
	sourceCode,
	devpost,
	category,
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
					"@media (min-width: 2560px)": {
						width: "450px",
						height: "280px",
					},
				}}
			>
				<img
					src={image.src}
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
			{/* Title and Category Badge */}
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					alignItems: { xs: "flex-start", sm: "center" },
					gap: { xs: "0.5rem", sm: "1rem" },
					marginBottom: { xs: "0.5rem", sm: "0.625rem", md: "0.75rem" },
				}}
			>
				<Typography
					variant="h4"
					sx={{
						color: "#4fd1c5",
						fontWeight: "bold",
						fontSize: {
							xs: "1.1rem",
							sm: "1.2rem",
							md: "1.3rem",
							lg: "1.4rem",
							xl: "1.5rem",
						},
						lineHeight: 1.2,
						"@media (min-width: 2560px)": {
							fontSize: "2.4rem",
						},
					}}
					dangerouslySetInnerHTML={{ __html: highlight(title) }}
				/>
				<Chip
					label={category}
					size="small"
					sx={{
						backgroundColor:
							category === CATEGORIES.PROFESSIONAL
								? "#7952B3"
								: category === CATEGORIES.OPENSOURCE
								? "#28a745"
								: category === CATEGORIES.HACKATHON
								? "#fd7e14"
								: "#6c757d",
						color: "#fff",
						fontWeight: 600,
						fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
						height: { xs: "22px", sm: "24px" },
						"@media (min-width: 2560px)": {
							fontSize: "1rem",
							height: "32px",
						},
					}}
				/>
			</Box>

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

				{sourceCode && (
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
				)}

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
	const [activeFilter, setActiveFilter] = useState(CATEGORIES.ALL);
	const [showAllProjects, setShowAllProjects] = useState(false);

	const highlightText = (text) => {
		if (!searchTerm) return text;
		const regex = new RegExp(`(${searchTerm})`, "gi");
		return text.replace(
			regex,
			"<mark style='background-color: #4fd1c5; color: #222; padding: 2px 4px; border-radius: 3px;'>$1</mark>"
		);
	};

	const filteredProjects = projectsData.filter((project) => {
		const matchesSearch =
			project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesFilter =
			activeFilter === CATEGORIES.ALL || project.category === activeFilter;
		return matchesSearch && matchesFilter;
	});

	const projectsToShow = showAllProjects
		? filteredProjects
		: filteredProjects.slice(0, 8);

	// Get counts for each category
	const getCategoryCount = (category) => {
		if (category === CATEGORIES.ALL) return projectsData.length;
		return projectsData.filter((p) => p.category === category).length;
	};

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
					"@media (min-width: 2560px)": {
						fontSize: "3.5rem",
						marginBottom: "3rem",
					},
				}}
			>
				📂 Projects
			</Typography>

			{/* Filter Buttons */}
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: { xs: "0.5rem", sm: "0.75rem", md: "1rem" },
					marginBottom: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
					"@media (min-width: 2560px)": {
						gap: "1.5rem",
						marginBottom: "2.5rem",
					},
				}}
			>
				{Object.values(CATEGORIES).map((category) => (
					<Button
						key={category}
						variant={activeFilter === category ? "contained" : "outlined"}
						onClick={() => {
							setActiveFilter(category);
							setShowAllProjects(false);
						}}
						sx={{
							backgroundColor:
								activeFilter === category
									? category === CATEGORIES.PROFESSIONAL
										? "#7952B3"
										: category === CATEGORIES.OPENSOURCE
										? "#28a745"
										: category === CATEGORIES.HACKATHON
										? "#fd7e14"
										: category === CATEGORIES.PERSONAL
										? "#6c757d"
										: "#4fd1c5"
									: "transparent",
							borderColor:
								category === CATEGORIES.PROFESSIONAL
									? "#7952B3"
									: category === CATEGORIES.OPENSOURCE
									? "#28a745"
									: category === CATEGORIES.HACKATHON
									? "#fd7e14"
									: category === CATEGORIES.PERSONAL
									? "#6c757d"
									: "#4fd1c5",
							color:
								activeFilter === category
									? "#fff"
									: category === CATEGORIES.PROFESSIONAL
									? "#7952B3"
									: category === CATEGORIES.OPENSOURCE
									? "#28a745"
									: category === CATEGORIES.HACKATHON
									? "#fd7e14"
									: category === CATEGORIES.PERSONAL
									? "#6c757d"
									: "#4fd1c5",
							fontWeight: 600,
							fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
							px: { xs: 1.5, sm: 2, md: 2.5 },
							py: { xs: 0.5, sm: 0.75 },
							borderRadius: "20px",
							textTransform: "none",
							transition: "all 0.3s ease",
							"&:hover": {
								backgroundColor:
									category === CATEGORIES.PROFESSIONAL
										? "#7952B3"
										: category === CATEGORIES.OPENSOURCE
										? "#28a745"
										: category === CATEGORIES.HACKATHON
										? "#fd7e14"
										: category === CATEGORIES.PERSONAL
										? "#6c757d"
										: "#4fd1c5",
								color: "#fff",
								borderColor:
									category === CATEGORIES.PROFESSIONAL
										? "#7952B3"
										: category === CATEGORIES.OPENSOURCE
										? "#28a745"
										: category === CATEGORIES.HACKATHON
										? "#fd7e14"
										: category === CATEGORIES.PERSONAL
										? "#6c757d"
										: "#4fd1c5",
							},
							"@media (min-width: 2560px)": {
								fontSize: "1.2rem",
								px: 3.5,
								py: 1,
								borderRadius: "28px",
							},
						}}
					>
						{category} ({getCategoryCount(category)})
					</Button>
				))}
			</Box>

			{/* Search Bar */}
			<Box
				sx={{
					marginBottom: {
						xs: "1.5rem",
						sm: "1.75rem",
						md: "2rem",
						xl: "2.5rem",
					},
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
							"@media (min-width: 2560px)": {
								fontSize: "1.4rem",
							},
						},
					}}
				/>
			</Box>

			{/* Results Count */}
			{(searchTerm || activeFilter !== CATEGORIES.ALL) && (
				<Typography
					sx={{
						color: "#888",
						fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
						marginBottom: { xs: "1rem", sm: "1.25rem" },
						textAlign: "center",
						"@media (min-width: 2560px)": {
							fontSize: "1.3rem",
							marginBottom: "1.5rem",
						},
					}}
				>
					Showing {filteredProjects.length} project
					{filteredProjects.length !== 1 ? "s" : ""}
					{activeFilter !== CATEGORIES.ALL && ` in ${activeFilter}`}
					{searchTerm && ` matching "${searchTerm}"`}
				</Typography>
			)}

			{/* Projects List */}
			<Box>
				{projectsToShow.length > 0 ? (
					projectsToShow.map((project, index) => (
						<ProjectItem key={index} {...project} highlight={highlightText} />
					))
				) : (
					<Box
						sx={{
							textAlign: "center",
							padding: { xs: "2rem", md: "3rem" },
							color: "#888",
						}}
					>
						<Typography
							sx={{
								fontSize: { xs: "1rem", md: "1.2rem" },
								marginBottom: "1rem",
							}}
						>
							No projects found matching your criteria.
						</Typography>
						<Button
							variant="outlined"
							onClick={() => {
								setSearchTerm("");
								setActiveFilter(CATEGORIES.ALL);
							}}
							sx={{
								borderColor: "#4fd1c5",
								color: "#4fd1c5",
								"&:hover": {
									borderColor: "#a569bd",
									color: "#a569bd",
								},
							}}
						>
							Clear Filters
						</Button>
					</Box>
				)}
			</Box>

			{/* Show More/Less Button */}
			{filteredProjects.length > 8 && (
				<Box
					sx={{
						textAlign: "center",
						margin: { xs: "1.5rem 0", sm: "2rem 0", xl: "2.5rem 0" },
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
	category: PropTypes.string.isRequired,
	highlight: PropTypes.func.isRequired,
};

export default Projects;

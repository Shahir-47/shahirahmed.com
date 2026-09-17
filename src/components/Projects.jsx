"use client";

import PropTypes from "prop-types";
import SweetFriend from "@/assets/sweetFriend.jpg";
import Albatross from "@/assets/albatross.png";
import SpaceAccuracy from "@/assets/space.png";
import QueueUp from "@/assets/queue-up.png";
import CoSignImg from "@/assets/CoSignImg.png";
import SocialIcons from "./SocialIcons";
import GrabPicImg from "@/assets/grabpic.png";
import PaperPulseImg from "@/assets/paperpulse.png";
import HomeServerImg from "@/assets/homeserver.png";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Typography, Button, TextField, Chip } from "@mui/material";
import { useState } from "react";
import { SiDevpost } from "react-icons/si";
import { Launch } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";

const CATEGORIES = {
	ALL: "All",
	PERSONAL: "Personal",
	HACKATHON: "Hackathon",
};

const CATEGORY_COLORS = {
	[CATEGORIES.HACKATHON]: "#e5a54a",
	[CATEGORIES.PERSONAL]: "#6c9ee0",
	[CATEGORIES.ALL]: "#00adb5",
};

const categoryColor = (category) => CATEGORY_COLORS[category] || "#00adb5";

// Same hue at low alpha for chip and hover fills.
const categoryTint = (category, alpha) => {
	const hex = categoryColor(category).slice(1);
	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Ordered best to worst. The projects page shows the first 7 before "Show more".
export const projectsData = [
	{
		image: GrabPicImg,
		title: "GrabPic",
		description:
			"After weddings and events, I kept doing the same thing: searching the album for one person's face, sending them their photos, and then starting over for the next person. GrabPic replaces that with a single link. The host uploads everything to one album, and each guest takes a selfie to get only the photos they appear in.<p style=\"margin: 0.9em 0 0;\">Here's how it works behind that link:</p><ul style=\"margin: 0.35em 0 0 1.25em; padding: 0;\"><li style=\"margin-top: 0.35em;\">It runs as three services that deploy on their own: a Next.js frontend, a Spring Boot API, and a Python worker that uses DeepFace to turn every face into an embedding. New photos reach the worker through an Amazon SQS queue, so uploads never wait on face processing.</li><li style=\"margin-top: 0.35em;\">A selfie search is a nearest-neighbor lookup in pgvector over an HNSW index, which brings back matches from albums of 500+ photos in under 200 milliseconds.</li><li style=\"margin-top: 0.35em;\">Photos upload straight from the browser to S3 through presigned URLs. Redis rate limiting and Cloudflare Turnstile keep bots out, and protected photos only show up for people whose face is in them.</li></ul>",
		summary: "After a wedding or conference, share one link and every guest takes a selfie to see only the photos they're in.",
		liveDemo: "https://grab-pic.vercel.app",
		sourceCode: "https://github.com/Shahir-47/Grab-Pic",
		devpost: null,
		repo: "Grab-Pic",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: PaperPulseImg,
		title: "PaperPulse",
		description:
			"Keeping up with research means checking arXiv, PubMed, and a few other databases every day and sorting through a lot of papers that don't matter to you. PaperPulse does that search overnight, ranks everything against your interests, and has the 25 most relevant papers waiting in your feed the next morning. You can also ask it questions and get answers pulled from the papers themselves, with citations.<p style=\"margin: 0.9em 0 0;\">Here's what happens each night and when you ask a question:</p><ul style=\"margin: 0.35em 0 0 1.25em; padding: 0;\"><li style=\"margin-top: 0.35em;\">The nightly pipeline pulls from arXiv, Semantic Scholar, PubMed, and OpenAlex, extracts the text from each PDF, and embeds it for search, then Cohere reranks the results for each user.</li><li style=\"margin-top: 0.35em;\">Answers come from a three-stage hybrid retrieval pipeline over pgvector, plus context from a Neo4j knowledge graph that links papers to their authors, concepts, and citations.</li><li style=\"margin-top: 0.35em;\">For literature reviews, an AI agent explores that graph on its own, following citations and shared concepts to find themes and gaps before it writes the review.</li><li style=\"margin-top: 0.35em;\">Built with FastAPI and Next.js. The backend and its Neo4j graph run as Docker containers on my home server.</li></ul>",
		summary: "Start each morning with the new research papers that matter to your work, and ask questions about any of them.",
		liveDemo: "https://paper-pulse-nu.vercel.app",
		sourceCode: "https://github.com/Shahir-47/Paper-Pulse",
		devpost: null,
		repo: "Paper-Pulse",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: HomeServerImg,
		title: "Home Server",
		description:
			"Two of my personal projects, GrabPic and PaperPulse, used to run on AWS for about $100 a month. I moved them onto an Acer Nitro 5 gaming laptop at home, along with Queue Up and a few apps I use myself. Now everything runs for about $1 a month. The live page shows every container on the server and the laptop's CPU, memory, and GPU readings as they change.<p style=\"margin: 0.9em 0 0;\">Here's what runs on it and how traffic gets in:</p><ul style=\"margin: 0.35em 0 0 1.25em; padding: 0;\"><li style=\"margin-top: 0.35em;\">Visitors never connect to my home network directly. A cloudflared container keeps an outbound tunnel open to Cloudflare, which handles DNS and HTTPS, so my router has no open ports and my home IP address stays hidden.</li><li style=\"margin-top: 0.35em;\">When I push to GitHub, Coolify builds the app into a container and sets up its route in Traefik, which passes each request to the right app. None of the databases publish a port, so only containers on the same Docker network can reach them.</li><li style=\"margin-top: 0.35em;\">Apps for my own use, like Immich for photo backup and Paperless-ngx for scanned documents, are reachable only from my phone and laptop over Tailscale. Uptime Kuma checks every app and alerts me when one goes down.</li><li style=\"margin-top: 0.35em;\">The live page is a small Next.js app that reads the host, Docker, and Uptime Kuma only while someone has it open, and streams the readings to the browser with Server-Sent Events.</li></ul>",
		summary: "A gaming laptop at home that hosts my apps for about $1 a month instead of $100 on AWS, with a live page showing what's running on it.",
		liveDemo: "https://lab.shahirahmed.com",
		sourceCode: "https://github.com/Shahir-47/nitro-lab",
		devpost: null,
		repo: "nitro-lab",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: QueueUp,
		title: "Queue Up",
		description:
			"Queue Up is for meeting people through music. It reads your Spotify history, from top artists to saved songs, shows you the people whose taste overlaps with yours the most, and lets you start chatting once you both swipe right.<p style=\"margin: 0.9em 0 0;\">The matching and chat are built like this:</p><ul style=\"margin: 0.35em 0 0 1.25em; padding: 0;\"><li style=\"margin-top: 0.35em;\">Matches are ranked with a weighted score, where a shared favorite artist counts for more than a shared saved song, and each profile shows exactly what you have in common.</li><li style=\"margin-top: 0.35em;\">Chat runs over WebSockets with typing indicators, online status, and live match notifications, and file attachments go straight to S3 through presigned URLs.</li><li style=\"margin-top: 0.35em;\">The React frontend is compiled into the Spring Boot app, so the whole thing ships as one Docker image. It runs on my home server alongside its PostgreSQL database, and logins use JWTs stored in HTTP-only cookies.</li></ul>",
		summary: "Meet people who listen to the same music you do, matched from your Spotify history, and start chatting right away.",
		liveDemo: "https://queue-up.shahirahmed.com",
		sourceCode: "https://github.com/Shahir-47/Queue-Up",
		devpost: null,
		repo: "Queue-Up",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: CoSignImg,
		title: "CoSign",
		description:
			"It's easy to ignore a to-do list when nobody's checking. In CoSign, someone you pick has to approve your proof before a task counts as done, and if the deadline passes first, they get emailed a penalty you wrote ahead of time and would rather keep private.<p style=\"margin: 0.9em 0 0;\">I built it to be hard to cheat:</p><ul style=\"margin: 0.35em 0 0 1.25em; padding: 0;\"><li style=\"margin-top: 0.35em;\">Each task moves through a state machine from waiting on proof to approved or missed, and deadlines are enforced automatically.</li><li style=\"margin-top: 0.35em;\">Penalties are encrypted with AES and stay hidden until a deadline is missed, and each one is hashed so it can't be reused after it's exposed.</li><li style=\"margin-top: 0.35em;\">Built with Spring Boot, React, and TypeScript, with live WebSocket updates and recurring tasks, all shipped as one Docker container.</li></ul>",
		summary: "Someone you pick has to sign off on your work, and if you miss the deadline, they get the penalty you wrote.",
		liveDemo: "https://cosign-nwwl.onrender.com",
		sourceCode: "https://github.com/Shahir-47/CoSign",
		devpost: null,
		repo: "CoSign",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: "",
		title: "PandOS",
		description:
			"An operating system kernel I wrote in C for uMPS3, an emulator of a MIPS computer. It runs up to 20 processes at once and switches between them every 5 milliseconds, so each one gets a fair turn on the CPU.<p style=\"margin: 0.9em 0 0;\">The kernel handles the rest of the low-level work too:</p><ul style=\"margin: 0.35em 0 0 1.25em; padding: 0;\"><li style=\"margin-top: 0.35em;\">Processes wait on semaphores for devices and for each other, and the kernel handles their system calls and device interrupts.</li><li style=\"margin-top: 0.35em;\">Each process runs in its own virtual address space, mapped to physical memory through the TLB.</li></ul>",
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
			"A BitTorrent client I wrote in Node.js. Give it a .torrent file or a magnet link and it finds peers, connects to them directly, and downloads the file piece by piece.<p style=\"margin: 0.9em 0 0;\">I built each part of the protocol from scratch:</p><ul style=\"margin: 0.35em 0 0 1.25em; padding: 0;\"><li style=\"margin-top: 0.35em;\">It includes its own bencode encoder and decoder, finds peers through HTTP trackers, and speaks the BitTorrent wire protocol over TCP.</li><li style=\"margin-top: 0.35em;\">Every piece is checked against its SHA-1 hash before the file is put back together.</li><li style=\"margin-top: 0.35em;\">For magnet links, which don't include the file's metadata, it uses the extension protocol to get that metadata from peers first.</li></ul>",
		summary: "Download a file from a .torrent file or magnet link by connecting straight to the peers sharing it.",
		liveDemo: null,
		sourceCode: "https://github.com/Shahir-47/bittorrent-client-js",
		devpost: null,
		repo: "bittorrent-client-js",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: Albatross,
		title: "Albatross",
		description:
			"Two of my teammates had felt unsafe walking through parts of Boston, so at HackHarvard 2024 our team of four built Albatross in 36 hours. It finds a fast walking route that stays out of crime hot zones.<p style=\"margin: 0.9em 0 0;\">We split the system into a few pieces:</p><ul style=\"margin: 0.35em 0 0 1.25em; padding: 0;\"><li style=\"margin-top: 0.35em;\">We loaded 50K+ crime records into Databricks and used MLflow to cluster them into hot zones.</li><li style=\"margin-top: 0.35em;\">Cloudflare Workers check each route against those zones, and I built the Vue.js frontend that shows the zones and the safer route on the map.</li></ul>",
		summary: "Walk home through Boston on a route that stays out of crime hot zones.",
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
			"One of my teammates at PennApps 2024 lives with type 1 diabetes, and carb counting and insulin dosing were a daily guessing game for them. In 36 hours we built SweetFriend, which shows live readings from a Dexcom glucose monitor and estimates the carbs in a meal from a photo.<p style=\"margin: 0.9em 0 0;\">Here's how it came together:</p><ul style=\"margin: 0.35em 0 0 1.25em; padding: 0;\"><li style=\"margin-top: 0.35em;\">I built the React frontend, including a Chart.js glucose chart where meals and workouts show up on the timeline.</li><li style=\"margin-top: 0.35em;\">The Flask and MongoDB backend sends meal photos to a GPT-4o vision model for carb estimates and texts you through Twilio when your glucose gets dangerous.</li></ul>",
		summary: "Snap a photo of a meal to get a carb estimate next to your live glucose readings.",
		liveDemo: "https://sweet-friend.vercel.app/app/dashboard",
		sourceCode: "https://github.com/dmicz/SweetFriend",
		devpost: "https://devpost.com/software/sweetfriend",
		repo: "SweetFriend",
		category: CATEGORIES.HACKATHON,
	},
	{
		image: SpaceAccuracy,
		title: "SpaceAccuracy",
		description:
			"A 2D shooter I built in Lua with the LÖVE framework, where every hit makes the alien move faster and a single miss ends the game.",
		sourceCode: "https://github.com/Shahir-47/SpaceAccuracy",
		repo: "SpaceAccuracy",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: "",
		title: "Speller",
		description:
			"A spell checker in C that loads a dictionary into a hash table I implemented myself, so every word in a text gets checked in close to constant time.",
		sourceCode: "https://github.com/Shahir-47/speller",
		repo: "speller",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: "",
		title: "Recover",
		description:
			"A C program that recovers JPEG photos from a raw memory card image by scanning it block by block for JPEG signatures and writing each photo back out as its own file.",
		sourceCode: "https://github.com/Shahir-47/Recover",
		repo: "Recover",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: "",
		title: "Filter",
		description:
			"A C program that edits BMP images pixel by pixel to apply grayscale, sepia, blur, and mirror filters.",
		sourceCode: "https://github.com/Shahir-47/filter",
		repo: "filter",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: "",
		title: "Runoff Voting System",
		description:
			"A ranked-choice election simulator that eliminates the last-place candidate each round and moves their votes to each voter's next choice until someone wins a majority.",
		sourceCode: "https://github.com/Shahir-47/Runoff",
		repo: "Runoff",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: "",
		title: "DNA Profiling",
		description:
			"A program that identifies who a DNA sample belongs to by counting repeated short sequences in it and comparing those counts against a database of people.",
		sourceCode: "https://github.com/Shahir-47/DNA",
		category: CATEGORIES.PERSONAL,
	},
	{
		image: "",
		title: "Credit Card Validator",
		description:
			"A C program that validates credit card numbers with Luhn's algorithm and identifies whether each one is a Visa, Mastercard, or American Express card.",
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
			backgroundColor: "#393e46",
			padding: {
				xs: "1rem",
				sm: "1.25rem",
				md: "1.5rem",
				lg: "2rem",
				xl: "2.5rem",
			},
			borderRadius: { xs: "8px", sm: "10px", md: "12px" },
			boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
			// Cards stack on small screens, so they need a clearer gap between
			// them than they do side by side.
			marginBottom: { xs: "1.75rem", sm: "1.6rem", md: "1.5rem" },
			transition: "transform 0.3s ease, box-shadow 0.3s ease",
			"&:hover": {
				transform: "translateY(-3px)",
				boxShadow: "0 6px 25px rgba(0, 173, 181, 0.20)",
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
						border: "2px solid #00adb5",
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
					flexDirection: "row",
					flexWrap: "wrap",
					alignItems: "center",
					gap: { xs: "0.6rem", sm: "1rem" },
					marginBottom: { xs: "0.5rem", sm: "0.625rem", md: "0.75rem" },
				}}
			>
				<Typography
					variant="h4"
					sx={{
						color: "#00adb5",
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
						backgroundColor: categoryTint(category, 0.16),
						border: `1px solid ${categoryTint(category, 0.4)}`,
						color: categoryColor(category),
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
				component="div"
				sx={{
					color: "#eeeeee",
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
							backgroundColor: "#00adb5",
							color: "#eeeeee",
							fontWeight: 600,
							borderRadius: "980px",
							textTransform: "none",
							px: { xs: 1.5, sm: 2 },
							py: { xs: 0.5, sm: 0.625, md: 0.75 },
							"&:hover": {
								backgroundColor: "#00c8d1",
								boxShadow: "none",
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
						Visit site
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
							borderColor: "#525863",
							color: "#ffffff",
							fontWeight: 600,
							borderRadius: "980px",
							textTransform: "none",
							px: { xs: 1.5, sm: 2 },
							py: { xs: 0.5, sm: 0.625, md: 0.75 },
							"&:hover": {
								borderColor: "#00c8d1",
								color: "#00c8d1",
								boxShadow: "none",
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
									borderColor: "#00c8d1",
									color: "#00c8d1",
									boxShadow: "none",
								},
							},
						}}
					>
						Source code
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
							backgroundColor: "#525863",
							color: "#ffffff",
							fontWeight: 600,
							borderRadius: "980px",
							textTransform: "none",
							px: { xs: 1.5, sm: 2 },
							py: { xs: 0.5, sm: 0.625, md: 0.75 },
							"&:hover": {
								backgroundColor: "#525863",
								color: "#fff",
								boxShadow: "none",
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
		// Descriptions contain HTML, so escape the query and never match inside a tag.
		const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		const regex = new RegExp(`(${escaped})(?![^<]*>)`, "gi");
		return text.replace(
			regex,
			"<mark style='background-color: #00adb5; color: #393e46; padding: 2px 4px; border-radius: 3px;'>$1</mark>",
		);
	};

	const filteredProjects = projectsData.filter((project) => {
		const matchesSearch =
			project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.description
				.replace(/<[^>]*>/g, " ")
				.toLowerCase()
				.includes(searchTerm.toLowerCase());
		const matchesFilter =
			activeFilter === CATEGORIES.ALL || project.category === activeFilter;
		return matchesSearch && matchesFilter;
	});

	const projectsToShow = showAllProjects
		? filteredProjects
		: filteredProjects.slice(0, 7);

	// Get counts for each category
	const getCategoryCount = (category) => {
		if (category === CATEGORIES.ALL) return projectsData.length;
		return projectsData.filter((p) => p.category === category).length;
	};

	return (
		<Box
			className="projects"
			sx={{
				color: "#eeeeee",
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
					color: "#00adb5",
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
				Projects
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
									? categoryColor(category)
									: "transparent",
							borderColor:
								activeFilter === category
									? categoryColor(category)
									: categoryTint(category, 0.45),
							color:
								activeFilter === category ? "#eeeeee" : categoryColor(category),
							fontWeight: 600,
							fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
							px: { xs: 1.5, sm: 2, md: 2.5 },
							py: { xs: 0.5, sm: 0.75 },
							borderRadius: "980px",
							textTransform: "none",
							transition: "all 0.25s ease",
							"&:hover": {
								backgroundColor:
									activeFilter === category
										? categoryColor(category)
										: categoryTint(category, 0.14),
								borderColor: categoryColor(category),
								color:
									activeFilter === category ? "#eeeeee" : categoryColor(category),
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
					id="projects-search"
					label="Search projects"
					variant="outlined"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					sx={{
						"& .MuiInputLabel-root": {
							color: "#00adb5",
							transition: "color 0.3s ease",
							fontSize: { xs: "0.9rem", sm: "1rem", xl: "1.1rem" },
							"@media (min-width: 2560px)": {
								fontSize: "1.4rem",
							},
						},
						"& .MuiInputLabel-root.Mui-focused": {
							color: "#00c8d1",
						},
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: "#00adb5",
								transition: "border-color 0.3s ease",
								"@media (min-width: 2560px)": {
									borderWidth: "2px",
								},
							},
							"&:hover fieldset": {
								borderColor: "#00adb5",
							},
							"&.Mui-focused fieldset": {
								borderColor: "#00c8d1",
							},
						},
						"& .MuiInputBase-input": {
							color: "#eeeeee",
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
							No projects match your search.
						</Typography>
						<Button
							variant="outlined"
							onClick={() => {
								setSearchTerm("");
								setActiveFilter(CATEGORIES.ALL);
							}}
							sx={{
								borderColor: "#00adb5",
								color: "#00adb5",
								"&:hover": {
									borderColor: "#00c8d1",
									color: "#00c8d1",
								},
							}}
						>
							Clear filters
						</Button>
					</Box>
				)}
			</Box>

			{/* Show More/Less Button */}
			{filteredProjects.length > 7 && (
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
							backgroundColor: "#00adb5",
							color: "#eeeeee",
							fontWeight: 600,
							borderRadius: "980px",
							textTransform: "none",
							px: { xs: 2, sm: 2.5, md: 3, xl: 3.5 },
							py: { xs: 0.75, sm: 0.875, md: 1, xl: 1.125 },
							fontSize: {
								xs: "0.85rem",
								sm: "0.9rem",
								md: "0.95rem",
								xl: "1rem",
							},
							"&:hover": {
								backgroundColor: "#00c8d1",
								boxShadow: "none",
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
							? `Show fewer projects`
							: `Show ${filteredProjects.length - 7} more projects`}
					</Button>
				</Box>
			)}

			{/* Social Section */}
			<Box
				sx={{
					textAlign: "center",
					color: "#eeeeee",
					marginTop: { xs: "2rem", sm: "2.5rem", md: "3rem", xl: "4rem" },
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
					Feel free to <span style={{ color: "#00adb5" }}>connect</span> with me
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

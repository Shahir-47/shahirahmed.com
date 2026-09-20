// Project data and the tag vocabulary built from it. This module has no
// "use client" marker, so the projects page can read the same tags on the
// server for its structured data.
import SweetFriend from "@/assets/sweetFriend.jpg";
import Albatross from "@/assets/albatross.png";
import SpaceAccuracy from "@/assets/space.png";
import QueueUp from "@/assets/queue-up.png";
import CoSignImg from "@/assets/CoSignImg.png";
import GrabPicImg from "@/assets/grabpic.png";
import PaperPulseImg from "@/assets/paperpulse.png";
import HomeServerImg from "@/assets/homeserver.png";

export const CATEGORIES = {
	ALL: "All",
	PERSONAL: "Personal",
	HACKATHON: "Hackathon",
};

export const CATEGORY_COLORS = {
	[CATEGORIES.HACKATHON]: "#e5a54a",
	[CATEGORIES.PERSONAL]: "#6c9ee0",
	[CATEGORIES.ALL]: "#00adb5",
};

export const categoryColor = (category) => CATEGORY_COLORS[category] || "#00adb5";

// Same hue at low alpha for chip and hover fills.
export const tint = (hex, alpha) => {
	const value = hex.slice(1);
	const r = parseInt(value.slice(0, 2), 16);
	const g = parseInt(value.slice(2, 4), 16);
	const b = parseInt(value.slice(4, 6), 16);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const categoryTint = (category, alpha) => tint(categoryColor(category), alpha);

// Every project carries three lists of tags. `key` is the field on the project
// objects below, and `param` is the name that group writes to the URL.
export const TAG_GROUPS = [
	{ key: "focus", label: "Focus", param: "focus", color: "#00adb5" },
	{ key: "languages", label: "Language", param: "lang", color: "#c08cf0" },
	{ key: "tech", label: "Tech & tools", param: "tech", color: "#8ec07c" },
];

export const SORTS = [
	{ value: "featured", label: "Featured", compare: null },
	{
		value: "az",
		label: "Title A to Z",
		compare: (a, b) => a.title.localeCompare(b.title),
	},
	{
		value: "za",
		label: "Title Z to A",
		compare: (a, b) => b.title.localeCompare(a.title),
	},
	{
		value: "demo",
		label: "Live demo first",
		// Sorting is stable, so projects keep the featured order within each group.
		compare: (a, b) => Number(Boolean(b.liveDemo)) - Number(Boolean(a.liveDemo)),
	},
];

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
		focus: [
			"Full Stack", "Backend", "Databases", "Distributed Systems",
			"Machine Learning", "Computer Vision", "Vector Search", "Security",
			"DevOps & Cloud", "Self-Hosting",
		],
		languages: ["TypeScript", "Java", "Python", "SQL"],
		tech: [
			"Next.js", "React", "Spring Boot", "TensorFlow", "PostgreSQL",
			"pgvector", "Redis", "AWS", "Supabase", "Docker", "Cloudflare",
			"Tailwind CSS",
		],
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
		focus: [
			"Full Stack", "Backend", "Databases", "Machine Learning",
			"AI & LLMs", "Vector Search", "Data Engineering", "DevOps & Cloud",
			"Self-Hosting",
		],
		languages: ["TypeScript", "Python", "SQL"],
		tech: [
			"Next.js", "React", "FastAPI", "Neo4j", "PostgreSQL", "pgvector",
			"OpenAI", "Cohere", "Docker", "Supabase", "Tailwind CSS",
		],
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
		focus: [
			"DevOps & Cloud", "Self-Hosting", "Networking", "Security",
			"Real-Time", "Frontend",
		],
		languages: ["JavaScript"],
		tech: [
			"Next.js", "React", "Docker", "Linux", "Cloudflare", "Traefik",
			"Coolify", "Tailscale", "Server-Sent Events",
		],
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
		focus: [
			"Full Stack", "Backend", "Databases", "Real-Time", "Security",
			"DevOps & Cloud", "Self-Hosting",
		],
		languages: ["Java", "JavaScript", "SQL"],
		tech: [
			"Spring Boot", "React", "PostgreSQL", "WebSockets", "Docker", "AWS",
			"Spotify API",
		],
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
		focus: [
			"Full Stack", "Backend", "Databases", "Real-Time", "Security",
			"DevOps & Cloud",
		],
		languages: ["Java", "TypeScript", "SQL"],
		tech: ["Spring Boot", "React", "PostgreSQL", "WebSockets", "Docker"],
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
		focus: ["Operating Systems", "Systems Programming", "Concurrency"],
		languages: ["C"],
		tech: ["uMPS3"],
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
		focus: [
			"Networking", "Systems Programming", "Distributed Systems",
			"Concurrency", "Algorithms",
		],
		languages: ["JavaScript"],
		tech: ["Node.js"],
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
		focus: [
			"Frontend", "Machine Learning", "Data Engineering",
			"DevOps & Cloud",
		],
		languages: ["JavaScript", "Python"],
		tech: [
			"Vue.js", "Cloudflare", "Databricks", "MLflow", "Google Maps API",
		],
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
		focus: ["Full Stack", "Frontend", "Backend", "AI & LLMs", "Databases"],
		languages: ["JavaScript", "Python"],
		tech: ["React", "Chart.js", "Flask", "MongoDB", "OpenAI", "Twilio"],
	},
	{
		image: SpaceAccuracy,
		title: "SpaceAccuracy",
		description:
			"A 2D shooter I built in Lua with the LÖVE framework, where every hit makes the alien move faster and a single miss ends the game.",
		sourceCode: "https://github.com/Shahir-47/SpaceAccuracy",
		repo: "SpaceAccuracy",
		category: CATEGORIES.PERSONAL,
		focus: ["Game Development"],
		languages: ["Lua"],
		tech: ["LÖVE"],
	},
	{
		image: "",
		title: "Speller",
		description:
			"A spell checker in C that loads a dictionary into a hash table I implemented myself, so every word in a text gets checked in close to constant time.",
		sourceCode: "https://github.com/Shahir-47/speller",
		repo: "speller",
		category: CATEGORIES.PERSONAL,
		focus: ["Algorithms", "Systems Programming"],
		languages: ["C"],
		tech: [],
	},
	{
		image: "",
		title: "Recover",
		description:
			"A C program that recovers JPEG photos from a raw memory card image by scanning it block by block for JPEG signatures and writing each photo back out as its own file.",
		sourceCode: "https://github.com/Shahir-47/Recover",
		repo: "Recover",
		category: CATEGORIES.PERSONAL,
		focus: ["Systems Programming", "Algorithms"],
		languages: ["C"],
		tech: [],
	},
	{
		image: "",
		title: "Filter",
		description:
			"A C program that edits BMP images pixel by pixel to apply grayscale, sepia, blur, and mirror filters.",
		sourceCode: "https://github.com/Shahir-47/filter",
		repo: "filter",
		category: CATEGORIES.PERSONAL,
		focus: ["Image Processing", "Algorithms", "Systems Programming"],
		languages: ["C"],
		tech: [],
	},
	{
		image: "",
		title: "Runoff Voting System",
		description:
			"A ranked-choice election simulator that eliminates the last-place candidate each round and moves their votes to each voter's next choice until someone wins a majority.",
		sourceCode: "https://github.com/Shahir-47/Runoff",
		repo: "Runoff",
		category: CATEGORIES.PERSONAL,
		focus: ["Algorithms"],
		languages: ["C"],
		tech: [],
	},
	{
		image: "",
		title: "DNA Profiling",
		description:
			"A program that identifies who a DNA sample belongs to by counting repeated short sequences in it and comparing those counts against a database of people.",
		sourceCode: "https://github.com/Shahir-47/DNA",
		category: CATEGORIES.PERSONAL,
		focus: ["Algorithms"],
		languages: ["Python"],
		tech: [],
	},
	{
		image: "",
		title: "Credit Card Validator",
		description:
			"A C program that validates credit card numbers with Luhn's algorithm and identifies whether each one is a Visa, Mastercard, or American Express card.",
		sourceCode: "https://github.com/Shahir-47/Credit",
		repo: "Credit",
		category: CATEGORIES.PERSONAL,
		focus: ["Algorithms"],
		languages: ["C"],
		tech: [],
	},
];

// One pass over the data gives every tag its group and how many projects use it,
// so the filter panel and the chips on each card never drift from the projects.
export const TAG_INDEX = new Map();
TAG_GROUPS.forEach((group) => {
	projectsData.forEach((project) => {
		(project[group.key] || []).forEach((tag) => {
			const entry = TAG_INDEX.get(tag);
			if (entry) {
				entry.count += 1;
				return;
			}
			TAG_INDEX.set(tag, { group: group.key, color: group.color, count: 1 });
		});
	});
});

// The most used tags come first in each group, so the panel opens on the work
// there is most of rather than on an alphabetical list.
export const GROUP_TAGS = TAG_GROUPS.map((group) => ({
	...group,
	tags: [
		...new Set(projectsData.flatMap((project) => project[group.key] || [])),
	].sort(
		(a, b) =>
			TAG_INDEX.get(b).count - TAG_INDEX.get(a).count || a.localeCompare(b),
	),
}));

export const tagColor = (tag) => TAG_INDEX.get(tag)?.color || "#00adb5";

export const projectTags = (project) =>
	TAG_GROUPS.flatMap((group) => project[group.key] || []);

export const EMPTY_SELECTION = Object.fromEntries(
	TAG_GROUPS.map((group) => [group.key, []]),
);

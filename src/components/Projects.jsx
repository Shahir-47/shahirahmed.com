"use client";

import PropTypes from "prop-types";
import SocialIcons from "./SocialIcons";
import {
	FilterList,
	KeyboardArrowDown,
	KeyboardArrowUp,
} from "@mui/icons-material";
import {
	Box,
	Typography,
	Button,
	TextField,
	Chip,
	Collapse,
	MenuItem,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { SiDevpost } from "react-icons/si";
import { Launch } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";
import {
	CATEGORIES,
	EMPTY_SELECTION,
	GROUP_TAGS,
	SORTS,
	TAG_INDEX,
	categoryColor,
	categoryTint,
	projectTags,
	projectsData,
	tagColor,
	tint,
} from "@/data/projects";

const TagChip = ({ tag, active, onToggle, count }) => {
	const color = tagColor(tag);
	return (
		<Chip
			label={count === undefined ? tag : `${tag} (${count})`}
			size="small"
			onClick={() => onToggle(tag)}
			aria-pressed={active}
			sx={{
				backgroundColor: active ? tint(color, 0.9) : tint(color, 0.12),
				border: `1px solid ${tint(color, active ? 0.9 : 0.35)}`,
				color: active ? "#1b1f24" : color,
				fontWeight: active ? 700 : 500,
				fontSize: { xs: "0.68rem", sm: "0.72rem", md: "0.75rem" },
				height: { xs: "22px", sm: "24px" },
				cursor: "pointer",
				transition: "background-color 0.2s ease, border-color 0.2s ease",
				"&:hover": {
					backgroundColor: active ? tint(color, 0.9) : tint(color, 0.26),
					borderColor: tint(color, 0.7),
				},
				"@media (min-width: 2560px)": {
					fontSize: "1rem",
					height: "32px",
				},
			}}
		/>
	);
};

TagChip.propTypes = {
	tag: PropTypes.string.isRequired,
	active: PropTypes.bool,
	onToggle: PropTypes.func.isRequired,
	count: PropTypes.number,
};

// Cards would drown in chips otherwise: GrabPic alone carries 26 tags.
const VISIBLE_TAGS = 10;

const ProjectTags = ({ tags, activeTags, onToggleTag }) => {
	const [expanded, setExpanded] = useState(false);

	if (!tags.length) return null;

	// Selected tags come first, so a card always shows why it matched.
	const ordered = [
		...tags.filter((tag) => activeTags.includes(tag)),
		...tags.filter((tag) => !activeTags.includes(tag)),
	];
	const visible = expanded ? ordered : ordered.slice(0, VISIBLE_TAGS);
	const hidden = ordered.length - visible.length;

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				gap: { xs: "0.35rem", sm: "0.4rem", md: "0.45rem" },
				marginBottom: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
				"@media (min-width: 2560px)": {
					gap: "0.7rem",
					marginBottom: "1.75rem",
				},
			}}
		>
			{visible.map((tag) => (
				<TagChip
					key={tag}
					tag={tag}
					active={activeTags.includes(tag)}
					onToggle={onToggleTag}
				/>
			))}
			{(hidden > 0 || expanded) && (
				<Chip
					label={expanded ? "Show fewer tags" : `+${hidden} more`}
					size="small"
					onClick={() => setExpanded(!expanded)}
					sx={{
						backgroundColor: "transparent",
						border: "1px dashed #6b7280",
						color: "#b6bcc6",
						fontSize: { xs: "0.68rem", sm: "0.72rem", md: "0.75rem" },
						height: { xs: "22px", sm: "24px" },
						cursor: "pointer",
						"&:hover": {
							backgroundColor: "rgba(255, 255, 255, 0.06)",
							borderColor: "#00adb5",
							color: "#eeeeee",
						},
						"@media (min-width: 2560px)": {
							fontSize: "1rem",
							height: "32px",
						},
					}}
				/>
			)}
		</Box>
	);
};

ProjectTags.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	activeTags: PropTypes.arrayOf(PropTypes.string).isRequired,
	onToggleTag: PropTypes.func.isRequired,
};

const ProjectItem = ({
	image,
	title,
	description,
	liveDemo,
	sourceCode,
	devpost,
	category,
	tags,
	activeTags,
	onToggleTag,
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

			{/* Tags */}
			<ProjectTags
				tags={tags}
				activeTags={activeTags}
				onToggleTag={onToggleTag}
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
	const [selectedTags, setSelectedTags] = useState(EMPTY_SELECTION);
	const [sortBy, setSortBy] = useState(SORTS[0].value);
	const [filtersOpen, setFiltersOpen] = useState(false);
	const [showAllProjects, setShowAllProjects] = useState(false);
	// Nothing is written back to the URL until the URL has been read, otherwise
	// the first render would wipe the filters a shared link arrived with.
	const [urlRead, setUrlRead] = useState(false);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);

		const query = params.get("q");
		if (query) setSearchTerm(query);

		const category = Object.values(CATEGORIES).find(
			(value) =>
				value.toLowerCase() === (params.get("category") || "").toLowerCase(),
		);
		if (category) setActiveFilter(category);

		const sort = SORTS.find((option) => option.value === params.get("sort"));
		if (sort) setSortBy(sort.value);

		// Tags are matched case-insensitively against the real tag names, so a
		// hand-typed ?lang=java still works and an unknown tag is dropped.
		const fromUrl = {};
		let found = 0;
		GROUP_TAGS.forEach((group) => {
			const raw = params.get(group.param) || "";
			const wanted = raw
				.split(",")
				.map((value) => value.trim().toLowerCase())
				.filter(Boolean);
			const tags = group.tags.filter((tag) =>
				wanted.includes(tag.toLowerCase()),
			);
			fromUrl[group.key] = tags;
			found += tags.length;
		});
		if (found) {
			setSelectedTags(fromUrl);
			setFiltersOpen(true);
		}

		setUrlRead(true);
	}, []);

	useEffect(() => {
		if (!urlRead) return undefined;
		// Safari caps how often a page may rewrite its URL, so typing in the
		// search box waits for a pause before the query string catches up.
		const timer = setTimeout(() => {
			const params = new URLSearchParams();
			if (searchTerm) params.set("q", searchTerm);
			if (activeFilter !== CATEGORIES.ALL) params.set("category", activeFilter);
			if (sortBy !== SORTS[0].value) params.set("sort", sortBy);
			GROUP_TAGS.forEach((group) => {
				const tags = selectedTags[group.key];
				if (tags.length) params.set(group.param, tags.join(","));
			});
			const query = params.toString();
			// replaceState keeps the back button pointing at the previous page
			// rather than at every filter the visitor tried on the way.
			window.history.replaceState(
				null,
				"",
				query ? `?${query}` : window.location.pathname,
			);
		}, 300);

		return () => clearTimeout(timer);
	}, [urlRead, searchTerm, activeFilter, sortBy, selectedTags]);

	const activeTags = useMemo(
		() => GROUP_TAGS.flatMap((group) => selectedTags[group.key]),
		[selectedTags],
	);

	const toggleTag = (tag) => {
		const entry = TAG_INDEX.get(tag);
		if (!entry) return;
		setSelectedTags((current) => {
			const tags = current[entry.group];
			return {
				...current,
				[entry.group]: tags.includes(tag)
					? tags.filter((value) => value !== tag)
					: [...tags, tag],
			};
		});
		setShowAllProjects(false);
	};

	const clearFilters = () => {
		setSearchTerm("");
		setActiveFilter(CATEGORIES.ALL);
		setSelectedTags(EMPTY_SELECTION);
		setShowAllProjects(false);
	};

	const hasFilters =
		Boolean(searchTerm) ||
		activeFilter !== CATEGORIES.ALL ||
		activeTags.length > 0;

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

	const filteredProjects = useMemo(() => {
		const query = searchTerm.trim().toLowerCase();
		const matches = projectsData.filter((project) => {
			const haystack = [
				project.title,
				project.description.replace(/<[^>]*>/g, " "),
				projectTags(project).join(" "),
			]
				.join(" ")
				.toLowerCase();
			const matchesSearch = !query || haystack.includes(query);
			const matchesCategory =
				activeFilter === CATEGORIES.ALL || project.category === activeFilter;
			// Inside a group any one tag is enough, across groups every group with
			// a selection has to match: picking Backend and C means both.
			const matchesTags = GROUP_TAGS.every((group) => {
				const tags = selectedTags[group.key];
				return (
					!tags.length ||
					tags.some((tag) => (project[group.key] || []).includes(tag))
				);
			});
			return matchesSearch && matchesCategory && matchesTags;
		});

		const { compare } = SORTS.find((option) => option.value === sortBy) || {};
		return compare ? [...matches].sort(compare) : matches;
	}, [searchTerm, activeFilter, selectedTags, sortBy]);

	const projectsToShow = showAllProjects
		? filteredProjects
		: filteredProjects.slice(0, 7);

	// Counts follow the tag filter, so a category never promises more projects
	// than it can show once the tags are applied.
	const getCategoryCount = (category) =>
		projectsData.filter((project) => {
			const matchesCategory =
				category === CATEGORIES.ALL || project.category === category;
			const matchesTags = GROUP_TAGS.every((group) => {
				const tags = selectedTags[group.key];
				return (
					!tags.length ||
					tags.some((tag) => (project[group.key] || []).includes(tag))
				);
			});
			return matchesCategory && matchesTags;
		}).length;

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

			{/* Filter Panel Toggle and Sort */}
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "space-between",
					gap: { xs: "0.75rem", sm: "1rem" },
					marginBottom: { xs: "1rem", sm: "1.25rem" },
					"@media (min-width: 2560px)": {
						gap: "1.5rem",
						marginBottom: "1.75rem",
					},
				}}
			>
				<Button
					variant="outlined"
					onClick={() => setFiltersOpen(!filtersOpen)}
					aria-expanded={filtersOpen}
					aria-controls="project-tag-filters"
					startIcon={<FilterList />}
					endIcon={
						filtersOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />
					}
					sx={{
						borderColor: activeTags.length
							? "#00adb5"
							: "rgba(0, 173, 181, 0.45)",
						backgroundColor: activeTags.length
							? "rgba(0, 173, 181, 0.14)"
							: "transparent",
						color: "#00adb5",
						fontWeight: 600,
						fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
						borderRadius: "980px",
						textTransform: "none",
						px: { xs: 1.75, sm: 2.25 },
						py: { xs: 0.5, sm: 0.75 },
						"&:hover": {
							borderColor: "#00c8d1",
							backgroundColor: "rgba(0, 173, 181, 0.2)",
							color: "#00c8d1",
						},
						"@media (min-width: 2560px)": {
							fontSize: "1.2rem",
							px: 3.5,
							py: 1,
						},
					}}
				>
					{activeTags.length
						? `Filter by tag (${activeTags.length})`
						: "Filter by tag"}
				</Button>

				<TextField
					select
					size="small"
					id="projects-sort"
					label="Sort by"
					value={sortBy}
					onChange={(event) => {
						setSortBy(event.target.value);
						setShowAllProjects(false);
					}}
					slotProps={{
						select: {
							MenuProps: {
								PaperProps: {
									sx: {
										backgroundColor: "#393e46",
										color: "#eeeeee",
										border: "1px solid rgba(0, 173, 181, 0.35)",
										"& .MuiMenuItem-root.Mui-selected": {
											backgroundColor: "rgba(0, 173, 181, 0.22)",
										},
										"& .MuiMenuItem-root:hover": {
											backgroundColor: "rgba(0, 173, 181, 0.14)",
										},
									},
								},
							},
						},
					}}
					sx={{
						minWidth: { xs: "100%", sm: "200px" },
						"& .MuiInputLabel-root": { color: "#00adb5" },
						"& .MuiInputLabel-root.Mui-focused": { color: "#00c8d1" },
						"& .MuiOutlinedInput-root": {
							color: "#eeeeee",
							"& fieldset": { borderColor: "rgba(0, 173, 181, 0.45)" },
							"&:hover fieldset": { borderColor: "#00adb5" },
							"&.Mui-focused fieldset": { borderColor: "#00c8d1" },
						},
						"& .MuiSvgIcon-root": { color: "#00adb5" },
						"@media (min-width: 2560px)": {
							minWidth: "320px",
							"& .MuiInputLabel-root": { fontSize: "1.2rem" },
							"& .MuiInputBase-input": { fontSize: "1.2rem" },
						},
					}}
				>
					{SORTS.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			</Box>

			{/* Tag Filter Panel */}
			<Collapse in={filtersOpen} unmountOnExit>
				<Box
					id="project-tag-filters"
					sx={{
						backgroundColor: "#32373f",
						border: "1px solid rgba(0, 173, 181, 0.18)",
						borderRadius: { xs: "8px", md: "12px" },
						padding: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
						marginBottom: { xs: "1.25rem", sm: "1.5rem" },
						"@media (min-width: 2560px)": {
							padding: "2.5rem",
							borderRadius: "16px",
							marginBottom: "2rem",
						},
					}}
				>
					{GROUP_TAGS.map((group) => (
						<Box
							key={group.key}
							sx={{
								marginBottom: { xs: "1rem", sm: "1.15rem" },
								"&:last-of-type": { marginBottom: 0 },
								"@media (min-width: 2560px)": { marginBottom: "1.75rem" },
							}}
						>
							<Typography
								component="h3"
								sx={{
									color: group.color,
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "0.08em",
									fontSize: { xs: "0.7rem", sm: "0.75rem" },
									marginBottom: { xs: "0.5rem", sm: "0.6rem" },
									"@media (min-width: 2560px)": {
										fontSize: "1.1rem",
										marginBottom: "0.9rem",
									},
								}}
							>
								{group.label}
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									gap: { xs: "0.35rem", sm: "0.4rem", md: "0.45rem" },
									"@media (min-width: 2560px)": { gap: "0.7rem" },
								}}
							>
								{group.tags.map((tag) => (
									<TagChip
										key={tag}
										tag={tag}
										count={TAG_INDEX.get(tag).count}
										active={selectedTags[group.key].includes(tag)}
										onToggle={toggleTag}
									/>
								))}
							</Box>
						</Box>
					))}

					<Typography
						sx={{
							color: "#8b929c",
							fontSize: { xs: "0.72rem", sm: "0.78rem" },
							marginTop: { xs: "1rem", sm: "1.15rem" },
							"@media (min-width: 2560px)": {
								fontSize: "1.1rem",
								marginTop: "1.75rem",
							},
						}}
					>
						Picking more tags in one row widens the results. Picking tags in
						different rows narrows them, so Backend plus Java shows the backends
						written in Java.
					</Typography>
				</Box>
			</Collapse>

			{/* Active Filters */}
			{activeTags.length > 0 && (
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						alignItems: "center",
						gap: { xs: "0.35rem", sm: "0.45rem" },
						marginBottom: { xs: "1rem", sm: "1.25rem" },
						"@media (min-width: 2560px)": {
							gap: "0.7rem",
							marginBottom: "1.75rem",
						},
					}}
				>
					{activeTags.map((tag) => (
						<Chip
							key={tag}
							label={tag}
							size="small"
							onDelete={() => toggleTag(tag)}
							sx={{
								backgroundColor: tint(tagColor(tag), 0.9),
								color: "#1b1f24",
								fontWeight: 700,
								fontSize: { xs: "0.68rem", sm: "0.72rem", md: "0.75rem" },
								height: { xs: "22px", sm: "24px" },
								"& .MuiChip-deleteIcon": {
									color: "rgba(27, 31, 36, 0.65)",
									"&:hover": { color: "#1b1f24" },
								},
								"@media (min-width: 2560px)": {
									fontSize: "1rem",
									height: "32px",
								},
							}}
						/>
					))}
					<Button
						onClick={clearFilters}
						sx={{
							color: "#b6bcc6",
							textTransform: "none",
							fontSize: { xs: "0.72rem", sm: "0.78rem" },
							minWidth: "auto",
							padding: "0 0.5rem",
							textDecoration: "underline",
							"&:hover": {
								backgroundColor: "transparent",
								color: "#00c8d1",
							},
							"@media (min-width: 2560px)": { fontSize: "1.1rem" },
						}}
					>
						Clear all
					</Button>
				</Box>
			)}

			{/* Results Count */}
			{hasFilters && (
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
					{activeTags.length > 0 && ` tagged ${activeTags.join(", ")}`}
					{searchTerm && ` matching "${searchTerm}"`}
				</Typography>
			)}

			{/* Projects List */}
			<Box>
				{projectsToShow.length > 0 ? (
					projectsToShow.map((project, index) => (
						<ProjectItem
							key={index}
							{...project}
							tags={projectTags(project)}
							activeTags={activeTags}
							onToggleTag={toggleTag}
							highlight={highlightText}
						/>
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
							onClick={clearFilters}
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
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	activeTags: PropTypes.arrayOf(PropTypes.string).isRequired,
	onToggleTag: PropTypes.func.isRequired,
	highlight: PropTypes.func.isRequired,
};

export default Projects;

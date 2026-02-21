"use client";

import { useState, useEffect, useRef } from "react";

const sections = [
	{ id: "about-me", label: "About Me" },
	{ id: "tools-technologies", label: "Tools & Tech" },
	{ id: "work-experience", label: "Work Experience" },
	{ id: "open-source", label: "Open Source" },
	{ id: "hackathons", label: "Hackathons" },
	{ id: "education", label: "Education" },
	{ id: "certifications", label: "Certifications" },
	{ id: "github-stats", label: "GitHub Stats" },
	{ id: "projects-link", label: "Projects" },
	{ id: "connect", label: "Connect" },
];

const TableOfContents = () => {
	const [activeId, setActiveId] = useState("");
	const observerRef = useRef(null);

	useEffect(() => {
		const handleObserver = (entries) => {
			const visibleEntries = entries.filter((entry) => entry.isIntersecting);
			if (visibleEntries.length > 0) {
				// Pick the one closest to the top of the viewport
				const closest = visibleEntries.reduce((prev, curr) => {
					return Math.abs(curr.boundingClientRect.top) <
						Math.abs(prev.boundingClientRect.top)
						? curr
						: prev;
				});
				setActiveId(closest.target.id);
			}
		};

		observerRef.current = new IntersectionObserver(handleObserver, {
			rootMargin: "-80px 0px -60% 0px",
			threshold: [0, 0.1],
		});

		// Small delay to ensure DOM sections are rendered
		const timer = setTimeout(() => {
			sections.forEach(({ id }) => {
				const el = document.getElementById(id);
				if (el) observerRef.current.observe(el);
			});
		}, 100);

		return () => {
			clearTimeout(timer);
			if (observerRef.current) observerRef.current.disconnect();
		};
	}, []);

	const handleClick = (e, id) => {
		e.preventDefault();
		const el = document.getElementById(id);
		if (el) {
			const yOffset = -80;
			const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};

	return (
		<nav className="toc-sidebar" aria-label="Table of contents">
			<div className="toc-title">On this page</div>
			<ul className="toc-list">
				{sections.map(({ id, label }) => (
					<li key={id}>
						<a
							href={`#${id}`}
							className={`toc-link${activeId === id ? " toc-active" : ""}`}
							onClick={(e) => handleClick(e, id)}
						>
							{label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default TableOfContents;

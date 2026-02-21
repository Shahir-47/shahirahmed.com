"use client";

import { useState, useEffect, useRef, useCallback } from "react";

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

const SCROLL_OFFSET = 120;

const TableOfContents = () => {
	const [activeId, setActiveId] = useState(sections[0].id);
	const isClickScrolling = useRef(false);
	const clickTarget = useRef(null);

	const getActiveSection = useCallback(() => {
		// At the bottom of the page, activate the last section
		if (
			window.innerHeight + Math.ceil(window.scrollY) >=
			document.documentElement.scrollHeight - 50
		) {
			return sections[sections.length - 1].id;
		}

		// Walk through sections and find the last one whose top has passed the offset
		let current = sections[0].id;
		for (const { id } of sections) {
			const el = document.getElementById(id);
			if (el) {
				const top = el.getBoundingClientRect().top + window.scrollY;
				if (window.scrollY >= top - SCROLL_OFFSET) {
					current = id;
				}
			}
		}
		return current;
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			// While smooth-scrolling from a click, lock to the target
			if (isClickScrolling.current) return;
			setActiveId(getActiveSection());
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		// Set initial active section
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, [getActiveSection]);

	const handleClick = (e, id) => {
		e.preventDefault();
		const el = document.getElementById(id);
		if (!el) return;

		// Immediately highlight the clicked section
		isClickScrolling.current = true;
		clickTarget.current = id;
		setActiveId(id);

		const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET + 40;
		window.scrollTo({ top, behavior: "smooth" });

		// Release the lock after scrolling settles
		const checkScrollEnd = () => {
			let lastY = window.scrollY;
			const poll = setInterval(() => {
				if (window.scrollY === lastY) {
					clearInterval(poll);
					isClickScrolling.current = false;
					clickTarget.current = null;
					// Sync to actual position after scroll finishes
					setActiveId(getActiveSection());
				}
				lastY = window.scrollY;
			}, 80);
		};
		// Give the smooth scroll a moment to start
		setTimeout(checkScrollEnd, 100);
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

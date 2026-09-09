"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A quiet "there is more below" marker.
 *
 * It only fades in once its section has been in view for a moment, so it
 * arrives after you have had time to read rather than competing with the
 * content. It fades back out when the section leaves the viewport.
 */
export default function ScrollCue({ href, delay = 2000 }) {
	const ref = useRef(null);
	const [shown, setShown] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return undefined;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setShown(true);
			return undefined;
		}

		let timer;
		let inView = false;

		const arm = () => {
			clearTimeout(timer);
			if (inView) timer = setTimeout(() => setShown(true), delay);
		};

		// Once you scroll, the hint has done its job, so it goes away and only
		// re-arms if you settle on this section again.
		const onScroll = () => {
			setShown(false);
			arm();
		};

		const observer = new IntersectionObserver(
			([entry]) => {
				inView = entry.isIntersecting;
				if (!inView) {
					clearTimeout(timer);
					setShown(false);
				} else {
					arm();
				}
			},
			{ threshold: 0.55 }
		);

		window.addEventListener("scroll", onScroll, { passive: true });

		observer.observe(el);

		return () => {
			clearTimeout(timer);
			observer.disconnect();
			window.removeEventListener("scroll", onScroll);
		};
	}, [delay]);

	return (
		<a
			ref={ref}
			className="scroll-cue"
			data-shown={shown}
			href={href}
			aria-label="Scroll to the next section"
		>
			<img src="/figma/icon-arrow-down.svg" alt="" width="22" height="22" />
		</a>
	);
}

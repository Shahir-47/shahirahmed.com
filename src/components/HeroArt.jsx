/**
 * The home illustration from the Figma file, composited into one scalable SVG.
 *
 * In the source the artwork is twelve separately positioned layers, each with
 * its own rotation and vertical flip, laid out on a fixed 1440px canvas. Here
 * every layer keeps its exact transform but the whole group is expressed in a
 * 400 x 473 viewBox, so it scales with its container instead of needing a
 * fixed-width stage. Coordinates are the Figma values offset by (-814, -478),
 * the top-left of the group's bounding box.
 */

const A = "/figma";

// Centre-anchored layer: translate to the layer's centre, rotate, flip, then
// draw the image from its own top-left. Mirrors Figma's rotate-about-centre.
const piece = (href, cx, cy, angle, w, h, flip = true) => (
	<g
		key={href}
		transform={`translate(${cx} ${cy}) rotate(${angle})${flip ? " scale(1 -1)" : ""} translate(${-w / 2} ${-h / 2})`}
	>
		<image href={href} width={w} height={h} />
	</g>
);

export default function HeroArt({ className }) {
	return (
		<svg
			className={className}
			viewBox="0 0 400 473"
			fill="none"
			role="img"
			aria-label="Illustration of a developer sitting with a laptop"
		>
			{/* floor shadow */}
			<image href={`${A}/home-shadow.svg`} x="0" y="360" width="348" height="24" />

			{/* head and hair */}
			{piece(`${A}/home-figure-01.svg`, 305.04, 70.21, -157.32, 94.2, 112.822)}

			{/* arm */}
			<image href={`${A}/home-figure-02.svg`} x="299.37" y="101.96" width="100.629" height="272.146" />

			{piece(`${A}/home-figure-03.svg`, 310.46, 187.44, -164.12, 127.319, 172.853)}
			{piece(`${A}/home-figure-04.svg`, 188.47, 314.63, -62.91, 207.749, 287.835)}

			{/* torso */}
			<image href={`${A}/home-figure-05.svg`} x="84.22" y="191.6" width="273.68" height="186.58" />

			{piece(`${A}/home-figure-06.svg`, 119.36, 352.46, -170.91, 56.794, 35.089)}

			{/* laptop lid and base, drawn shapes rather than exported images */}
			<g transform="translate(110.04 136.38) rotate(75) scale(1 -1) translate(-48.8865 -9.166)">
				<rect
					width="97.773"
					height="18.332"
					rx="2.009"
					fill="#eeeeee"
					stroke="#000"
					strokeWidth="1.399"
				/>
			</g>
			<g transform="translate(158.84 185.59) rotate(180) scale(1 -1) translate(-48.8865 -9.166)">
				<rect
					width="97.773"
					height="18.332"
					rx="2.009"
					fill="#00adb5"
					stroke="#000"
					strokeWidth="1.399"
				/>
			</g>

			{piece(`${A}/home-figure-07.svg`, 17.04, 330.93, -91.52, 57.64, 32.574)}
			{piece(`${A}/home-figure-08.svg`, 264.86, 189.5, 178.77, 176.381, 168.158)}
			{piece(`${A}/home-figure-09.svg`, 262.4, 210.74, 178.77, 170.545, 125.8)}
			{piece(`${A}/home-figure-10.svg`, 175.51, 178.0, -144.06, 34.938, 43.522)}
		</svg>
	);
}

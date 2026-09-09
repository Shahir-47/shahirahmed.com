/**
 * The "About me" illustration from the Figma file, composited into one
 * scalable SVG.
 *
 * Each layer keeps its exact Figma rotation, expressed in a 365 x 378 viewBox
 * rather than sitting on the fixed 1440px stage. Coordinates are the Figma
 * values offset by (-794.37, -445).
 *
 * The figure is squeezed horizontally to slim the torso and legs. The squeeze
 * wraps the whole body so the joins between limbs stay put, and the head is
 * counter-scaled back to full width inside it so only the body reads thinner.
 * Desk, chair and shadow sit outside the squeeze entirely.
 */

const A = "/figma";

const BODY = 0.72;
const HEAD_FIX = 1 / BODY;
const BODY_CX = 105; // horizontal centre of the figure
const HEAD_CX = 69.41; // centre of the head layer

const piece = (href, cx, cy, angle, w, h) => (
	<g
		key={href}
		transform={`translate(${cx} ${cy}) rotate(${angle}) translate(${-w / 2} ${-h / 2})`}
	>
		<image href={href} width={w} height={h} />
	</g>
);

const bar = (key, cx, cy, angle, w, h, r, fill) => (
	<g
		key={key}
		transform={`translate(${cx} ${cy}) rotate(${angle}) translate(${-w / 2} ${-h / 2})`}
	>
		<rect width={w} height={h} rx={r} fill={fill} stroke="#000" strokeWidth="1.399" />
	</g>
);

export default function AboutArt({ className }) {
	return (
		<svg
			className={className}
			viewBox="0 0 365 378"
			fill="none"
			role="img"
			aria-label="Illustration of a developer asleep at a desk"
		>
			<image href={`${A}/about-shadow.svg`} x="29.63" y="354" width="348" height="24" />
			<image href={`${A}/about-zzz.svg`} x="70.91" y="0" width="37.413" height="46.453" />

			{/* Body and legs, slimmed */}
			<g transform={`translate(${BODY_CX} 0) scale(${BODY} 1) translate(${-BODY_CX} 0)`}>
				<image href={`${A}/about-figure-01.svg`} x="52.94" y="155.38" width="211.566" height="205.491" />

				{/* Head kept at its natural width */}
				<g transform={`translate(${HEAD_CX} 0) scale(${HEAD_FIX} 1) translate(${-HEAD_CX} 0)`}>
					{piece(`${A}/about-figure-02.svg`, 69.41, 106.72, -56.89, 79.964, 95.771)}
				</g>

				{piece(`${A}/about-figure-03.svg`, 115.8, 181.4, -38.3, 98.514, 126.614)}
				{piece(`${A}/about-figure-04.svg`, 131.66, 184.83, -8.14, 116.472, 117.124)}
				{piece(`${A}/about-figure-05.svg`, 188.55, 171.26, -45.31, 25.25, 31.785)}

				<image href={`${A}/about-figure-06.svg`} x="50.32" y="258.19" width="52.911" height="104.256" />

				{piece(`${A}/about-figure-07.svg`, 65.57, 209.43, -22.76, 67.444, 90.39)}
			</g>

			{/* Desk and chair, left at full width */}
			{bar("chair-back", 35.32, 155.1, -22.76, 32.507, 105.129, 15.819, "#00adb5")}
			<rect x="293.82" y="220.31" width="15.562" height="142.132" rx="0.502" fill="#00adb5" stroke="#000" strokeWidth="1.399" />
			{bar("seat", 121.81, 246.94, 88.75, 52.107, 112.515, 24.562, "#00adb5")}
			{bar("desk-leg", 301.56, 211.23, 88.75, 32.507, 176.822, 15.819, "#00adb5")}
			{bar("desk-edge", 345.8, 145.98, 105, 82.997, 15.562, 2.009, "#00adb5")}
			<rect x="262.87" y="179.96" width="82.997" height="15.562" rx="2.009" fill="#eeeeee" stroke="#000" strokeWidth="1.399" />
		</svg>
	);
}

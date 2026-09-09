/**
 * The "Got a project in mind?" illustration from the Figma file.
 *
 * Composited the same way as the hero and about art: every layer keeps its
 * exact Figma rotation, expressed in a 271 x 365 viewBox. Coordinates are the
 * Figma values offset by (-302, -408).
 */

const A = "/figma";

const piece = (href, cx, cy, angle, w, h) => (
	<g
		key={href}
		transform={`translate(${cx} ${cy}) rotate(${angle}) translate(${-w / 2} ${-h / 2})`}
	>
		<image href={href} width={w} height={h} />
	</g>
);

export default function ContactArt({ className }) {
	return (
		<svg
			className={className}
			viewBox="0 0 271 365"
			fill="none"
			role="img"
			aria-label="Illustration of a person climbing a bar chart"
		>
			{/* Squeezed horizontally so the figure reads slimmer than the source */}
			<g transform="translate(135.5 0) scale(0.84 1) translate(-135.5 0)">
				<image href={`${A}/contact-shadow.svg`} x="0" y="341" width="190" height="24" />

				{/* the three bars being climbed */}
				<rect x="16.39" y="281.89" width="45.031" height="66.105" rx="3.515" fill="#eeeeee" stroke="#000" strokeWidth="1.645" />
				<rect x="134.2" y="255.06" width="45.031" height="92.944" rx="3.515" fill="#00adb5" stroke="#000" strokeWidth="1.645" />
				<rect x="225.34" y="152.03" width="45.031" height="195.974" rx="3.515" fill="#00adb5" stroke="#000" strokeWidth="1.645" />

				{piece(`${A}/contact-figure-01.svg`, 80.91, 187.39, 24.4, 61.178, 142.216)}
				{piece(`${A}/contact-figure-02.svg`, 31.36, 247.86, 24.4, 29.581, 13.998)}
				{piece(`${A}/contact-figure-03.svg`, 129.39, 172.89, -31.58, 58.862, 133.404)}
				{piece(`${A}/contact-figure-04.svg`, 113.47, 33.07, -22.68, 44.373, 53.144)}
				{piece(`${A}/contact-figure-05.svg`, 105.59, 88.4, -4.1, 64.258, 82.833)}
				{piece(`${A}/contact-figure-06.svg`, 130.13, 85.62, -37.4, 74.857, 54.002)}
				{piece(`${A}/contact-figure-07.svg`, 131.02, 86.42, -37.4, 74.416, 52.16)}
				{piece(`${A}/contact-figure-08.svg`, 172.51, 70.41, -56.55, 19.065, 22.734)}
				{piece(`${A}/contact-figure-09.svg`, 151.34, 241.97, -34.52, 32.409, 14.764)}
			</g>
		</svg>
	);
}

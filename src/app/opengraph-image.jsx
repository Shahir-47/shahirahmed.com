import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Shahir Ahmed - Full Stack Developer & Software Engineer";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: "60px",
				}}
			>
				{/* Left side - Photo */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						marginRight: "60px",
					}}
				>
					<img
						src="https://www.shahirahmed.com/shahir.jpeg"
						alt="Shahir Ahmed"
						width={280}
						height={280}
						style={{
							borderRadius: "50%",
							border: "4px solid #4fd1c5",
							objectFit: "cover",
						}}
					/>
				</div>

				{/* Right side - Text */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						justifyContent: "center",
						maxWidth: "700px",
					}}
				>
					{/* Name */}
					<h1
						style={{
							fontSize: "72px",
							fontWeight: "bold",
							color: "#ffffff",
							margin: "0 0 16px 0",
							lineHeight: 1.1,
						}}
					>
						Shahir Ahmed
					</h1>

					{/* Title */}
					<p
						style={{
							fontSize: "36px",
							color: "#4fd1c5",
							margin: "0 0 24px 0",
							fontWeight: "600",
						}}
					>
						Full Stack Developer
					</p>

					{/* Description */}
					<p
						style={{
							fontSize: "24px",
							color: "#a0aec0",
							margin: "0 0 32px 0",
							lineHeight: 1.4,
						}}
					>
						React • Next.js • Node.js • TypeScript • AWS
					</p>

					{/* CTA */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							padding: "16px 32px",
							background: "#4fd1c5",
							borderRadius: "8px",
							color: "#0a0a0a",
							fontSize: "24px",
							fontWeight: "bold",
						}}
					>
						View Portfolio →
					</div>
				</div>
			</div>
		),
		{
			...size,
		}
	);
}

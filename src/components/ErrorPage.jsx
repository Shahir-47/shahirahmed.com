"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Error from "@/assets/error.svg";
import { Button, Box, Typography } from "@mui/material";
import {
	Home as HomeIcon,
	Info as InfoIcon,
	Code as CodeIcon,
	ContactMail as ContactMailIcon,
} from "@mui/icons-material";

const ErrorPage = () => {
	const router = useRouter();

	return (
		<Box
			sx={{
				textAlign: "center",
				padding: "2rem",
				color: "#e0e0e0",
				flex: 1,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Image
				src={Error}
				alt="404 Error"
				className="error-img"
				width={300}
				height={300}
				priority
			/>
			<Typography
				variant="h2"
				sx={{
					color: "#4fd1c5",
					marginBottom: "1rem",
					fontSize: "2.5rem", // Default
					// Font size breakpoints
					"@media (max-width: 1024px)": {
						fontSize: "2rem",
					},
					"@media (max-width: 768px)": {
						fontSize: "1.75rem",
					},
					"@media (max-width: 425px)": {
						fontSize: "1.5rem",
					},
					"@media (min-width: 2560px)": {
						fontSize: "3.5rem",
					},
				}}
			>
				404 - Page Not Found
			</Typography>
			<Typography
				variant="h6"
				sx={{
					marginBottom: "2rem",
					fontSize: "1.25rem", // Default
					// Font size breakpoints
					"@media (max-width: 1024px)": {
						fontSize: "1rem",
					},
					"@media (max-width: 768px)": {
						fontSize: "1rem",
					},
					"@media (max-width: 425px)": {
						fontSize: "1rem",
					},
					"@media (min-width: 2560px)": {
						fontSize: "1.5rem",
					},
				}}
			>
				The page you are looking for does not exist.
			</Typography>
			<Box
				sx={{
					display: "flex",
					gap: "1rem",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				<Button
					variant="contained"
					startIcon={<HomeIcon />}
					onClick={() => router.push("/")}
					sx={{
						backgroundColor: "#4fd1c5",
						color: "#222",
						fontWeight: "bold",
						fontSize: "1rem",
						"&:hover": {
							backgroundColor: "#a569bd",
							boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
							color: "#fff",
						},
						// Font size breakpoints for buttons
						"@media (max-width: 1024px)": {
							fontSize: "0.875rem",
						},
						"@media (max-width: 768px)": {
							fontSize: "0.75rem",
						},
						"@media (max-width: 425px)": {
							fontSize: "0.65rem",
						},
						"@media (min-width: 2560px)": {
							fontSize: "1.25rem",
						},
					}}
				>
					Go to Home
				</Button>
				<Button
					variant="contained"
					startIcon={<InfoIcon />}
					onClick={() => router.push("/about")}
					sx={{
						backgroundColor: "#4fd1c5",
						color: "#222",
						fontWeight: "bold",
						fontSize: "1rem",
						"&:hover": {
							backgroundColor: "#a569bd",
							boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
							color: "#fff",
						},
						// Font size breakpoints for buttons
						"@media (max-width: 1024px)": {
							fontSize: "0.875rem",
						},
						"@media (max-width: 768px)": {
							fontSize: "0.75rem",
						},
						"@media (max-width: 425px)": {
							fontSize: "0.65rem",
						},
						"@media (min-width: 2560px)": {
							fontSize: "1.25rem",
						},
					}}
				>
					About Me
				</Button>
				<Button
					variant="contained"
					startIcon={<CodeIcon />}
					onClick={() => router.push("/projects")}
					sx={{
						backgroundColor: "#4fd1c5",
						color: "#222",
						fontWeight: "bold",
						fontSize: "1rem",
						"&:hover": {
							backgroundColor: "#a569bd",
							boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
							color: "#fff",
						},
						// Font size breakpoints for buttons
						"@media (max-width: 1024px)": {
							fontSize: "0.875rem",
						},
						"@media (max-width: 768px)": {
							fontSize: "0.75rem",
						},
						"@media (max-width: 425px)": {
							fontSize: "0.65rem",
						},
						"@media (min-width: 2560px)": {
							fontSize: "1.25rem",
						},
					}}
				>
					My Projects
				</Button>
				<Button
					variant="contained"
					startIcon={<ContactMailIcon />}
					onClick={() => router.push("/contact")}
					sx={{
						backgroundColor: "#4fd1c5",
						color: "#222",
						fontWeight: "bold",
						fontSize: "1rem",
						"&:hover": {
							backgroundColor: "#a569bd",
							boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
							color: "#fff",
						},
						// Font size breakpoints for buttons
						"@media (max-width: 1024px)": {
							fontSize: "0.875rem",
						},
						"@media (max-width: 768px)": {
							fontSize: "0.75rem",
						},
						"@media (max-width: 425px)": {
							fontSize: "0.65rem",
						},
						"@media (min-width: 2560px)": {
							fontSize: "1.25rem",
						},
					}}
				>
					Contact Me
				</Button>
			</Box>
		</Box>
	);
};

export default ErrorPage;

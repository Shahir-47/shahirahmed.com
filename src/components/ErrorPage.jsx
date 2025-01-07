import { Button, Box, Typography } from "@mui/material";
import {
	Home as HomeIcon,
	Info as InfoIcon,
	Code as CodeIcon,
	ContactMail as ContactMailIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const navigate = useNavigate();

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
			<Typography variant="h2" sx={{ color: "#4fd1c5", marginBottom: "1rem" }}>
				404 - Page Not Found
			</Typography>
			<Typography variant="h6" sx={{ marginBottom: "2rem" }}>
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
					onClick={() => navigate("/home")}
					sx={{
						backgroundColor: "#4fd1c5",
						color: "#222",
						fontWeight: "bold",
						"&:hover": {
							backgroundColor: "#a569bd",
							boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
							color: "#fff",
						},
					}}
				>
					Go to Home
				</Button>
				<Button
					variant="contained"
					startIcon={<InfoIcon />}
					onClick={() => navigate("/about")}
					sx={{
						backgroundColor: "#4fd1c5",
						color: "#222",
						fontWeight: "bold",
						"&:hover": {
							backgroundColor: "#a569bd",
							boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
							color: "#fff",
						},
					}}
				>
					About Me
				</Button>
				<Button
					variant="contained"
					startIcon={<CodeIcon />}
					onClick={() => navigate("/projects")}
					sx={{
						backgroundColor: "#4fd1c5",
						color: "#222",
						fontWeight: "bold",
						"&:hover": {
							backgroundColor: "#a569bd",
							boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
							color: "#fff",
						},
					}}
				>
					My Projects
				</Button>
				<Button
					variant="contained"
					startIcon={<ContactMailIcon />}
					onClick={() => navigate("/contact")}
					sx={{
						backgroundColor: "#4fd1c5",
						color: "#222",
						fontWeight: "bold",
						"&:hover": {
							backgroundColor: "#a569bd",
							boxShadow: "0 4px 15px rgba(165, 105, 189, 0.5)",
							color: "#fff",
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

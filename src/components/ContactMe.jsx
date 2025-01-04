import SocialIcons from "./SocialIcons";
import { useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { Send } from "@mui/icons-material";
import "../css/style.css";

const ContactMe = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [status, setStatus] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus("Sending...");
		setTimeout(() => {
			setStatus("Message sent!");
			setFormData({ name: "", email: "", subject: "", message: "" });
		}, 1500);
	};

	const inputStyle = {
		"& .MuiInputLabel-root": {
			color: "#4fd1c5",
			transition: "color 0.3s ease",
		},
		"& .MuiInputLabel-root.Mui-focused": {
			color: "#a569bd",
		},
		"& .MuiOutlinedInput-root": {
			backgroundColor: "#333",
			borderRadius: "5px",
			"& fieldset": {
				borderColor: "#4fd1c5",
				transition: "border-color 0.3s ease",
			},
			"&:hover fieldset": {
				borderColor: "#4fd1c5",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#a569bd",
			},
		},
		"& .MuiInputBase-input": {
			color: "#e0e0e0",
		},
	};

	return (
		<div className="contact-me-section">
			<Box
				sx={{
					color: "#e0e0e0",
					backgroundColor: "#222",
					padding: "2rem",
					borderRadius: "10px",
					border: "2px solid #4fd1c5",
					maxWidth: "800px",
					margin: "2rem auto",
					boxShadow: "0 4px 10px rgba(0, 0, 0, 0.7)",
				}}
			>
				<Typography
					variant="h4"
					sx={{
						textAlign: "center",
						color: "#4fd1c5",
						fontWeight: "bold",
						marginBottom: "1.5rem",
					}}
				>
					Contact Me
				</Typography>

				<form onSubmit={handleSubmit}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								required
								label="Name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								sx={inputStyle}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								required
								label="Email"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								sx={inputStyle}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								required
								label="Subject"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								sx={inputStyle}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								required
								multiline
								rows={4}
								label="Message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								sx={inputStyle}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sx={{ display: "flex", justifyContent: "center", width: "100%" }}
						>
							<Button
								type="submit"
								variant="contained"
								sx={{
									backgroundColor: "#4fd1c5",
									color: "#222",
									fontWeight: "bold",
									width: "70%",
									transition: "all 0.3s ease",
									boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
									"&:hover": {
										backgroundColor: "#8a2be2",
										color: "#fff",
										boxShadow: "0 6px 20px rgba(138, 43, 226, 0.5)",
									},
								}}
								startIcon={<Send />}
							>
								Send Message
							</Button>
						</Grid>
					</Grid>
				</form>
				{status && (
					<Typography
						sx={{
							marginTop: "1rem",
							textAlign: "center",
							color: status === "Message sent!" ? "#4fd1c5" : "#e0e0e0",
						}}
					>
						{status}
					</Typography>
				)}
			</Box>

			{/* Social Section */}
			<Box
				sx={{
					marginTop: "2rem",
					textAlign: "center",
					color: "#e0e0e0",
				}}
			>
				<Typography
					variant="h5"
					sx={{ color: "#4fd1c5", fontWeight: "bold", marginBottom: "1rem" }}
				>
					Connect with Me
				</Typography>
				<SocialIcons />
			</Box>
		</div>
	);
};

export default ContactMe;

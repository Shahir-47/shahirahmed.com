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
								sx={{
									"& .MuiInputLabel-root": { color: "#4fd1c5" },
									"& .MuiOutlinedInput-root": {
										backgroundColor: "#333",
										borderRadius: "5px",
										"& fieldset": { borderColor: "#4fd1c5" },
										"&:hover fieldset": { borderColor: "#4fd1c5" },
										"&.Mui-focused fieldset": { borderColor: "#4fd1c5" },
									},
									"& .MuiInputBase-input": { color: "#e0e0e0" },
								}}
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
								sx={{
									"& .MuiInputLabel-root": { color: "#4fd1c5" },
									"& .MuiOutlinedInput-root": {
										backgroundColor: "#333",
										borderRadius: "5px",
										"& fieldset": { borderColor: "#4fd1c5" },
										"&:hover fieldset": { borderColor: "#4fd1c5" },
										"&.Mui-focused fieldset": { borderColor: "#4fd1c5" },
									},
									"& .MuiInputBase-input": { color: "#e0e0e0" },
								}}
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
								sx={{
									"& .MuiInputLabel-root": { color: "#4fd1c5" },
									"& .MuiOutlinedInput-root": {
										backgroundColor: "#333",
										borderRadius: "5px",
										"& fieldset": { borderColor: "#4fd1c5" },
										"&:hover fieldset": { borderColor: "#4fd1c5" },
										"&.Mui-focused fieldset": { borderColor: "#4fd1c5" },
									},
									"& .MuiInputBase-input": { color: "#e0e0e0" },
								}}
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
								sx={{
									"& .MuiInputLabel-root": { color: "#4fd1c5" },
									"& .MuiOutlinedInput-root": {
										backgroundColor: "#333",
										borderRadius: "5px",
										"& fieldset": { borderColor: "#4fd1c5" },
										"&:hover fieldset": { borderColor: "#4fd1c5" },
										"&.Mui-focused fieldset": { borderColor: "#4fd1c5" },
									},
									"& .MuiInputBase-input": { color: "#e0e0e0" },
								}}
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
									"&:hover": { backgroundColor: "#2c3e50", color: "#e0e0e0" },
									width: "70%",
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
		</div>
	);
};

export default ContactMe;

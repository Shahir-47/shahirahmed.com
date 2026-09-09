"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import SocialIcons from "./SocialIcons";
import ContactArt from "./ContactArt";

const SERVICE_ID = "service_iyuxx8p";
const TEMPLATE_ID = "template_74oen19";
const PUBLIC_KEY = "AiHK5cxHw1zrw4AYR";

const EMPTY = { name: "", email: "", subject: "", message: "" };

const ContactMe = () => {
	const [formData, setFormData] = useState(EMPTY);
	const [status, setStatus] = useState("");
	const [sending, setSending] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((current) => ({ ...current, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSending(true);
		setStatus("Sending your message.");

		emailjs
			.send(
				SERVICE_ID,
				TEMPLATE_ID,
				{
					from_name: formData.name,
					from_email: formData.email,
					subject: formData.subject,
					message: formData.message,
				},
				PUBLIC_KEY
			)
			.then(
				() => {
					setFormData(EMPTY);
					setSending(false);
					setStatus("Message sent. I'll get back to you.");
				},
				() => {
					setSending(false);
					setStatus(
						"Something went wrong. You can email me directly at shahir.a@outlook.com."
					);
				}
			);
	};

	return (
		<div className="contact-me-section">
			<div className="contact-layout">
				<div className="contact-intro">
					<h1 className="home-heading">
						Got a project in <span className="accent">mind?</span>
					</h1>
					<p className="home-copy">
						Roles, freelance work, open source, or a question about anything on
						this site. I read everything that comes in and I reply.
					</p>
					<ContactArt className="contact-art" />
				</div>

				<form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
					<div className="contact-row">
						<TextField
							fullWidth
							required
							label="Your name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							autoComplete="name"
						/>
						<TextField
							fullWidth
							required
							type="email"
							label="Your email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							autoComplete="email"
						/>
					</div>

					<TextField
						fullWidth
						required
						label="Subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
					/>

					<TextField
						fullWidth
						required
						multiline
						minRows={6}
						label="Your message"
						name="message"
						value={formData.message}
						onChange={handleChange}
					/>

					<div className="contact-actions">
						<Button
							type="submit"
							variant="contained"
							disabled={sending}
							endIcon={<Send />}
							sx={{
								backgroundColor: "#00adb5",
								color: "#eeeeee",
								px: 4,
								py: 1.25,
								"&:hover": { backgroundColor: "#00c8d1" },
							}}
						>
							{sending ? "Sending" : "Send message"}
						</Button>
						<p className="contact-status" role="status">
							{status}
						</p>
					</div>


					<div className="contact-connect">
						<h2 className="contact-connect-title">
							Feel free to <span className="accent">connect</span> with me
						</h2>
						<SocialIcons />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactMe;

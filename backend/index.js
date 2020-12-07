const path = require("path");
const buildPath = path.join(__dirname, "..", "build");
const transporter = require("./config");
const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(buildPath));

app.post("/send", (req, res) => {
	try {
		const mailOptions = {
			from: req.body.email,
			to: process.env.email,
			subject: req.body.subject,
			html: `
            <p>You have a new contact request</p>
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
                <li>Subject: ${req.body.subject}</li>
                <li>Message: ${req.body.message}</li>
            </ul>
            `,
		};

		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				res.status(500).send({
					success: false,
					message: "Something went wrong. Try again later",
				});
			} else {
				res.send({
					success: true,
					message: "Your message has been received. Thanks for contacting us.",
				});
			}
		});
	} catch (err) {
		res.status(500).send({
			success: false,
			message: "Something went wrong. Try again later",
		});
	}
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server running"));

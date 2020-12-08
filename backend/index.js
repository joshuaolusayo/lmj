const path = require("path");
const bodyParser = require("body-parser");
const buildPath = path.join(__dirname, "..", "build");
// const mailChimp = require("mailchimp-api-v3");
const transporter = require("./config");
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(buildPath));
app.use(bodyParser.json());

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
				console.log(err);
				console.log(err.message);
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
		console.log(err);
		console.log(err.message);
		res.status(500).send({
			success: false,
			message: "Something went wrong. Try again later",
		});
	}
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
	res.sendFile(path.join(`${buildPath}/index.html`));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running"));

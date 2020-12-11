const path = require("path");
const bodyParser = require("body-parser");
const transporter = require("./config");
const dotenv = require("dotenv");
dotenv.config();

const mailgun = require("mailgun-js")({
	apiKey: process.env.mailgunApiKey,
	domain: process.env.mailgunDomain,
});

const express = require("express");
const app = express();

const buildPath = path.join(__dirname, "..", "build");

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(buildPath));

app.post("/send", (req, res) => {
	try {
		const mailOptions = {
			from: req.body.email,
			to: "contactolamiju@gmail.com",
			subject: req.body.subject,
			html: `
            <p>You have a new message</p>
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
			message: "Could not send your message. Try again later",
		});
	}
});

app.post("/subscribe", (req, res) => {
	const { email } = req.body;
	let list = mailgun.lists(process.env.mailgunList);

	const newMember = {
		subscribed: true,
		address: email,
		upsert: "yes",
	};

	list.members().create(newMember, function (err, data) {
		if (err) {
			console.log("error");
			res.status(404).send({ subscribed: "Failed" });
		} else {
			res.sendStatus(200);
		}
	});
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
	res.sendFile(path.join(`${buildPath}/index.html`));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running"));

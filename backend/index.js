const path = require("path");
const bodyParser = require("body-parser");
const request = require("request");
const transporter = require("./config");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

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
			message: "Coult not send your message. Try again later",
		});
	}
});

app.post("/subscribe", (req, res) => {
	const { email } = req.body;
	const mcData = {
		members: [
			{
				email_address: email,
				status: "pending",
			},
		],
	};

	const mcDataPost = JSON.stringify(mcData);

	const options = {
		url: process.env.mailchimpUrl,
		method: "POST",
		headers: {
			Authorization: `auth ${process.env.mailchimpApiKey}`,
		},
		body: mcDataPost,
	};

	if (email) {
		request(options, (err, response, body) => {
			if (err) {
				res.json({ error: err });
			} else {
				res.sendStatus(200);
			}
		});
	} else {
		res.status(404).send({ message: "Failed" });
	}
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
	res.sendFile(path.join(`${buildPath}/index.html`));
});

// Connect to database

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/database", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => console.log("mongoose is connected"));

// Schema
// const Schema = mongoose.Schema;
// const BlogPostSchema = new Schema({
// 	tag: String,
// 	image: String,
// 	heading: String,
// 	date: {
// 		type: String,
// 		default: Date.now(),
// 	},
// 	quoteStart: String,
// 	quoteStartAuthor: String,
// 	quoteEnd: String,
// 	quoteEndAuthor: String,
// 	intro: String,
// 	section: Object,
// });

// Model
// const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

// Saving data to the database
// const data = {};

// const newBlogPost = new BlogPost(data); // instance of the model

// newBlogPost.save((error) => {
// 	if (error) {
// 		console.log("An error happens");
// 	} else {
// 		console.log("Data stored to database");
// 	}
// });

// app.get("/api/v1", (req, res) => {
// 	BlogPost.find({})
// 		.then((data) => {
// 			console.log(`Data: ${data}`);
// 			res.json(data);
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running"));

// const path = require("path");
// const buildPath = path.join(__dirname, "..", "build");
// const transporter = require("./config");
// const dotenv = require("dotenv");
// dotenv.config();

// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use(express.static(buildPath));

// app.post("/send", (req, res) => {
// 	try {
// 		const mailOptions = {
// 			from: req.body.email,
// 			to: process.env.email,
// 			subject: req.body.subject,
// 			html: `
//             <p>You have a new contact request</p>
//             <h3>Contact Details</h3>
//             <ul>
//                 <li>Name: ${req.body.name}</li>
//                 <li>Email: ${req.body.email}</li>
//                 <li>Subject: ${req.body.subject}</li>
//                 <li>Message: ${req.body.message}</li>
//             </ul>
//             `,
// 		};

// 		transporter.sendMail(mailOptions, (err, info) => {
// 			if (err) {
// 				res.status(500).send({
// 					success: false,
// 					message: "Something went wrong. Try again later",
// 				});
// 			} else {
// 				res.send({
// 					success: true,
// 					message: "Your message has been received. Thanks for contacting us.",
// 				});
// 			}
// 		});
// 	} catch (err) {
// 		res.status(500).send({
// 			success: false,
// 			message: "Something went wrong. Try again later",
// 		});
// 	}
// });

// app.listen(5000, () => console.log("Server running"));





// const path = require("path");
// const buildPath = path.join(__dirname, "..", "build");
// const transporter = require("./config");
// const dotenv = require("dotenv");
// dotenv.config();

// const morgan = require("morgan");

// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use(express.static(buildPath));

// app.post("/send", (req, res) => {
// 	try {
// 		const mailOptions = {
// 			from: req.body.email,
// 			to: process.env.email,
// 			subject: req.body.subject,
// 			html: `
//             <p>You have a new contact request</p>
//             <h3>Contact Details</h3>
//             <ul>
//                 <li>Name: ${req.body.name}</li>
//                 <li>Email: ${req.body.email}</li>
//                 <li>Subject: ${req.body.subject}</li>
//                 <li>Message: ${req.body.message}</li>
//             </ul>
//             `,
// 		};

// 		transporter.sendMail(mailOptions, (err, info) => {
// 			if (err) {
// 				res.status(500).send({
// 					success: false,
// 					message: "Something went wrong. Try again later",
// 				});
// 			} else {
// 				res.send({
// 					success: true,
// 					message: "Your message has been received. Thanks for contacting us.",
// 				});
// 			}
// 		});
// 	} catch (err) {
// 		res.status(500).send({
// 			success: false,
// 			message: "Something went wrong. Try again later",
// 		});
// 	}
// });

// app.use(morgan("tiny")); // logging framework

// // Serve our api message
// app.get("/api/message", async (req, res, next) => {
// 	try {
// 		res.status(201).json({ message: "HELLOOOOO FROM EXPRESS" });
// 	} catch (err) {
// 		next(err);
// 	}
// });

// if (process.env.NODE_ENV === "production") {
// 	// Express will serve up production assets
// 	app.use(express.static("build"));

// 	// Express will serve up the front-end index.html file if it doesn't recognize the route
// 	app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));
// }

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log("Server running"));

const nodemailer = require("nodemailer");
const nodemailerGun = require("nodemailer-mailgun-transport");
const dotenv = require("dotenv");
dotenv.config();

const auth = {
	auth: {
		api_key: `${process.env.mailgunApiKey}`,
		domain: `${process.env.mailgunDomain}`
	},
};

let transporter = nodemailer.createTransport(nodemailerGun(auth));

module.exports = transporter;

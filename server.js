// require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require("morgan");
var axios = require("axios");
var cheerio = require("cheerio");

const cors = require('cors');
app.use(cors());


var db = require("./models")
// Define middleware here

// Use morgan logger for logging requests
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

const mongoose = require('mongoose');
const MONGODB_URI =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/musichub';
mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true })
	.then(() => {
		console.log('🗄 ==> Successfully connected to mongoDB.');
	})
	.catch(err => {
		console.log(`Error connecting to mongoDB: ${err}`);
	});

// Define API routes here
require('./controller/discover')(app);
require('./controller/users')(app);
require('./controller/skills')(app);
require('./controller/status')(app);
require('./controller/musicnews')(app);


// $('#scrapeArticlesButton').on("click", function(event) {
app.get("/news", function (req, res) {
	console.log("IAM HERE ")
	// First, we grab the body of the html with axios
	axios.get("https://www.billboard.com/news").then(function (response) {
		// Then, we load that into cheerio and save it to $ for a shorthand selector
		var $ = cheerio.load(response.data);

		var newsScraped = [];
		$("h3.content-title").each(function (i, element) {
			// Save an empty result object
			var result = {};

			// Add the text and href of every link, and save them as properties of the result object
			result.title = $(this).text();
			// working in the broswer having issue in the running - result.summary =  $(this).nextElementSibling.innerText;
			result.link = $(this).children().attr("href");

			result.image = $(this).parent().parent().find(".image-container img").attr("src");


			newsScraped.push(result);
			// // Create a new Article using the `result` object built from scraping
			// db.news.create(result)
			// 	.then(function (dbNews) {
			// 		// View the added result in the console
			// 		console.log('show me the new article', dbNews);
			// 	})
			// 	.catch(function (err) {
			// 		// If an error occurred, log it
			// 		console.log(err);
			// 	});
		});

		res.json(newsScraped)

		// Send a message to the client
		//   res.send("Your scrape had been successfully completed ");
	
	});
});



// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});

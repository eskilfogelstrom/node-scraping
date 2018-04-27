var fetch = require('node-fetch');
var cheerio = require('cheerio');
var fs = require('fs');

function scrapeMovie(url) {
	return fetch(url)
		.then(function(response) {
			return response.text();
		})
		.then(function(page) {
			var $ = cheerio.load(page);

			// Your scraping here
			var title = $('.title_wrapper > h1').text();
			var rating = $('.ratingValue > strong > span').text();
			return {
				title: title,
				rating: rating
			};
		});
}

var urls = [
	'https://www.imdb.com/title/tt0111161/',
	'https://www.imdb.com/title/tt0068646/',
];

var scrapePromises = [];

urls.forEach(function(url) {
	scrapePromises.push(scrapeMovie(url));
});

Promise.all(scrapePromises)
	.then(function(titles) {
		var json = JSON.stringify(titles);
		fs.writeFile('movies.json', json);
	});
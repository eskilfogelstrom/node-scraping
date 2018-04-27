const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');

function scrapeMovie(url) {
	return fetch(url)
		.then(response => response.text())
		.then(page => {
			const $ = cheerio.load(page);
			// Your code goes here

			const title = $('.title_wrapper > h1').text();
			const rating = $('.ratingValue > strong > span').text();
			const time = $('#titleDetails > .txt-block > time').first().text();

			return {
				title: title.trim(),
				rating,
				time
			};
		});
}

fetch('https://www.imdb.com/chart/top')
	.then(response => response.text())
	.then(page => {
		const $ = cheerio.load(page);
		// Your code goes here

		const scrapePromises = [];

		const links = $('.titleColumn > a');

		links.each(function(index, link) {
			const href = 'https://imdb.com' + $(link).attr('href');
			scrapePromises.push(scrapeMovie(href));
		});

		Promise.all(scrapePromises)
			.then(data => {
				const json = JSON.stringify(data);
				fs.writeFile('movies.json', json);
			});
	});

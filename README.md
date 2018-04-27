# node-scraping
A simple scraping setup that can be modified. Built with `node-fetch` and `cheerio`.

## Requirements
This requires you to have node installed (https://nodejs.org/en/).

## Installing
Download `.zip` and extract or if you now what you're doing:
`git clone https://github.com/eskilfogelstrom/node-scraping`

Open up terminal and navigate to the folder you placed it in using `cd path/to/scraping`. If you've cloned it with git this should be `cd node-scraping`.

Run `npm install` to install the required packages.

## Running
In your folder run `node part-X.js` where X will be whichever script you would like (see below).

## part-1.js
Simple setup for scraping a hardcoded list of IMDB movie urls.

Example output `movies.json`:
```js
[
  {
    "title": "Shawshank...",
    "rating": "9.3"
  },
  // Other movies will follow here
]
```

## part-2.js
This script will first scrape the top 250 list from IMDB and then scrape the title, rating and duration of each movie.

Example output `movies.json`:
```js
[
  {
    "title": "Shawshank...",
    "rating": "9.3",
    "duration": "168 min"
  },
  // Other movies will follow here
]
```

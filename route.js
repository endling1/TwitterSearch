const express = require('express');
const fs = require('fs');
const searchFactory = require('./searchWrapper.js');
const clientFactory = require('./twitterClient.js');
const credentials = JSON.parse(fs.readFileSync('./keys.json'));
const router = express.Router();

const client = clientFactory(credentials.CK, credentials.CS, credentials.AT, credentials.ATS);
const search = searchFactory(client);

router.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/public/index.html');
});

router.get('/search', (req, res, next) => {
	search.standardSearch(req.query.q)
	.then((tweets) => res.json(tweets, null, 3))
	.catch((err) => {
		console.log(err);
		res.status(400).send();
	});
});

module.exports = router;
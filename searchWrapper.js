const searchFactory = require('./search.js');

class SearchWrapper {
	constructor(client){
		this.search = searchFactory(client);
		this.cache = {};
	}

	standardSearch(query){
		const cache = this.cache;
		if(cache[query]){
			return cache[query];
		}

		cache[query] = this.search.standardSearch(query).then((tweets) => {
			setTimeout(() => delete cache[query], 30 * 1000);
			return tweets;
		})
		.catch((err) => {
			delete cache[query];
			throw err;
		});

		return cache[query];
	}
}

module.exports = function(client){
	return new SearchWrapper(client);
}
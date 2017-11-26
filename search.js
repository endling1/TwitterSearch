class Search {
	constructor(client){
		this.client = client;
	}

	standardSearch(query){
		return this.client.get('/search/tweets', {q: query});
	}
}

module.exports = (client) => new Search(client);
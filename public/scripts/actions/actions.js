const Dispatcher = require('../dispatcher/dispatcher');
const ActionTypes = require('../utils/actionTypes');
const Api = require('../utils/Api');
const Constants = require('../utils/constants');

module.exports = {
	updateSearch: (query) => {
		Dispatcher.dispatch({
			type: ActionTypes.UPDATE_SEARCH,
			data: query
		});	
	},

	getTweets: (query) => {
		Api.get(Constants.GET_TWEETS + query, (res) => {
			Dispatcher.dispatch({
				type: ActionTypes.GET_TWEETS,
				data: res
			});
		});
	}
}
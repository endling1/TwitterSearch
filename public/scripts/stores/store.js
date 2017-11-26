const EventEmitter = require('events').EventEmitter;
const Dispatcher = require('../dispatcher/dispatcher');
const ActionTypes = require('../utils/actionTypes');

class HeaderStore extends EventEmitter {
	constructor(){
		super();
		this.model = {
			searchValue: ''
		};
		this.CHANGE_EVENT = 'change';
	}

	addChangeListener(listener){
		this.on(this.CHANGE_EVENT, listener);
	}

	removeChangeListener(listener){
		this.removeListener(this.CHANGE_EVENT, listener);
	}

	emitChange(){
		this.emit(this.CHANGE_EVENT);
	}

	getModel(){
		return this.model;
	}

	setModel(searchValue){
		this.model.searchValue = searchValue;
		this.emitChange();
	}
}

class BodyStore extends EventEmitter {
	constructor(){
		super();
		this.model = [];
		this.CHANGE_EVENT = 'change';
	}

	addChangeListener(listener){
		this.on(this.CHANGE_EVENT, listener);
	}

	removeChangeListener(listener){
		this.removeListener(this.CHANGE_EVENT, listener);
	}

	emitChange(){
		this.emit(this.CHANGE_EVENT);
	}

	getModel(){
		return this.model;
	}

	setModel(newmodel){
		this.model = this.parse(newmodel);
		this.emitChange();
	}

	parse(newmodel){
		return newmodel.statuses.map((status) => {
			var obj = Object.create(null);
			obj.text = status.text;
			obj.user = status.user.name;
			obj.image = status.user.profile_image_url;
			return obj;
		});
	}
}

var headerStore = new HeaderStore();
var bodyStore = new BodyStore();

Dispatcher.register(function(payload){
	switch(payload.type){
		case ActionTypes.UPDATE_SEARCH: {
			headerStore.setModel(payload.data);
		}
		break;
		case ActionTypes.GET_TWEETS: {
			bodyStore.setModel(payload.data);
		}
	}
});

module.exports = {
	HeaderStore : headerStore,
	BodyStore: bodyStore
}
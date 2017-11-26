const httpRequest = new XMLHttpRequest();

exports.get = (url, cb) => {
	httpRequest.onreadystatechange = function(){
		if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
			cb(JSON.parse(this.response));
		}
	}
	httpRequest.open('GET', url);
	httpRequest.send();
};
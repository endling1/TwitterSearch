const React = require('react');
const bootstrap = require('bootstrap');

class Card extends React.Component {
	render(){
		return (
			<div className="card col-xs-4">
			  <img className="card-img-top" src={this.props.imgsrc} alt="Card image cap"/>
			  <div className="card-block">
			    <h4 className="card-title">{this.props.title}</h4>
			    <p className="card-text">{this.props.text}</p>
			  </div>
			 </div>
			)
	}
}

module.exports = Card;
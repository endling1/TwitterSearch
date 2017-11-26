const React = require('react');
const bootstrap = require('bootstrap');

class Button extends React.Component {
	render(){
		return (
			<button onClick={this.props.onClick} className="btn btn-secondary" type="button">{this.props.buttonText}</button>
			);
	}
}

module.exports = Button;
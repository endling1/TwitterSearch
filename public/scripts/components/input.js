const React = require('react');
const bootstrap = require('bootstrap');

class Input extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<input onKeyPress={this.props.handleKeyPress} type="text" onChange={this.props.onChange} value={this.props.value} className="form-control" placeholder={this.props.placeholder} aria-label={this.props.ariaLabel}/>
			);
	}
}

module.exports = Input;
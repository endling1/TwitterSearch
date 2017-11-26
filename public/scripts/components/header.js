const React = require('react');
const bootstrap = require('bootstrap');
const Actions = require('../actions/actions');
const Store = require('../stores/store').HeaderStore;

const Input = require('./input');
const Button = require('./button');

class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = Store.getModel();
		this.inputChange = this.inputChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.stateChange = this.stateChange.bind(this);
		this.buttonClick = this.buttonClick.bind(this);
	}

	componentWillMount(){
		Store.addChangeListener(this.stateChange);
	}

	componentWillUnmount(){
		Store.removeChangeListener(this.stateChange);
	}

	render(){
		return (
			<div className='col-xs-12'>
				<div className="input-group">
			      <Input handleKeyPress={this.handleKeyPress} onChange={this.inputChange} value={this.state.searchValue} placeholder="Search tweets..." ariaLabel="Search tweets..."/>
			      <span className="input-group-btn">
			        <Button onClick={this.buttonClick} buttonText="Go!" />
			      </span>
	    		</div>
    		</div>
			);
	}

	inputChange(e){
		Actions.updateSearch(e.target.value);
	}

	stateChange(){
		this.setState(Store.getModel());
	}

	buttonClick(){
		Actions.getTweets(this.state.searchValue);
	}

	handleKeyPress(e){
		if(e.key === 'Enter'){
			this.buttonClick();
		}
	}
}

module.exports = Header;
const React = require('react');
const bootstrap = require('bootstrap');

const Actions = require('../actions/actions');
const Store = require('../stores/store').BodyStore;
const Card = require('./card');

class Body extends React.Component {
	constructor(props){
		super(props);
		this.state = {data: Store.getModel()};
		this.stateChange = this.stateChange.bind(this);
	}

	componentWillMount(){
		Store.addChangeListener(this.stateChange);
	}

	componentWillUnmount(){
		Store.removeChangeListener(this.stateChange);
	}

	render(){
		if(!this.state.data.length){
			return null;
		}
		return (
			<div className='col-xs-12'>
				{
					this.state.data.map((obj, i) => {
						return (
							<Card key={i} imgsrc={obj.image} title={obj.user} text={obj.text} /> 
							)
					})
				}
			</div>
			);
	}

	stateChange(){
		this.setState((prevState, props) => {
			return {data: Store.getModel()};
		});
	}
}

module.exports = Body;
const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./header');
const Body = require('./body');
const bootstrap = require('bootstrap');

class App extends React.Component {

	render(){
		return (
			<div className='container'>
				<div className='row'>
					<Header />
				</div>
				<div className='row'>
					<Body />
				</div>
			</div>
			);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import robots from '../robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
	constructor() {
		super()
		this.state = {
	    robots: robots,
	    searchfield: '',
    };
	};

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
		console.log(event.target.value);
	};

	render() {
			const filteredRobots = this.state.robots.filter((robot) => {
			  return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		  },);
		  return (
				<div className='tc'>
					<h1 className='f1'> Robofriends </h1>
					<Searchbox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<Cardlist robots={filteredRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>
	    );
		}

}

export default App;
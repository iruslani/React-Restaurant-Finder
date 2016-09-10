import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import GeoLocation from './components/GeoLocation';
import UserInput from './components/UserInput';
import RestaurantList from './components/RestaurantList';


class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      query: 'pizza',
    };
		this.handleQuerysubmit = this.handleQuerysubmit.bind(this);
  }
	handleQuerysubmit(e) {
		console.log('Clicked');
		console.log(e);
		// this.setState = ({
		// 	query: 'hamburgers'
		// });
	}
  render() {
    return (
      <div className="App">
				<Header />
        <div className="container">
					<div className="row">
						<div className="col-sm-7 col-xs-12">
							<GeoLocation />
							<UserInput />
      			</div>
						<div className="col-sm-5 col-xs-12">
      				<RestaurantList query={this.state.query}/>
      			</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

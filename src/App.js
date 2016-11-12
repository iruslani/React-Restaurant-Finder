import React, { Component } from 'react';
import './styles/app.scss'
import Header from './components/Header';
import RestaurantContainer from './components/RestaurantContainer';


class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      query: 'pizza',
    };
  }
  render() {
    return (
      <div className="App">
				<Header />
        <div className="container">
					<RestaurantContainer query={this.state.query}/>
        </div>
      </div>
    );
  }
}

export default App;

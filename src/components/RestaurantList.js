import React, { Component } from 'react';
import 'whatwg-fetch';
import {checkStatus, parseJSON} from '../utilities/index';

class RestaurantList extends Component {
	constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
			query: this.props.query
    };
  }
	componentDidMount() {
		var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20local.search%20where%20zip%3D'94085'%20and%20query%3D'pizza'&format=json&diagnostics=true&callback="
		fetch(url)
			.then(checkStatus)
			.then(parseJSON)
			.then(function(data) {
				console.log('request succeeded with JSON response', data.query.results.Result)
				var results = data.query.results.Result
				this.setState({restaurants :  results});
			}.bind(this)).catch(function(error) {
				console.log('request failed', error)
			})
	}
	render() {
		console.log(this.state)
		console.log(this.props)
		var restaurants = this.state.restaurants || [];
    return (
			<div>
	      <ul className="list-group">
					{restaurants.map(function(restaurants){
							return <li key={restaurants.id} className="list-group-item">Name: {restaurants.Title} - City: {restaurants.City}</li>
					})}
	      </ul>
			</div>
    )
  }
}
export default RestaurantList;

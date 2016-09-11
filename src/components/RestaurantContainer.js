import React, { Component } from 'react';
import 'whatwg-fetch';
import {checkStatus, parseJSON} from '../utilities/index';

class RestaurantList extends Component {
	constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
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
				{this.props.sort}
				<p>{this.props.query}</p>
				<ul className="list-group">
					{restaurants.map(function(restaurant){
							return <li key={restaurant.id} className="list-group-item">Name: {restaurant.Title} - City: {restaurant.City}</li>
					})}
				</ul>
			</div>
		)
	}
}

class RestaurantContainer extends Component {
	constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
			sort: 'distance',
			query: this.props.query
    };
		this.toggleSortRatings = this.toggleSortRatings.bind(this);
		this.toggleSortDistance = this.toggleSortDistance.bind(this);
  }
	toggleSortDistance() {
		this.setState({sort :'distance'});
	}
	toggleSortRatings() {
		this.setState({sort :'ratings'});
	}
	render() {

    return (
			<div>
				<h3>Suggested restaurants:</h3>
				<p>Sort by:</p>
				<ul className="nav nav-pills">
				  <li role="presentation" onClick={this.toggleSortDistance} className={this.state.sort === 'distance' ? 'active' : ''}><a href="#">Distance</a></li>
				  <li role="presentation" onClick={this.toggleSortRatings} className={this.state.sort === 'ratings' ? 'active' : ''}><a href="#">Ratings</a></li>
				</ul>
				<RestaurantList sort={this.state.sort} query={this.state.query}/>
			</div>
    )
  }
}
export default RestaurantContainer;

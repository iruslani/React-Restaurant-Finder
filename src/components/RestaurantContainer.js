import React, { Component } from 'react';
import RestaurantList from './RestaurantList';
import {checkStatus, parseJSON} from '../utilities/index';
import GeoLocation from './GeoLocation';
import UserInput from './UserInput';

class RestaurantContainer extends Component {
	constructor(props) {
    super(props);
    this.state = {
			restaurants : [],
			sort: 'ratings',
			query: this.props.query
    };
		this.toggleSortRatings = this.toggleSortRatings.bind(this);
		this.toggleSortDistance = this.toggleSortDistance.bind(this);
		this.updateQuery = this.updateQuery.bind(this);
		this.fetchRestaurants = this.fetchRestaurants.bind(this);
  }
	fetchRestaurants (query) {
		let url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20local.search%20WHERE%20latitude%3D%2237.6536537%22%20and%20longitude%3D%22-122.4656777%22%20and%20query%3D'"+query+"'%20and%20radius%3D%2250%22&format=json&diagnostics=true&callback="
		// let url = "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20local.search%20WHERE%20latitude%3D%2237.6536537%22%20and%20longitude%3D%22-122.4656777%22%20and%20query%3D%22pizza%22%20and%20radius%3D%2220%22&format=json&diagnostics=true&callback="
		fetch(url)
			.then(checkStatus)
			.then(parseJSON)
			.then(function(data) {
				let results = data.query.results.Result
				if (this.state.sort === 'ratings') {
					results = results.sort((a, b) => {
						if(!isFinite(a.Rating.AverageRating-b.Rating.AverageRating))
							 return !isFinite(a.Rating.AverageRating) ? 1 : -1;
						else
							 return b.Rating.AverageRating - a.Rating.AverageRating;
					});
				} else {
					results = results.sort((a, b) => {
						if(!isFinite(a.Distance-b.Distance))
							 return !isFinite(a.Distance) ? 1 : -1;
						else
							 return a.Distance - b.Distance;
					});
				}
				this.setState({
					restaurants :  results
				});
			}.bind(this)).catch(function(error) {
				console.log('request failed', error)
			})
	}
	componentDidMount() {
		this.fetchRestaurants('pizza');
	}
	updateQuery(query){
		this.setState({query :query});
		this.fetchRestaurants(query);
	}
	toggleSortDistance(e) {
		e.preventDefault();
		let results = this.state.restaurants
		results = this.state.restaurants.sort((a, b) => {
			if(!isFinite(a.Distance-b.Distance))
				 return !isFinite(a.Distance) ? 1 : -1;
			else
				 return a.Distance - b.Distance;
		});
		this.setState({
			sort :'distance',
			restaurants :  results
		});
	}
	toggleSortRatings(e) {
		e.preventDefault();
		let results = this.state.restaurants
		results = this.state.restaurants.sort((a, b) => {
			if(!isFinite(a.Rating.AverageRating-b.Rating.AverageRating))
				 return !isFinite(a.Rating.AverageRating) ? 1 : -1;
			else
				 return b.Rating.AverageRating - a.Rating.AverageRating;
		});
		this.setState({
			sort :'ratings',
			restaurants :  results
		});
	}
	render() {
    return (
			<div className="row">
				<div className="col-sm-4 col-xs-12">
					<GeoLocation />
					<div className="panel panel-default">
					  <div className="panel-heading">
					    <h3 className="panel-title">Sort by:</h3>
					  </div>
					  <div className="panel-body">
						<ul className="nav nav-pills">
							<li role="presentation" onClick={this.toggleSortRatings} className={this.state.sort === 'ratings' ? 'active' : ''}><a href="#">Ratings</a></li>
							<li role="presentation" onClick={this.toggleSortDistance} className={this.state.sort === 'distance' ? 'active' : ''}><a href="#">Distance</a></li>
						</ul>
					  </div>
					</div>
					<UserInput onQuerysubmit={this.updateQuery}/>
				</div>
				<div className="col-sm-8 col-xs-12">
					<h3>Suggested restaurants:</h3>
					<RestaurantList sort={this.state.sort} restaurants={this.state.restaurants} query={this.state.query}/>
				</div>
			</div>
    )
  }
}
export default RestaurantContainer;

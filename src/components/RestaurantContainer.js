import React, { Component } from 'react';
import RestaurantList from './RestaurantList';
import FoursquareList from './FoursquareList';
import {checkStatus, parseJSON} from '../utilities/index';
import GeoLocation from './GeoLocation';
import UserInput from './UserInput';

class RestaurantContainer extends Component {
	constructor(props) {
    super(props);
    this.state = {
			restaurants : [],
			foursquare : [],
			sort: 'ratings',
			query: this.props.query,
			zipcode: 94080
    };
		this.toggleSortRatings = this.toggleSortRatings.bind(this);
		this.toggleSortDistance = this.toggleSortDistance.bind(this);
		this.updateQuery = this.updateQuery.bind(this);
		this.updateZip = this.updateZip.bind(this);
		// this.fetchRestaurants = this.fetchRestaurants.bind(this);
		this.fetchFourSquare = this.fetchFourSquare.bind(this);
  }
	fetchFourSquare (query){
		// let url = 'https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=E3YQN5PP3UJR4CYKYFWBOPCFTYIJVEEYWBPGBEK5DOZ5UZJQ&client_secret=TBCUJQ5Q5Q2XBMDQ40K4LLZFIKSUFLRUCYP4M1PFTXMS5JM4&v=20161112'
		let url = 'http://localhost:8080/api/foursquare/?test=hello&ll=37.6536938,-122.46565609999999&query='+query
		fetch(url)
			.then(checkStatus)
			.then(parseJSON)
			.then(function(data) {
				let results = data.response.groups[0].items
				this.setState({
					foursquare : results
				});
			}.bind(this)).catch(function(error) {
				console.log('request failed', error)
			})
	}


	fetchRestaurants (query, zipcode) {
		// let url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20local.search%20WHERE%20latitude%3D%2237.6536537%22%20and%20longitude%3D%22-122.4656777%22%20and%20query%3D'"+query+"'%20and%20radius%3D%2250%22&format=json&diagnostics=true&callback="
		// let url = "https://query.yahooapis.com/v1/yql?q=select%20*%20from%20local.search%20where%20zip%3D'94015'%20and%20query%3D'"+query+"'&format=json&diagnostics=true&callback="
		let url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20local.search%20where%20zip%3D'"+zipcode+"'%20and%20query%3D'"+query+"'&format=json&diagnostics=true&callback="
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
		this.fetchRestaurants(this.state.query, this.state.zipcode );
		this.fetchFourSquare(this.state.query);
	}
	updateQuery(query){
		this.setState({query :query});
		this.fetchRestaurants(query, this.state.zipcode);
		this.fetchFourSquare(query);
	}
	updateZip(zip){
		this.setState({zip :zip});
		this.fetchRestaurants(this.state.query, zip);
		// console.log("Zip code changes to:" + zip);
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
		console.log('foursquare data')
		console.log(this.state.foursquare)
    return (
			<div className="row">
				<div className="col-sm-4 col-xs-12">
					<div className="panel panel-default">
						<div className="panel-body">
							<UserInput onQuerysubmit={this.updateQuery}/>
						</div>
					</div>
					<GeoLocation onZipchange={this.updateZip} />
				</div>
				<div className="col-sm-8 col-xs-12">
					<h3>Suggested restaurants:</h3>
					<div className="row sort">
						<div className="col-xs-12">
						Sort by:
						<div className="btn-group " role="group" aria-label="...">
							<button onClick={this.toggleSortRatings} className={this.state.sort === 'ratings' ? 'active btn btn-link' : 'btn btn-link'} type="button" >Ratings</button>
							<button onClick={this.toggleSortDistance} className={this.state.sort === 'distance' ? 'active btn btn-link' : 'btn btn-link'} type="button" >Distance</button>
						</div>
						</div>
     			</div>
					{/*<RestaurantList restaurants={this.state.restaurants} />*/}
					<FoursquareList venues={this.state.foursquare} />
				</div>
			</div>
    )
  }
}
export default RestaurantContainer;

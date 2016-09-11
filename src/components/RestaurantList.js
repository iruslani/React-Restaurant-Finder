import React, { Component } from 'react';
import 'whatwg-fetch';
// import {checkStatus, parseJSON} from '../utilities/index';

class RestaurantList extends Component {
	render() {
		var restaurants = this.props.restaurants || [];
		return (
			<div>
				<ul className="list-group">
					{restaurants.map(function(restaurant){
						return (
							<li key={restaurant.id} className="list-group-item">
								{restaurant.Title} <br/>
								City: {restaurant.City} <br/>
								Distance: {restaurant.Distance} <br/>
								Ratings: {restaurant.Rating.AverageRating !== 'NaN' ? restaurant.Rating.AverageRating : '0'}
							</li>
						)

					})}
				</ul>
			</div>
		)
	}
}
export default RestaurantList;

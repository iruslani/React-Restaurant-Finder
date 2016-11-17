import React, { Component } from 'react';
import 'whatwg-fetch';
// import {checkStatus, parseJSON} from '../utilities/index';

class FoursquareList extends Component {
	render() {
		var venues = this.props.venues || [];
		return (
			<div>
				<ul className="list-group">
					{venues.map(function(restaurant){
						return (
							<li key={restaurant.venue.id} className="list-group-item">
								<a href={restaurant.venue.url} >
									<h4 className="list-group-item-heading">{restaurant.venue.name}</h4>
								</a>
								<img src={restaurant.venue.featuredPhotos.items[0].prefix+'100x100'+restaurant.venue.featuredPhotos.items[0].suffix} />
								<p className="list-group-item-text">
								{restaurant.tips ? restaurant.tips[0].text : ''}
								</p>
								<ul>
        					<li>Location: {restaurant.venue.location.address}</li>
        					<li>City: {restaurant.venue.location.city}</li>
        					<li>State: {restaurant.venue.location.state}</li>
        					<li>Zip: {restaurant.venue.location.postalCode}</li>
        					<li>Zip: {restaurant.venue.price.currency}</li>
        					<li>Rating: {restaurant.venue.rating}</li>
        					<li>Url: {restaurant.venue.url}</li>
        					<li>Open: {restaurant.venue.hours ? restaurant.venue.hours.isOpen : 'Unknown'}</li>
        					<li>Contact: {restaurant.venue.contact.formattedPhone}</li>
        				</ul>

							</li>
						)

					})}
				</ul>
			</div>
		)
	}
}
export default FoursquareList;

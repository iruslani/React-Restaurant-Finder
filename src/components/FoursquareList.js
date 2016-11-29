import React, { Component } from 'react';
import 'whatwg-fetch';
// import {checkStatus, parseJSON} from '../utilities/index';

// const VenueListItem = ({label, text}) => {
// 	if (text){
// 		return (
// 			 <li>{`${label} : ${text}`}</li>
// 		)
// 	}
// }
//
// VenueListItem.propTypes = {
// 	label: React.PropTypes.string,
// 	text: React.PropTypes.string
// }


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
								<img src={
									restaurant.venue.featuredPhotos? restaurant.venue.featuredPhotos.items[0].prefix+'100x100'+restaurant.venue.featuredPhotos.items[0].suffix : 'https://placeholdit.imgix.net/~text?txtsize=22&txt=noIMG&w=100&h=100'
									}
								/>
								<p className="list-group-item-text">
								{restaurant.tips ? restaurant.tips[0].text : ''}
								</p>
								<ul>
        					<li>Location: {restaurant.venue.location.address}</li>
        					<li>City: {restaurant.venue.location.city}</li>
        					<li>State: {restaurant.venue.location.state}</li>
        					<li>Zip: {restaurant.venue.location.postalCode}</li>
        					{/*{
										restaurant.venue.price ? <li>Price: restaurant.venue.price.currency </li> : ''
									}*/}
									{/*<VenueListItem label="test" text="this is the description"/>
									<VenueListItem label="test" />*/}
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

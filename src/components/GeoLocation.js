import React, { Component } from 'react';
import 'whatwg-fetch';
import {checkStatus, parseJSON} from '../utilities/index';

class GeoLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude : '',
      longitude : '',
      zipcode : '',
      message : "Fetching your location .."
    };
    this.updatePosition = this.updatePosition.bind(this);
  }
  getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.updatePosition);
      } else {
        this.setState({
          message : 'Geolocation is not supported by this browser. App default location used.',
        })
      }
  }
  getZipcode(lat, long){
    let url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&sensor=false"
    fetch(url)
			.then(checkStatus)
			.then(parseJSON)
			.then(function(data) {
				console.log('ZipCode request succeeded with JSON response')
				console.log(data.results)
        var zipcode = data.results[0].address_components[7].short_name
        this.setState({zipcode :  zipcode});
			}.bind(this)).catch(function(error) {
				console.log('request failed', error)
			})
  }
  updatePosition(position) {
    this.getZipcode(position.coords.latitude, position.coords.longitude);
    var message = "";
    message = "Your location is:";
    this.setState({
      message : message,
      latitude : position.coords.latitude,
      longitude : position.coords.longitude
    });
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.state.message}</h3>
        </div>
        <div className="panel-body">
          <p>{this.state.latitude ? 'Latitude: ' + this.state.latitude : '' }</p>
          <p>{this.state.longitude ? 'Longitude: ' + this.state.longitude : ''}</p>
          <p>{this.state.zipcode ? 'Zipcode: ' + this.state.zipcode : ''}</p>
        </div>
      </div>
    )
  }
}
export default GeoLocation;

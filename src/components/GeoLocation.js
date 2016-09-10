import React, { Component } from 'react';

class GeoLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude : '',
      longitude : '',
      message : "Fetching your location .."
    };
    this.updatePosition = this.updatePosition.bind(this);
  }
  getLocation() {
      console.log()
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.updatePosition);
      } else {
        this.setState({
          message : 'Geolocation is not supported by this browser. App default location used.',
        })
      }
  }
  updatePosition(position) {
      var message = "";
      message = "Your location is:";
      console.log(message)
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
      <div className="col-sm-7 col-xs-12">
        <h3>{this.state.message}</h3>
        <p>{this.state.latitude ? 'Latitude' + this.state.latitude : '' }</p>
        <p>{this.state.longitude ? 'Longitude' + this.state.longitude : ''}</p>
      </div>
    )
  }
}
export default GeoLocation;

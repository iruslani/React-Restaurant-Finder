import React, { Component } from 'react';

class GeoLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude : '',
      longitude : '',
      message : "Geolocation is not supported by this browser. App default location used."
    };
    this.updatePosition = this.updatePosition.bind(this);
  }
  getLocation() {
      console.log()
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.updatePosition);
      }
  }
  updatePosition(position) {
      var message = "";
      message = "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;
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
        <h3>Your location is:</h3>
        <p>{this.state.message}</p>
        <div className="row">
          <div className="col-sm-12">
          <h3>Enter new location:</h3>
          <form onSubmit={this.handleQuerysubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Welcome to lets eat ... </label>
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Search Restaurants" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
          </div>
        </div>
      </div>
    )
  }
}
export default GeoLocation;

import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude : '',
      longitude : '',
      message : "Geolocation is not supported by this browser. App default location used."
    };
  }
  render() {
    return (
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
    )
  }
}
export default UserInput;

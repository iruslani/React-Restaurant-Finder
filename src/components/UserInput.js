import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
		this.handleQuerysubmit = this.handleQuerysubmit.bind(this);
  }
	handleQuerysubmit(e) {
		console.log('Clicked');
		console.log(e);
		// this.setState = ({
		// 	query: 'hamburgers'
		// });
	}
  render() {
    return (
    <div className="row">
      <div className="col-sm-12">
      <h3>Enter new location:</h3>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Welcome to lets eat ... </label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Search Restaurants" />
        </div>
        <button type="submit" onClick={this.handleQuerysubmit} className="btn btn-default">Submit</button>
      </div>
    </div>
    )
  }
}
export default UserInput;

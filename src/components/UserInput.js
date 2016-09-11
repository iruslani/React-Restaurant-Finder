import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query : 'pizza'
    }
		this.handleQuerysubmit = this.handleQuerysubmit.bind(this);
		this.handleQueryChange = this.handleQueryChange.bind(this);
  }
	handleQuerysubmit(e) {
    e.preventDefault();
    this.props.onQuerysubmit(this.state.query);
	}
  handleQueryChange(e) {
    this.setState({query: e.target.value});
  }
  render() {
    return (
    <div className="row">
      <div className="col-sm-12">
        <form onSubmit={this.handleQuerysubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Search for food: </label>
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleQueryChange}
              className="form-control"
              id="query"
              name="query"
              placeholder="Search Restaurants" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
    )
  }
}
export default UserInput;

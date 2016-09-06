import React, { Component } from 'react';
import pizza from './pizza.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  render() {
    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    }

    function parseJSON(response) {
      return response.json()
    }
    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20local.search%20where%20zip%3D'94085'%20and%20query%3D'pizza'&format=json&diagnostics=true&callback="
    fetch(url)
      .then(checkStatus)
      .then(parseJSON)
      .then(function(data) {
        console.log('request succeeded with JSON response', data.query.results.Result)
      }).catch(function(error) {
        console.log('request failed', error)
      })
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid App-header">
            <div className="row">
              <img src={pizza} className="App-logo" alt="logo" />
            </div>
            <div className="row">
              <h2>LetsEat.com</h2>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Welcome and lets eat ... </label>
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Search Restaurants" />
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            </div>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

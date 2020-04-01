import React, { Component } from "react";
import { Link } from "react-router-dom";
import  "./QuickLinks.css";




class QuickLinks extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: ""
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
        <ul className="list-group">
        <li>
          <a className="nav-link" href="#">
            <i className="fa fa-user"></i> Branford
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            <i className="fa fa-home"></i> Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            <i className="fa fa-child"></i> Profile
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
          <i className="fa  fa-users"></i> Discover
          </a>
        </li>
        <li>

          
          <a to="/News" id="scrapeArticlesButton" className="nav-link">
            <i className="fa fa-github"></i> News
          </a>
        </li>
  
        <li>
          <a className="nav-link" href="#">
            <i className="fa fa-address-card"></i> About Us
          </a>
        </li>
      </ul>
    );
  }
}

export default QuickLinks;


import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import Navigation from './component/Navigation';
import Login from './component/Login';


  class App extends Component {
    render() {
      return (
        <Router>
 <div className="container-fluid mainContainer">
       
       
       <Login/>
      
        {/* <Navigation/> */}



          {/* <Switch>
            <Route exact path="/" component={Book} />
            <Route exact path="/saved" component={Book} />
            {/* <Route exact path="/saved" component={Saved} /> */}
          {/* </Switch> */} 
        </div>
      </Router>
      );
    }
  }


export default App;

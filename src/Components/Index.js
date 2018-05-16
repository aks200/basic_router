import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Home} from './Home';
import {About} from './About';
import {Topics} from './Topics';

class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/topics">TOPICS</Link>
            </li>
          </ul>

          <Route exact path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </div>
      </Router>
    );
  }
}

export default Index;

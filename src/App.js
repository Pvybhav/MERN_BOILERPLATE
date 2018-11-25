import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx';
import NoMatchFound from './components/NoMatchFound.jsx';
import AboutMe from './components/AboutMe';
import Counter from './components/Counter';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1 id="greeting-message">Welcome, Vybhav</h1>
          <ul id="nav-menu">
            <li className="nav-menu-li">
              <h3>
                <span>
                  <Link className="App-link" to='/home'>Home</Link>
                </span>
              </h3>
            </li>
            <li className="nav-menu-li">
              <h3>
                <span>
                  <Link className="App-link" to='/aboutme'>About ME</Link>
                </span>
              </h3>
            </li>
            <li className="nav-menu-li">
              <h3>
                <span>
                  <Link className="App-link" to='/Counter'>counter</Link>
                </span>
              </h3>
            </li>
          </ul>
          <Switch>
            <Route exact={true} path="/" />
            <Route path="/home" component={Home} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/counter" component={Counter} />
            <Route component={NoMatchFound} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

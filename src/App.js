import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';

import Index from './Index/Index';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import Admin from './Admin/Admin';
import TopNav from './TopNav/TopNav';
import Footer from './Footer/Footer';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  state = {
    view: "index",
    media: [],
    loggedIn: false
  }

  logIn = () => {
    this.setState({
      loggedIn: true
    })
  }

  componentDidMount = async () => {
    let items = await this.refreshContent();
  }

  refreshContent = () => {
    console.log('refresh')
    fetch('/pull')
      .then(res => res.json())

      .then(res => {
        // experiment
        res.map(ouvre => {
          ouvre.image = new Image(150, 150);
          ouvre.image.src = ouvre.url;
        })
        //  
        this.setState({
          media: res
        })
      })
      .then(res => {
        return new Promise((resolve, reject) => {
          resolve("done")
        });
      })
  }

  render() {
    return (
      <StyleRoot>
        <Router>
          <div>
            <TopNav
              loggedIn={this.state.loggedIn}
              backButtonStyle={this.backButtonStyle}
            />
            <Route
              path="/"
              exact
              render={(props) =>
                <Index
                  loggedIn={this.state.loggedIn}
                />}
            />

            <Route
              path="/about"
              exact
              render={(props) =>
                <About
                />}
            />

            <Route
              path="/portfolio"
              exact
              render={(props) =>
                <Portfolio
                  media={this.state.media}
                />}
            />

            <Route
              path="/contact"
              exact
              render={(props) =>
                <Contact
                />}
            />

            <Route
              path="/Login"
              exact
              render={(props) =>
                <Login
                  logIn={this.logIn}
                />}
            />

            <Route
              path="/admin"
              exact
              render={(props) =>
                <Admin
                  loggedIn={this.state.loggedIn}
                  media={this.state.media}
                  refreshContent={this.refreshContent}
                />}
            />
          </div>
          <Footer />
        </Router>
      </StyleRoot>
    )
  }
}

export default App;
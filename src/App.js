import React, {Component} from 'react';
import './App.css';
import Index from './Index/Index';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';


class App extends Component {
  state = {
    view : "index"
  }
  backButtonStyle = {
    cursor : "pointer",
    textDecoration : "underline",
    display: "inline",
    marginLeft: '50px'
}

  setView = (input) => {
    this.setState({
      view: input
    })
  }

  render(){
    return (
      <div>
        <Index
          setView = {this.setView}
          view = {this.state.view}
        />
        <About
          setView = {this.setView}
          view = {this.state.view}
          backButtonStyle = {this.backButtonStyle}
        />
        <Portfolio
          setView = {this.setView}
          view = {this.state.view}
          backButtonStyle = {this.backButtonStyle}
        />
        <Contact
          setView = {this.setView}
          view = {this.state.view}
          backButtonStyle = {this.backButtonStyle}
        />
      </div>
    )
  }
}

export default App;
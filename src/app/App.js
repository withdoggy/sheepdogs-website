import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home';
import CalendarPage from './pages/calendar';
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route path="/" exact component={HomePage} />
      <Route path="/events/" exact component={CalendarPage} />
      </div>
      </Router>
    );
  }
}

export default App;

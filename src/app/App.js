import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home';
import CalendarPage from './pages/calendar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/events" component={CalendarPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

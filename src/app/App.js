import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home';
import CalendarPage from './pages/calendar';
import { Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/events" component={CalendarPage} />
          </Switch>
        </div>
    );
  }
}

export default App;

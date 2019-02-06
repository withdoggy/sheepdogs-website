import React from 'react';
import './App.css';
import HomePage from './pages/home';
import CalendarPage from './pages/calendar';
import { Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
        <React.Fragment>
          <div className="App">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/events" component={CalendarPage} />
            </Switch>
          </div>
        </React.Fragment>
    );
  }
}

export default App;

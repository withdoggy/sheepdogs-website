import React from 'react';
import HomePage from './pages/home';
import CalendarPage from './pages/calendar';
import { Route, Switch } from "react-router-dom";
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/events" component={CalendarPage} />
            </Switch>
        </React.Fragment>
        </div>
    );
  }
}

export default App;

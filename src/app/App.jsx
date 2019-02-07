import React from 'react';
import HomePage from './pages/home';
import EventsPage from './pages/events';
import { Route, Switch } from 'react-router-dom';
import PageLayout from './layout';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/events" component={EventsPage} />
          </Switch>
        </PageLayout>
      </React.Fragment>
    );
  }
}

export default App;

import React from 'react';
import HomePage from './pages/home';
import EventsPage from './pages/events';
import { Route, Switch, BrowserRouter  } from 'react-router-dom';

import awsexports from '../aws-exports';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(awsexports);

class Apps extends React.Component {
  componentDidMount() {
    // Hub.listen('auth', (data) => {
    //   console.log(data);
    // });
    // Hub.dispatch('auth', { event: 'signIn', data: 'asdadasd' }, 'Auth');
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/events" component={EventsPage} />
            <Route exact path="/dupa" component={withAuthenticator(EventsPage)} />
          </Switch>
        </React.Fragment>
      </div>
    );
  }
}

export default Apps;

import React from 'react';
import HomePage from './pages/home';
import EventsPage from './pages/events';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthComponent from './components/Auth';
const ProtectedRoute = ({ render: C, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={rProps =>
      childProps.isLoggedIn ? (
        <C {...rProps} {...childProps} />
      ) : (
        <Redirect to={`/auth?redirect=${rProps.location.pathname}${rProps.location.search}`} />
      )
    }
  />
);

const ProppedRoute = ({ render: C, props: childProps, ...rest }) => (
  <Route {...rest} render={rProps => <C {...rProps} {...childProps} />} />
);

const Routes = ({ childProps }) => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <ProppedRoute exact path="/auth" render={AuthComponent} props={childProps} />
    <ProppedRoute exact path="/logout" render={AuthComponent} props={childProps} />
    <ProtectedRoute exact path="/secret" render={() => <div>Keep it secret! Keep it safe!</div>} props={childProps} />
    <Route exact path="/events" component={EventsPage} />
  </Switch>
);

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Routes childProps={this.props.childProps} />
      </Switch>
    );
  }
}

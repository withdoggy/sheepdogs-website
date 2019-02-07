import React, { Component } from 'react';
import PageLayout from './layout';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from '../aws-exports';

import Router from './Routes';
Amplify.configure(aws_exports);

class App extends Component {
  state = {
    currentUser: null,
    authState: {
      isLoggedIn: false,
    },
  };

  handleUserSignIn = () => {
    this.setState({ authState: { isLoggedIn: true } });
  };
  handleUserSignOut = () => {
    this.setState({ authState: { isLoggedIn: false } });
  };
  componentDidMount() {
    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ currentUser: user }))
      .catch(err => console.log(err));
  }
  render() {
    const childProps = {
      isLoggedIn: this.state.authState.isLoggedIn,
      onUserSignIn: this.handleUserSignIn,
      onUserSignOut: this.handleUserSignOut,
      currentUser: this.state.currentUser,
    };
    console.log(this.state.currentUser);
    return (
      <>
        <PageLayout childProps={childProps}>
          <Router childProps={childProps} />
        </PageLayout>
      </>
    );
  }
}

export default App;

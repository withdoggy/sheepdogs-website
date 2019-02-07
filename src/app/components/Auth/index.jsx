import React, { Component } from 'react';
import { Authenticator } from 'aws-amplify-react';
export default class AuthComponent extends Component {
  handleStateChange = state => {
    console.log(state);
    if (state === 'signedIn') {
      this.props.onUserSignIn();
    }
    if (state === 'signedOut') {
      this.props.onUserSignOut();
    }
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <Authenticator onStateChange={this.handleStateChange} />
      </div>
    );
  }
}

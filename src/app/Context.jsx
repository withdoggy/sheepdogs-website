import React from 'react';
import { Auth, Hub, Logger } from 'aws-amplify';
const loadUser = () => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      return user;
    })
    .catch(err => {
      return null;
    });
};
export const ThemeContext = React.createContext({
  user: loadUser,
});

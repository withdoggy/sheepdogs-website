import React from 'react';
import renderer from 'react-test-renderer';

import NavBar from './Navbar';

describe('Navbar', () => {
  let props;

  beforeEach(() => {
    props = {
      currentUser: undefined,
    };
  });

  it('render navbar for anonymous user', () => {
    const NavBarComponent = renderer.create(<NavBar {...props} />).toJSON();
    expect(NavBarComponent).toMatchSnapshot();
  });
  it('render navbar for authenticated user', () => {
    let props = {
      currentUser: { username: 'Tolo' },
    };

    const NavBarComponent = renderer.create(<NavBar {...props} />).toJSON();
    expect(NavBarComponent).toMatchSnapshot();
  });
});

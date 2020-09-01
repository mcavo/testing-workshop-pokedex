import React from 'react';
import { render } from '@testsUtils/redux';

import Login from './index';

describe('<Login />', () => {
  test('Login Snapshot', () => {
    const login = render(<Login />).toJSON();
    expect(login).toMatchSnapshot();
  });
});

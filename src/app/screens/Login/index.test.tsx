import React from 'react';
import { render } from '@testing-library/react-native';

import Login from './index';

describe('<Login />', () => {
  test('Login', () => {
    const login = render(<Login />);
  });
});

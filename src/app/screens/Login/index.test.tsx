import React from 'react';
import { waitFor, fireEvent } from '@testing-library/react-native';
import { render } from '@testsUtils/redux';

import Login from './index';

describe('<Login />', () => {
  test('Login', async () => {
    const login = render(<Login />);
    const { getByText, getByPlaceholder } = login;
    const button = getByText('LOGIN:SUBMIT');

    const emailInput = getByPlaceholder('FIELDS:EMAIL');
    const passwordInput = getByPlaceholder('FIELDS:PASSWORD');

    await waitFor(async () => {
      await fireEvent.changeText(emailInput, 'vik');
    });

  });
});

import React from 'react';
import { waitFor, fireEvent, waitForElement, waitForElementToBeRemoved } from '@testing-library/react-native';
import { render } from '@testsUtils/redux';

import Login from './index';

describe('<Login />', () => {
  test('Login', async () => {
    const login = render(<Login />);
    const { getByText, getByPlaceholder } = login;
    const button = getByText('LOGIN:SUBMIT');

    const emailInput = getByPlaceholder('FIELDS:EMAIL');
    const passwordInput = getByPlaceholder('FIELDS:PASSWORD');

    // await waitFor(async () => {
    //   await fireEvent.changeText(emailInput, 'vik');
    // });

    // waitFor(() => getByText('VALIDATIONS:INVALID_FORMAT'));

    // fireEvent.press(button);

    // fireEvent.changeText(emailInput, 'vik@vik.com');

    // await waitForElementToBeRemoved(() => getByText('VALIDATIONS:INVALID_FORMAT'));

  });
});

import React from 'react';
import { render } from '@testsUtils/redux';
import { View } from 'react-native';

import withLoadable from './index';

describe('withLoadable', () => {
  const LoadableView = withLoadable(() => true)(View);
  test('is loading snapshot', () => {
    const loadableView = render(<LoadableView />).toJSON();
    expect(loadableView).toMatchSnapshot();
  });

});

import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';

import withLoadable from './index';

const LoadableView = withLoadable(() => true)(View);

describe('withLoadable', () => {
  test('is loading snapshot', () => {
    const loadableView = render(<LoadableView />).toJSON();
    expect(loadableView).toMatchSnapshot();
  });
});

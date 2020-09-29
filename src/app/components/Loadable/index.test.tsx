import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';

const LoadableView = withLoadable(() => true)(View);
import withLoadable from './index';

describe('withLoadable', () => {
  test('is loading snapshot', () => {
    const loadableView = render(<LoadableView />).toJSON();
    expect(loadableView).toMatchSnapshot();
  });

});


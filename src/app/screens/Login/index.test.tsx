import React from 'react';
import { render } from '@testsUtils/redux';

import Login from './index';

describe('<Login />', () => {
  test('Login Snapshot', () => {
    const login = render(<Login />).toJSON();
    expect(login).toMatchSnapshot();
  });
});


// beforeAll(() => console.log(1));
// beforeEach(() => console.log(2));
// afterAll(() => console.log(3));
// afterEach(() => console.log(4));

// test('First print', () => console.log(5));

// describe('Print test', () => {
//   beforeAll(() => console.log('A'));
//   beforeEach(() => console.log('B'));
//   afterAll(() => console.log('C'));
//   afterEach(() => console.log('D'));

//   test('Second print', () => console.log('E'));
// });

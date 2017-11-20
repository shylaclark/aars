// __tests__/LoginScreen-test.js
import 'react-native';
import React from 'react';
import LoginScreen from '../LoginScreen.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <LoginScreen />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

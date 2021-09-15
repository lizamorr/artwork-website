import Menu from '../Menu';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Menu Component', () => {
  xit('should render correctly', () => {
    // need to mock the window in node env
    const component = renderer.create(<Menu />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

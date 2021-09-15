import Burger from '../Burger';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Burger Component', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Burger />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

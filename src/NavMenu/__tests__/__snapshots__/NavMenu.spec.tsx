import NavMenu from '../../NavMenu';
import renderer from 'react-test-renderer';
import React from 'react';

describe('NavMenu Component', () => {
  it('should render correctly', () => {
    const component = renderer.create(<NavMenu />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

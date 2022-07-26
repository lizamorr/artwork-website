import About from '../About';
import React from 'react';
import renderer from 'react-test-renderer';

describe('About Component', () => {
  it('should render correctly', () => {
    const component = renderer.create(<About />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

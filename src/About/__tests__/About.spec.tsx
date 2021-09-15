import About from '../About';
import renderer from 'react-test-renderer';
import React from 'react';

describe('About Component', () => {
  it('should render correctly', () => {
    const component = renderer.create(<About />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

import Footer from '../Footer';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Footer Component', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Footer />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

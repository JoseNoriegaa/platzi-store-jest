// External dependencies
import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

// Internal dependencies
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  it('Should render correctly', () => {
    expect(footer.length).toEqual(1);
  });

  it('Should render the title', () => {
    const title = footer.find('.Footer-title').text();

    expect(title).toEqual('Platzi Store');
  });
});

describe('Footer snapshot', () => {
  it('should match snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});

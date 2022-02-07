// External dependencies
import React from 'react';
import { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer';

// Internal depedencies
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  it('Should render correctly', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.length).toBeGreaterThanOrEqual(1);
  });

  it('Should render the title', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    const title = header.find('.Header-title').text();

    expect(title).toEqual('Platzi Store');
  });
});

describe('Header snapshot', () => {
  it('should match snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.toJSON()).toMatchSnapshot();
  });
});

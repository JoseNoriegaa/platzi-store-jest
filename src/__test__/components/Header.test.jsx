// External dependencies
import React from 'react';
import { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer';

// Internal depedencies
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Header from '../../components/Header';
import initialState from '../../initialState';

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

  it('should render the amount of items in the cart', () => {
    const header = mount(
      <ProviderMock
        state={{
          ...initialState,
          cart: [{ ...ProductMock }],
        }}
      >
        <Header />
      </ProviderMock>,
    );

    const alert = header.find('.Header-alert').text();
    expect(alert).toEqual('1');
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

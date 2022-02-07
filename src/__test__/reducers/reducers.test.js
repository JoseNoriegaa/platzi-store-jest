// Internal dependencies
import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  it('should return the initial state', () => {
    const state = { foo: 'bar' };
    const action = { type: '' };

    expect(reducer(state, action)).toEqual(state);
  });

  it('should add an item to the cart', () => {
    const initialState = {
      cart: [],
    };

    const payload = { ...ProductMock };
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [payload],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should remove an item from the cart', () => {
    const initialState = {
      cart: [ProductMock],
    };

    const payload = { ...ProductMock };
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };

    const expected = {
      cart: [],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});

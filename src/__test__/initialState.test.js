// Internal dependencies
import initialState from '../initialState';

describe('initialState', () => {
  it('should return an object with the properties "cart" and "products"', () => {
    expect(initialState).toHaveProperty('cart');
    expect(initialState).toHaveProperty('products');
  });
});

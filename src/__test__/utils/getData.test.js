// Internal dependencies
import getData from '../../utils/getData';

describe('fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('call an API and return its data', async () => {
    const flag = '12345';
    fetch.mockResponseOnce(JSON.stringify({
      data: flag,
    }));

    const response = await getData('http://localhost:3000/api/v1/test');

    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/api/v1/test');
    expect(response.data).toEqual(flag);
  });

  test('call an API and return an error', async () => {
    const error = 'Error';
    fetch.mockRejectOnce(error);

    const response = await getData('http://localhost:3000/api/v1/test');

    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/api/v1/test');
    expect(response).toEqual(error);
  });
});

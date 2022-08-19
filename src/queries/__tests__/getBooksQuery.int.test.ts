import { getBooksQuery } from '../getBooksQuery';
import booksData from '../../models/__fixtures__/books.json';
import nock from 'nock';
import { API_URL } from '../config';

export const nockToAPI = () => nock(API_URL);

describe('queries', () => {
  describe('getBooksQuery', () => {
    beforeAll(() => {
      nock.disableNetConnect();
    });

    it('should call correct API_URL and return JSON data', async () => {
      const scope = nockToAPI()
        .get('/api/v1/books?_quantity=8')
        .replyWithFile(200, 'src/models/__fixtures__/books.json');

      const data = await getBooksQuery();

      expect(data).toStrictEqual(booksData.data);

      scope.done();
    });

    it('should throw on fetch error', async () => {
      const scope = nockToAPI()
        .get('/api/v1/books?_quantity=8')
        .reply(404, 'INVALID_REQUEST');

      await expect(() => getBooksQuery()).rejects.toThrow();

      scope.done();
    });
  });
});

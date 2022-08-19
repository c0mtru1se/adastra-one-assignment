import { API_URL } from './config';
import { BookShape } from '../models/Book';
import axios from 'axios';

export const getBooksQuery = async (): Promise<Array<BookShape>> => {
  try {
    const response = await axios.get(API_URL + '/api/v1/books?_quantity=8');

    return response.data.data;
  } catch (error: any) {
    throw new Error('Error while fetching data!', error);
  }
};

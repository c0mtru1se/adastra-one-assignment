import { BookShape } from '../../models/Book';

export type RootStackParamList = {
  Home: undefined;
  BookDetail: BookShape;
};

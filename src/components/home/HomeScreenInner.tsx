import React from 'react';
import { LoadingBookBox } from '../loading/LoadingComponents';
import { BookCarousel } from './carousel/BookCarousel';
import { useQuery } from '@tanstack/react-query';
import { Text } from 'react-native';
import { BookShape } from '../../models/Book';
import { getBooksQuery } from '../../queries/getBooksQuery';

export const HomeScreenInner = () => {
  const { isLoading, refetch, isError, data } = useQuery<Array<BookShape>>(
    ['books'],
    getBooksQuery
  );

  if (isLoading) {
    return <LoadingBookBox />;
  }

  if (isError) {
    return <Text>Error while fetching data!</Text>;
  }

  return <BookCarousel data={data} />;
};

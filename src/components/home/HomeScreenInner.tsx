import React from 'react';
import { LoadingBookBox } from '../loading/LoadingComponents';
import { BookCarousel } from './carousel/BookCarousel';
import { useQuery } from '@tanstack/react-query';
import { getBooksQuery } from '../../queries/getBooksQuery';
import { Text } from 'react-native';

export const HomeScreenInner = () => {
  const { isLoading, refetch, isError, data } = useQuery(
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

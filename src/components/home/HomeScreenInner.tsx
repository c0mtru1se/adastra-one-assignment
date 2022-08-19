import React from 'react';
import { LoadingBookBox } from '../loading/LoadingComponents';
import { BookCarousel } from './carousel/BookCarousel';
import { useQuery } from '@tanstack/react-query';
import { BookShape } from '../../models/Book';
import { getBooksQuery } from '../../queries/getBooksQuery';
import { RefetchBlock } from '../common/RefetchBlock';

export const HomeScreenInner = () => {
  const { isLoading, refetch, isError, data } = useQuery<Array<BookShape>>(
    ['books'],
    getBooksQuery
  );

  if (isLoading) {
    return <LoadingBookBox />;
  }

  if (isError) {
    return <RefetchBlock onPress={refetch} />;
  }

  return <BookCarousel data={data} />;
};

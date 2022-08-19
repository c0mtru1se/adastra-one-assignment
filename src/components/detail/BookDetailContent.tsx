import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BookShape } from '../../models/Book';
import { BookAuthorText } from '../common/BookAuthorText';
import { BookTitleText } from '../common/BookTitleText';
import { BookDescriptionText } from '../common/BookDescriptionText';
import { BookDetailGenresRow } from './BookDetailGenresRow';

type BookDetailContentProps = {
  book: BookShape;
};

export const BookDetailContent = ({ book }: BookDetailContentProps) => {
  return (
    <View style={[styles.container, styles.contentContainer]}>
      <BookAuthorText author={book.author} />
      <BookTitleText title={book.title} />
      <BookDescriptionText description={book.description} />
      <BookDetailGenresRow genres={book.genre} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 16,
  },
  contentContainer: {
    alignItems: 'center',
  },
});

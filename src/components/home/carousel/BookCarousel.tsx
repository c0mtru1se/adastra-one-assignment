import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { BookCarouselItem } from './BookCarouselItem';
import { BookList } from '../../../models/BookList';

export const BookCarousel = ({ data }: BookList) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({ item }) => <BookCarouselItem item={item} />}
        contentInset={styles.contentInsetStyle}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  contentContainerStyle: {
    paddingBottom: 24,
    alignItems: 'center',
  },
  contentInsetStyle: {
    right: 16,
  },
});

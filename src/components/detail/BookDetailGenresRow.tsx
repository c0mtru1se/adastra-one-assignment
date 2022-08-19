import React from 'react';
import { BookGenreBadge } from '../common/BookGenreBadge';
import { StyleSheet, View } from 'react-native';

type BookDetailGenresRowProps = {
  genres: string | Array<string>;
};

export const BookDetailGenresRow = ({ genres }: BookDetailGenresRowProps) => {
  if (!Array.isArray(genres)) {
    return (
      <View style={styles.genresRow}>
        <BookGenreBadge genre={genres} />
      </View>
    );
  }

  return (
    <View style={styles.genresRow}>
      {genres.map((genre) => (
        <BookGenreBadge genre={genre} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  genresRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

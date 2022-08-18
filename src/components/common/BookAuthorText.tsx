import React from 'react';
import { Text, StyleSheet } from 'react-native';

type BookAuthorTextProps = {
  author: string;
};

export const BookAuthorText = ({ author }: BookAuthorTextProps) => {
  return (
    <Text style={styles.authorText} numberOfLines={1}>
      {author}
    </Text>
  );
};

const styles = StyleSheet.create({
  authorText: {
    marginBottom: 4,
    color: '#878787',
    fontWeight: '600',
    textAlign: 'right',
  },
});

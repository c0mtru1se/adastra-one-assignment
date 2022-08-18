import React from 'react';
import { Text, StyleSheet } from 'react-native';

type BookTitleTextProps = {
  title: string;
};

export const BookTitleText = ({ title }: BookTitleTextProps) => {
  return (
    <Text style={styles.titleText} numberOfLines={1}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  titleText: {
    color: '#000',
    fontWeight: '700',
    letterSpacing: 0.7,
    fontSize: 19,
    textAlign: 'left',
  },
});

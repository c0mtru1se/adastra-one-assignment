import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type BookGenreBadgeProps = {
  genre: string;
};

export const BookGenreBadge = ({ genre }: BookGenreBadgeProps) => {
  return (
    <View style={styles.badgeContainer} accessibilityHint="Book genre badge">
      <Text style={styles.text}>{genre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 24,
    borderWidth: 0.5,
    maxHeight: 28,
    borderColor: 'red',
  },
  text: {
    color: 'grey',
    fontWeight: 'normal',
  },
});

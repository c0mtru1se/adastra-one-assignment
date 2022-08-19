import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type BookGenreBadgeProps = {
  genre: string;
};

export const BookGenreBadge = ({ genre }: BookGenreBadgeProps) => {
  return (
    <View style={styles.badgeContainer} accessibilityHint="Book genre badge">
      <Text style={styles.text} numberOfLines={1}>
        {genre}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    maxHeight: 42,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  text: {
    color: 'grey',
    fontWeight: 'normal',
  },
});

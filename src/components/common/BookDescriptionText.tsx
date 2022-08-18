import React from 'react';
import { Text, StyleSheet } from 'react-native';

type BookDescriptionTextProps = {
  description: string;
};

export const BookDescriptionText = ({
  description,
}: BookDescriptionTextProps) => {
  return <Text style={styles.descriptionText}>{description}</Text>;
};

const styles = StyleSheet.create({
  descriptionText: {
    marginTop: 16,
    color: '#878787',
    fontWeight: 'normal',
    textAlign: 'justify',
    fontSize: 15,
    letterSpacing: 0.4,
  },
});

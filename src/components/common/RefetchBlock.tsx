import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RefetchButton } from './RefetchButton';

type RefetchBlockProps = {
  onPress: () => void;
};

export const RefetchBlock = ({ onPress }: RefetchBlockProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.refetchText}>Error while fetching data!</Text>
      <RefetchButton onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
  refetchText: {
    fontWeight: 'normal',
    fontSize: 17,
  },
});

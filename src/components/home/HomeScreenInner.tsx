import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HomeScreenInner = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HomeScreenInner } from './HomeScreenInner';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.heading}>Books collection</Text>
        <HomeScreenInner />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#f3f5f9',
  },
  container: {
    left: 16,
    top: 52,
  },
  heading: {
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 0.7,
  },
});

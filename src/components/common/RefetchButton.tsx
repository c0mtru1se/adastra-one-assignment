import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

type RefetchButtonProps = {
  onPress: () => void;
};

export const RefetchButton = ({ onPress }: RefetchButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityLabel="Re-fetch book data"
      accessibilityRole="button"
      style={styles.container}
    >
      <View style={styles.refetchButton}>
        <Text style={styles.refetchButtonText}>Re-fetch</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  refetchButton: {
    justifyContent: 'center',
    textAlignVertical: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: 'red',
  },
  refetchButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'normal',
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BookCoverImage } from '../common/BookCoverImage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import { BookDetailContent } from './BookDetailContent';

type BookDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'BookDetail'
>;

export const BookDetailScreen = ({ route }: BookDetailScreenProps) => {
  const book = route.params;

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.contentWraper}>
        <BookCoverImage book={book} style={styles.coverImage} />
        <BookDetailContent book={book} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f3f5f9',
  },
  contentWraper: {
    flex: 1,
    flexDirection: 'column',
  },
  coverImage: {
    width: '100%',
    height: '70%',
    flex: 2,
  },
});

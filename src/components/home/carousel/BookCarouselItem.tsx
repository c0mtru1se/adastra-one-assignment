import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BookShape } from '../../../models/Book';
import { BookCoverImage } from '../../common/BookCoverImage';
import { BookCarouselItemContainer } from './BookCarouselItemContainer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/types/RootStackParamList';
import { BookAuthorText } from '../../common/BookAuthorText';
import { BookTitleText } from '../../common/BookTitleText';

type BookCarouselItemProps = {
  item: BookShape;
};

export const BookCarouselItem = ({ item }: BookCarouselItemProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <BookCarouselItemContainer
      key={item.title + item.id}
      onPress={() => navigation.navigate('BookDetail', item)}
    >
      <BookCoverImage book={item} style={styles.coverImage} />
      <View style={styles.textContainer}>
        <BookAuthorText author={item.author} />
        <BookTitleText title={item.title} />
      </View>
    </BookCarouselItemContainer>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: 175,
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textContainer: {
    marginBottom: 12,
    marginTop: 'auto',
    justifyContent: 'center',
  },
});

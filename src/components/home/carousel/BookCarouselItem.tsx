import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BookShape } from '../../../models/Book';
import { CoverImage } from '../../detail/CoverImage';
import { BookCarouselItemContainer } from './BookCarouselItemContainer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/types/RootStackParamList';

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
      <CoverImage book={item} style={styles.coverImage} />
      <View style={styles.textContainer}>
        <Text style={styles.authorText} numberOfLines={1}>
          {item.author}
        </Text>
        <Text style={styles.titleText} numberOfLines={1}>
          {item.title}
        </Text>
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
  authorText: {
    marginBottom: 4,
    color: '#9D9D9D',
    fontWeight: '600',
    textAlign: 'right',
  },
  titleText: {
    color: '#000',
    fontWeight: '700',
    letterSpacing: 0.7,
    fontSize: 18,
    textAlign: 'left',
  },
});

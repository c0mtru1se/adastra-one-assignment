import React from 'react';
import { Image } from 'react-native';
import { ImageProps } from 'react-native';
import { BookShape } from '../../models/Book';

export type CoverImageProps = {
  book: BookShape;
} & Omit<ImageProps, 'source'>;

export const BookCoverImage = ({ book, ...rest }: CoverImageProps) => {
  const { image, title } = book;

  return (
    <Image
      source={{ uri: image }}
      accessibilityHint={'Cover for: ' + title}
      {...rest}
    />
  );
};

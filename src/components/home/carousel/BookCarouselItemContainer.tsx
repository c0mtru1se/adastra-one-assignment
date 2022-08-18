import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from 'react-native';

type BookCarouselItemContainerProps = ViewProps & {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export const BookCarouselItemContainer = ({
  style,
  children,
  onPress,
  ...rest
}: BookCarouselItemContainerProps) => {
  return (
    <Pressable
      style={StyleSheet.compose(style, styles.itemContainer)}
      onPress={onPress}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 175,
    height: 250,
    marginRight: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    paddingBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdfdfd',
    shadowRadius: 8,
    shadowOpacity: 0.1,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

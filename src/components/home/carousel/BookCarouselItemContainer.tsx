import React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

type BookCarouselItemContainerProps = ViewProps & {
  style?: StyleProp<ViewStyle>;
};

export const BookCarouselItemContainer = ({
  style,
  children,
  ...rest
}: BookCarouselItemContainerProps) => {
  return (
    <View style={StyleSheet.compose(style, styles.itemContainer)} {...rest}>
      {children}
    </View>
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

import * as React from 'react';
import { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Animated,
  Easing,
  ViewProps,
} from 'react-native';

const LoadingRect = (props: {
  width: string | number;
  height: string | number;
  style?: StyleProp<ViewStyle>;
}) => {
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const sharedAnimationConfig = {
      duration: 1000,
      useNativeDriver: true,
    };
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          ...sharedAnimationConfig,
          toValue: 1,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(pulseAnim, {
          ...sharedAnimationConfig,
          toValue: 0,
          easing: Easing.in(Easing.ease),
        }),
      ])
    ).start();

    return () => {
      pulseAnim.stopAnimation();
    };
  }, []);

  const opacityAnim = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.05, 0.15],
  });

  return (
    <Animated.View
      style={[
        styles.loadingRect,
        { width: props.width, height: props.height },
        { opacity: opacityAnim },
        props.style,
      ]}
    />
  );
};

const Row = ({ ...props }: ViewProps) => {
  return (
    <View
      style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}
      {...props}
    />
  );
};

const LoadingBox = ({ style, ...rest }: ViewProps) => (
  <View
    style={StyleSheet.compose(
      { flexDirection: 'column', marginRight: 18 },
      style
    )}
    accessibilityHint="Loading box"
    {...rest}
  />
);

export const LoadingArticleBox = () => {
  const boxes = new Array(3).fill(0);
  const boxWidth = 100;

  return (
    <View style={styles.container}>
      <Row>
        {boxes.map((_box, index) => (
          <LoadingBox key={index} style={{ width: boxWidth }}>
            <LoadingRect width={boxWidth} height={100} />
            <LoadingRect width={boxWidth} height={20} style={{ top: 8 }} />
          </LoadingBox>
        ))}
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
  },
  loadingRect: {
    borderRadius: 4,
    opacity: 0.1,
    backgroundColor: '#323643',
  },
});

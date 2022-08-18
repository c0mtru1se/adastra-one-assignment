import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export const CommonProvidersForTests = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

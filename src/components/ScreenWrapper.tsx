// src/components/ScreenWrapper.tsx
import React from 'react';
import { ViewProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export function ScreenWrapper({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewProps['style'];
}) {
  return (
    <LinearGradient
      colors={['#eef6fb', '#f6f8fa']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0.31, y: 1 }}
      style={[{ flex: 1 }, style]}
    >
      {children}
    </LinearGradient>
  );
}

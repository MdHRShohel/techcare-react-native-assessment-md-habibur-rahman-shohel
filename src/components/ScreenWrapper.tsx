import React from 'react';
import { ScrollView, ViewProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export function ScreenWrapper({
  children,
  style,
  contentContainerStyle,
}: {
  children: React.ReactNode;
  style?: ViewProps['style'];
  contentContainerStyle?: ViewProps['style'];
}) {
  return (
    <LinearGradient
      colors={['#eef6fb', '#f6f8fa']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0.31, y: 1 }}
      style={[{ flex: 1 }, style]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {
            paddingHorizontal: 16,
            paddingTop: 12,
            paddingBottom: 30,
          },
          contentContainerStyle,
        ]}
      >
        {children}
      </ScrollView>
    </LinearGradient>
  );
}

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function CustomBottomTabs({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View className="flex-row items-center justify-between bg-white px-4 py-3 shadow-sm">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        // Icons are generated via tabBarIcon function
        const Icon = options.tabBarIcon
          ? options.tabBarIcon({ focused: isFocused, color: '', size: 20 })
          : null;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.8}
            className={`flex-row items-center justify-center rounded-[40px] px-[14px] py-3 ${
              isFocused ? 'bg-tabBackground' : 'bg-transparent'
            }`}
          >
            {Icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

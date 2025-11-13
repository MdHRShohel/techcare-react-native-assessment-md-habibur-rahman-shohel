import React from 'react';
import { Text, View } from 'react-native';

type TabBarIconProps = {
  focused: boolean;
  icon: React.FC<{ width?: number; height?: number }>;
  iconActive: React.FC<{ width?: number; height?: number }>;
  label: string;
};

export function TabBarIcon({ focused, icon, iconActive, label }: TabBarIconProps) {
  const Icon = focused ? iconActive : icon;

  return (
    <View className="flex-row items-center gap-2">
      <Icon width={20} height={20} />
      <Text className={`text-sm font-medium ${focused ? ' text-black' : 'text-gray'}`}>
        {label}
      </Text>
    </View>
  );
}

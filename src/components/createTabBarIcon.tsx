import React from 'react';
import { TabBarIcon } from './TabBarIcon';

export function CreateTabBarIcon(
  icons: {
    default: React.FC<{ width?: number; height?: number }>;
    active: React.FC<{ width?: number; height?: number }>;
  },
  name: string,
) {
  return function TabBarIconWrapper({ focused }: { focused: boolean }) {
    return (
      <TabBarIcon focused={focused} icon={icons.default} iconActive={icons.active} label={name} />
    );
  };
}

import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TabBarIcon } from '../components/TabBarIcon';
import { TABS } from './tabs.config';
import CustomBottomTabs from '../components/CustomBottomTabs';

const Tab = createBottomTabNavigator();

function createTabBarIcon(
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

const renderTabBar = (props: BottomTabBarProps) => <CustomBottomTabs {...props} />;

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          height: 60,
        },
      }}
      tabBar={renderTabBar}
    >
      {TABS.map(({ name, component: Component, icons }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={Component}
          options={{
            tabBarIcon: createTabBarIcon(icons, name),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

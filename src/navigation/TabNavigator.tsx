import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import CustomBottomTabs from '../components/CustomBottomTabs';
import CustomHeader from '../components/CustomHeader';
import { CreateTabBarIcon } from '../components/createTabBarIcon';
import { TABS } from './tabs.config';

type HeaderProps = {
  name: string;
  route: RouteProp<Record<string, object | undefined>, string>;
};

const Tab = createBottomTabNavigator();

const renderTabBar = (props: BottomTabBarProps) => <CustomBottomTabs {...props} />;
const renderHeader = ({ name, route }: HeaderProps) => <CustomHeader title={name} route={route} />;

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
            tabBarIcon: CreateTabBarIcon(icons, name),
            headerShown: true,
            header: ({ route }) => renderHeader({ name, route }),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

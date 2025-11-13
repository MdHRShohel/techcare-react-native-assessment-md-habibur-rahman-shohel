import {
  AnalyticsActiveIcon,
  AnalyticsIcon,
  HomeActiveIcon,
  HomeIcon,
  TransactionsActiveIcon,
  TransactionsIcon,
} from '../assets/Icons';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import HomeScreen from '../screens/HomeScreen';
import TransactionsScreen from '../screens/TransactionsScreen';

export const TABS = [
  {
    name: 'Home',
    component: HomeScreen,
    icons: {
      default: HomeIcon,
      active: HomeActiveIcon,
    },
  },
  {
    name: 'Transactions',
    component: TransactionsScreen,
    icons: {
      default: TransactionsIcon,
      active: TransactionsActiveIcon,
    },
  },
  {
    name: 'Analytics',
    component: AnalyticsScreen,
    icons: {
      default: AnalyticsIcon,
      active: AnalyticsActiveIcon,
    },
  },
];

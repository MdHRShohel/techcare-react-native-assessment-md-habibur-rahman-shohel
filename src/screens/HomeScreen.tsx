import { View } from 'react-native';
import BalanceCard from '../components/BalanceCard';
import FloatingButton from '../components/FloatingButton';
import OverViewSection from '../components/OverViewSection';
import { ScreenWrapper } from '../components/ScreenWrapper';
// import Transactions from '../components/transactions';

export default function HomeScreen() {
  return (
    <ScreenWrapper floating={<FloatingButton />}>
      <View className="gap-[18px]">
        <BalanceCard />
        <OverViewSection />
        {/* <Transactions /> */}
      </View>
    </ScreenWrapper>
  );
}

import { View } from 'react-native';
import BalanceCard from '../components/BalanceCard';
import OverViewSection from '../components/OverViewSection';
import { ScreenWrapper } from '../components/ScreenWrapper';

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <View className="gap-[18px]">
        <BalanceCard />
        <OverViewSection />
      </View>
    </ScreenWrapper>
  );
}

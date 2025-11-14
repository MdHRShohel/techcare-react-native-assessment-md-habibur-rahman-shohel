import { Text, View } from 'react-native';
import BalanceCard from '../components/BalanceCard';
import FloatingButton from '../components/FloatingButton';
import OverViewSection from '../components/OverViewSection';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { useState } from 'react';
import BottomSheetModal from '../components/BottomSheetModal';
// import Transactions from '../components/transactions';

export default function HomeScreen() {
  const [open, setOpen] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ScreenWrapper floating={<FloatingButton onPress={() => setOpen(true)} />}>
        <View className="gap-[18px]">
          <BalanceCard />
          <OverViewSection />
          {/* <Transactions /> */}
        </View>
      </ScreenWrapper>
      <BottomSheetModal title="Add New Transaction" visible={open} onClose={() => setOpen(false)}>
        <View>
          <Text>Your form or UI goes here.</Text>
        </View>
      </BottomSheetModal>
    </View>
  );
}

import { useState } from 'react';
import { View } from 'react-native';
import BalanceCard from '../components/BalanceCard';
import BottomSheetModal from '../components/BottomSheetModal';
import FloatingButton from '../components/FloatingButton';
import OverViewSection from '../components/OverViewSection';
import { ScreenWrapper } from '../components/ScreenWrapper';
import TransactionsModalsComponents from '../components/TransactionsModalsComponents';
// import Transactions from '../components/transactions';

export default function HomeScreen() {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <View style={{ flex: 1 }}>
      <ScreenWrapper floating={<FloatingButton onPress={() => setOpen(true)} />}>
        <View className="gap-[18px]">
          <BalanceCard />
          <OverViewSection />
          {/* <Transactions /> */}
        </View>
      </ScreenWrapper>
      <BottomSheetModal title="Add New Transaction" visible={open} onClose={closeModal}>
        <TransactionsModalsComponents closeModal={closeModal} />
      </BottomSheetModal>
    </View>
  );
}

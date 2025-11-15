import { useState } from 'react';
import { View } from 'react-native';
import BottomSheetModal from '../components/BottomSheetModal';
import FloatingButton from '../components/FloatingButton';
import { ScreenWrapper } from '../components/ScreenWrapper';
import TransactionsModalsComponents from '../components/TransactionsModalsComponents';
import Transactions from '../components/transactions';

export default function TransactionsScreen() {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <View className="flex-1">
      <ScreenWrapper floating={<FloatingButton onPress={() => setOpen(true)} />}>
        <View className="mb-4 h-10 w-full rounded-[10px] bg-white" />
        <Transactions title="Transactions" scrollEnabled={false} />
      </ScreenWrapper>
      <BottomSheetModal title="Add New Transaction" visible={open} onClose={closeModal}>
        <TransactionsModalsComponents closeModal={closeModal} />
      </BottomSheetModal>
    </View>
  );
}

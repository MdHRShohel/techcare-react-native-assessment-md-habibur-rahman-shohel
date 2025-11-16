import { useState } from 'react';
import { View } from 'react-native';
import BalanceCard from '../components/BalanceCard';
import BottomSheetModal from '../components/BottomSheetModal';
import FloatingButton from '../components/FloatingButton';
import OverViewSection from '../components/OverViewSection';
import { ScreenWrapper } from '../components/ScreenWrapper';
import TransactionsModalsComponents from '../components/TransactionsModalsComponents';
import Transactions from '../components/transactions';
import { Transaction } from '../types/Transaction';

export default function HomeScreen() {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Transaction | null>(null);
  const closeModal = () => {
    setOpen(false);
    setEditing(null);
  };
  return (
    <View style={{ flex: 1 }}>
      <ScreenWrapper floating={<FloatingButton onPress={() => setOpen(true)} />}>
        <View className="flex-1 gap-[18px]">
          <BalanceCard />
          <OverViewSection />
          <Transactions
            title="Recent Transactions"
            scrollEnabled={false}
            onEdit={(tx) => {
              setEditing(tx);
              setOpen(true);
            }}
          />
        </View>
      </ScreenWrapper>
      <BottomSheetModal
        title={editing ? 'Edit Transaction' : 'Add New Transaction'}
        visible={open}
        onClose={closeModal}
      >
        <TransactionsModalsComponents closeModal={closeModal} editing={editing} />
      </BottomSheetModal>
    </View>
  );
}

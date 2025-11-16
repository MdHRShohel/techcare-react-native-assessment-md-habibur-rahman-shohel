import { FilterHorizontalIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import BottomSheetModal from '../components/BottomSheetModal';
import FloatingButton from '../components/FloatingButton';
import { ScreenWrapper } from '../components/ScreenWrapper';
import SearchBar from '../components/SearchBar';
import TransactionsModalsComponents from '../components/TransactionsModalsComponents';
import Transactions from '../components/transactions';
import { Transaction } from '../types/Transaction';

export default function TransactionsScreen() {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [editing, setEditing] = useState<Transaction | null>(null);

  const closeModal = () => {
    setOpen(false);
    setEditing(null);
  };
  return (
    <View className="flex-1">
      <ScreenWrapper floating={<FloatingButton onPress={() => setOpen(true)} />}>
        <View className="mb-4 flex-row gap-3">
          <SearchBar
            value={searchText}
            onChange={setSearchText}
            placeholder="Search transaction by title or category"
          />
          <TouchableOpacity
            activeOpacity={0.8}
            className="size-[52px] flex-row items-center justify-center rounded-[10px] bg-white shadow-lg"
          >
            <HugeiconsIcon icon={FilterHorizontalIcon} size={24} className="text-grey" />
          </TouchableOpacity>
        </View>
        <Transactions
          title="Transactions"
          scrollEnabled={false}
          onEdit={(tx) => {
            setEditing(tx);
            setOpen(true);
          }}
        />
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

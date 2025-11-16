import React, { useState } from 'react';
import { SectionList, Text, View } from 'react-native';
import { useTransactionStore } from '../store/useTransactionStore';
import { Transaction } from '../types/Transaction';
import { groupTransactionsByDate } from '../utils/groupByDateSorted';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import TransactionItem from './TransactionItem';
import { TransactionSectionHeader } from './TransactionSectionHeader';

const ItemSeparator = () => <View className="h-[1px] bg-black/10" />;

const Transactions = ({
  title,
  scrollEnabled = true,
  onEdit,
}: {
  title: string;
  scrollEnabled?: boolean;
  onEdit?: (tx: Transaction) => void;
}) => {
  const transactions = useTransactionStore((s) => s.transactions);
  const sections = groupTransactionsByDate(transactions);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState<string | null>(null);
  const deleteTransaction = useTransactionStore((s) => s.deleteTransaction);

  const handleDelete = (id: string) => {
    setSelectedTransactionId(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedTransactionId) {
      deleteTransaction(String(selectedTransactionId));
      setDeleteModalOpen(false);
      setSelectedTransactionId(null);
    }
  };

  return (
    <View className="flex-1 rounded-[20px] bg-white p-4 shadow-md">
      <Text className="mb-4 font-medium text-titleText">{title}</Text>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        scrollEnabled={scrollEnabled}
        renderItem={({ item }) => (
          <TransactionItem
            item={item}
            onEdit={onEdit}
            onDelete={(id) => handleDelete(String(id))}
          />
        )}
        renderSectionHeader={({ section: { title: sectionTitle, data } }) => (
          <TransactionSectionHeader title={sectionTitle} data={data} />
        )}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={{ paddingBottom: 10 }}
      />

      <DeleteConfirmationModal
        visible={deleteModalOpen}
        onCancel={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </View>
  );
};

export default Transactions;

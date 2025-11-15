import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { useTransactionStore } from '../store/useTransactionStore';
import { groupTransactionsByDate } from '../utils/groupByDateSorted';
import TransactionItem from './TransactionItem';
import { TransactionSectionHeader } from './TransactionSectionHeader';

const ItemSeparator = () => <View className="my-4 h-[1px] bg-black/10" />;

const Transactions = ({
  title,
  scrollEnabled = true,
}: {
  title: string;
  scrollEnabled?: boolean;
}) => {
  const transactions = useTransactionStore((s) => s.transactions);
  const sections = groupTransactionsByDate(transactions);

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
            onEdit={(tx) => console.log('Edit:', tx)}
            onDelete={(tx) => console.log('Delete:', tx)}
          />
        )}
        renderSectionHeader={({ section: { title: sectionTitle, data } }) => (
          <TransactionSectionHeader title={sectionTitle} data={data} />
        )}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
  );
};

export default Transactions;

import React from 'react';
import { Text, View } from 'react-native';
import { useTransactionStore } from '../store/useTransactionStore';

const Transactions = () => {
  const transactionsData = useTransactionStore((state) => state.transactions);

  console.log('transactionsData:', transactionsData);

  return (
    <View className="rounded-[20px] bg-white p-[18px] shadow-md">
      <Text className="font-medium text-titleText">Recent Transactions</Text>

      <View className="flex-row justify-between">
        <Text>Thursday, Aug 14</Text>
        <Text>$135.50</Text>
      </View>
    </View>
  );
};

export default Transactions;

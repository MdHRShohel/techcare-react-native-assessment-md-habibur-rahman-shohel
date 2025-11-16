import React from 'react';
import { Text, View } from 'react-native';
import { useTransactionStore } from '../store/useTransactionStore';
import DonutChat from './DonutChat';

const COLORS = ['#FFBF47', '#56CCF2', '#9854FF', '#FF6B6B', '#4ADE80', '#A78BFA'];

const OverViewSection = () => {
  const transactions = useTransactionStore((s) => s.transactions);

  // Filter only expenses
  const expenseTransactions = transactions.filter((t) => t.type === 'expense');

  // Group by category
  const grouped: Record<string, number> = {};
  expenseTransactions.forEach((tx) => {
    const label = tx.category?.label ?? 'Unknown';
    const amount =
      typeof tx.amount === 'number' ? tx.amount : parseFloat(tx.amount?.toString() || '0');
    grouped[label] = (grouped[label] || 0) + amount;
  });

  // Convert to chart data
  const chartData = Object.entries(grouped).map(([label, value], index) => ({
    label,
    value,
    color: COLORS[index % COLORS.length],
  }));

  return (
    <View className="rounded-[20px] bg-white p-[18px] shadow-md">
      <Text className="mb-4 font-medium text-titleText">Top Spending overview</Text>
      <DonutChat data={chartData} />
    </View>
  );
};

export default OverViewSection;

import React from 'react';
import { Text, View } from 'react-native';
import DonutChat from './DonutChat';

const data = [
  { label: 'Grocery', value: 612.3, color: '#FFBF47' },
  { label: 'Transport', value: 478.55, color: '#56CCF2' },
  { label: 'Entertainment', value: 395.2, color: '#9854FF' },
];

const OverViewSection = () => {
  return (
    <View className="rounded-[20px] bg-white p-[18px] shadow-md">
      <Text className="font-medium text-titleText">Top Spending overview</Text>
      <DonutChat data={data} />
    </View>
  );
};

export default OverViewSection;

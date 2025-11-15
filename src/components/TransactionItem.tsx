import { HugeiconsIcon } from '@hugeicons/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { Transaction } from '../types/Transaction';
import { formatCurrency } from '../utils/formatCurrency';

interface TransactionItemProps {
  item: Transaction;
  onEdit: (item: Transaction) => void;
  onDelete: (id: string | number) => void;
}

export default function TransactionItem({ item, onEdit, onDelete }: TransactionItemProps) {
  const renderRightActions = () => (
    <View className="flex-row items-center">
      <Text className="bg-blue-500 px-5 py-3 text-white" onPress={() => onEdit(item)}>
        Edit
      </Text>
      <Text className="bg-red-500 px-5 py-3 text-white" onPress={() => onDelete(item.id)}>
        Delete
      </Text>
    </View>
  );

  console.log('Item : ', item);
  return (
    <Swipeable overshootRight={false} renderRightActions={renderRightActions}>
      <View className="flex-row justify-between bg-white">
        <View className="flex-row gap-2">
          <View className="size-10 items-center justify-center rounded-full bg-[#EBF6F6]">
            <HugeiconsIcon icon={item.category?.icon} size={20} color="#0F0D27" />
          </View>
          <View className="gap-2">
            <Text className="text-sm font-medium text-black">{item.category?.label}</Text>
            <Text className="text-xs font-medium capitalize text-grey">{item.note}</Text>
          </View>
        </View>
        <Text className="text-textColor2 text-sm font-semibold">
          {formatCurrency(Number(item.amount))}
        </Text>
      </View>
    </Swipeable>
  );
}

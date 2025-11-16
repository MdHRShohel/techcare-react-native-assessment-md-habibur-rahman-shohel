import { Delete02Icon, Edit03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { Transaction } from '../types/Transaction';
import { formatCurrency } from '../utils/formatCurrency';

interface TransactionItemProps {
  item: Transaction;
  onEdit?: (item: Transaction) => void;
  onDelete: (id: string | number) => void;
}

export default function TransactionItem({ item, onEdit, onDelete }: TransactionItemProps) {
  const renderRightActions = () => (
    <View className="flex-row items-center">
      <Pressable className="bg-[#395FA6]/10 px-5 py-7" onPress={() => onEdit?.(item)}>
        <HugeiconsIcon icon={Edit03Icon} size={14} color="#395FA6" />
      </Pressable>
      <Pressable className="bg-[#FFECEC] px-5 py-7" onPress={() => onDelete(item.id)}>
        <HugeiconsIcon icon={Delete02Icon} size={14} color="#E41418" />
      </Pressable>
    </View>
  );

  return (
    <Swipeable overshootRight={false} renderRightActions={renderRightActions}>
      <View className="-mx-2 flex-row justify-between bg-white px-2 py-3">
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

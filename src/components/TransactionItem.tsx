import { Delete02Icon, Edit03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { Transaction } from '../types/Transaction';
import { formatCurrency } from '../utils/formatCurrency';
import BottomSheetModal from './BottomSheetModal';
import UiButton from './UiButton';

interface TransactionItemProps {
  item: Transaction;
  onEdit?: (item: Transaction) => void;
  onDelete: (id: string | number) => void;
}

export default function TransactionItem({ item, onEdit, onDelete }: TransactionItemProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

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
    <>
      <Swipeable overshootRight={false} renderRightActions={renderRightActions}>
        <Pressable
          onPress={() => setModalOpen(true)}
          className="-mx-2 flex-row justify-between bg-white px-2 py-3"
        >
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
        </Pressable>
      </Swipeable>

      {/* Modal for full transaction details */}
      <BottomSheetModal
        title={'Transaction Details'}
        height={480}
        visible={modalOpen}
        onClose={closeModal}
      >
        <View className="border-darkBlack/10 flex-row justify-between gap-3 rounded-[18px] border px-[18px] py-[20px]">
          <View className="flex-row items-center gap-3">
            <View>
              <HugeiconsIcon icon={item.category?.icon} size={34} color="#0F0D27" />
            </View>
            <View>
              <Text className="text-2xl font-bold text-titleText">
                {formatCurrency(Number(item.amount))}
              </Text>
              <Text className=" font-medium text-[#515771]">{item.category?.label}</Text>
            </View>
          </View>
          <View>
            <Text className="text-xs text-[#515771]">
              {new Date(item.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </Text>
          </View>
        </View>
        <View className="border-darkBlack/10 mt-[14px] justify-between rounded-[18px] border px-[18px] py-[20px]">
          <Text className="mb-4 text-sm font-semibold text-grey">Transaction Overview</Text>
          <Text className="mb-2 text-xs text-grey">Transaction type</Text>
          <Text className="text-darkBlack mb-2 text-sm font-medium capitalize">{item.type}</Text>
          <View className="-mx-[18px] mb-2 h-[1px] bg-black/10" />
          <Text className="mb-2 text-xs text-grey">Category</Text>
          <Text className="text-darkBlack mb-2 text-sm font-medium capitalize">
            {item.category?.label}
          </Text>
          <View className="-mx-[18px] mb-2 h-[1px] bg-black/10" />

          <Text className="mb-2 text-xs text-grey">Note</Text>
          <Text className="text-darkBlack mb-2 text-sm font-medium capitalize">{item.note}</Text>
        </View>

        <View className="mt-[26px] flex-row gap-3">
          <UiButton
            label="Delete"
            variant="error-outline"
            className="w-[45%]"
            onPress={() => {
              setModalOpen(false);
              onDelete(item.id);
            }}
          />
          <UiButton
            label="Edit Transaction"
            variant="primary"
            className="w-[55%]"
            onPress={() => {
              setModalOpen(false);
              onEdit?.(item);
            }}
          />
        </View>
      </BottomSheetModal>
    </>
  );
}

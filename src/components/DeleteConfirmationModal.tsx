import { Delete02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

interface DeleteConfirmationModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message?: string;
}

export default function DeleteConfirmationModal({
  visible,
  onConfirm,
  onCancel,
  message = 'Are you sure you want to delete your transaction? This action is permanent and will remove all your data from Tranzo. You can’t undo this.',
}: DeleteConfirmationModalProps) {
  if (!visible) return null;

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View className="flex-1 items-center justify-center bg-black/40">
        <View className="w-[85%] items-center rounded-[18px] bg-white p-6">
          <HugeiconsIcon icon={Delete02Icon} size={48} color="#E41418" />
          <Text className="mt-7 text-[20px] font-medium leading-8 text-[#091C35]">
            Delete Transaction
          </Text>
          <Text className="my-5 text-center text-sm text-[#434A52]">{message}</Text>
          <View className="w-full gap-3">
            <TouchableOpacity onPress={onConfirm} className="bg-error rounded-[60px] px-4 py-2">
              <Text className="text-center font-medium text-white">Yes, Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancel} className="rounded-[60px] px-4 py-2">
              <Text className="text-darkBlack text-center font-medium">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

import { PlusSignIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface FloatingButtonProps {
  onPress: () => void;
}

const FloatingButton = ({ onPress }: FloatingButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="bg-plusBtnBg size-[68px] items-center justify-center rounded-full shadow-lg"
    >
      <HugeiconsIcon icon={PlusSignIcon} size={22} className="text-white" />
    </TouchableOpacity>
  );
};

export default FloatingButton;

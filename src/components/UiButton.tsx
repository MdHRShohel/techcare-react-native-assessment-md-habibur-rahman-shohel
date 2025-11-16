import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface UiButtonProps {
  label: string;
  onPress?: () => void;
  selected?: boolean;
  variant?: 'solid' | 'outline' | 'primary' | 'primary-outline' | 'error-outline';
  className?: string;
}

export default function UiButton({
  label,
  onPress,
  selected = false,
  variant = 'solid',
  className = '',
}: UiButtonProps) {
  const base = 'rounded-[40px] px-5 py-2.5 border items-center justify-center';

  // Determine colors
  let bgClass = '';
  let borderClass = '';
  let textClass = '';

  if (selected) {
    bgClass = 'bg-tabBackground';
    borderClass = 'border-[#000]/10';
    textClass = 'text-black';
  } else {
    switch (variant) {
      case 'outline':
        bgClass = 'bg-transparent';
        borderClass = 'border-[#000]/20';
        textClass = 'text-black';
        break;
      case 'primary-outline':
        bgClass = 'bg-transparent';
        borderClass = 'border-titleText';
        textClass = 'text-textColor2 font-semibold text-sm';
        break;
      case 'error-outline':
        bgClass = 'bg-error/10';
        borderClass = 'border-error';
        textClass = 'text-error font-semibold text-sm';
        break;
      case 'primary':
        bgClass = 'bg-textColor2';
        borderClass = 'border-textColor2';
        textClass = 'text-white font-semibold text-sm';
        break;
      default:
        bgClass = 'bg-transparent';
        borderClass = 'border-[#000]/10';
        textClass = 'text-black';
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${base} ${bgClass} ${borderClass} ${className}`}
      activeOpacity={0.7}
    >
      <Text className={`text-sm ${textClass}`}>{label}</Text>
    </TouchableOpacity>
  );
}

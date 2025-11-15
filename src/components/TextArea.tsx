import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface TextAreaProps extends Omit<TextInputProps, 'onChange'> {
  label?: string;
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  rows?: number;
}

export default function TextArea({
  label,
  value,
  onChange,
  placeholder = '',
  rows = 4,
  ...rest
}: TextAreaProps) {
  return (
    <View className="w-full">
      {label && <Text className="text-textColor mb-2 text-sm">{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        multiline
        numberOfLines={rows}
        textAlignVertical="top"
        placeholderTextColor="#000"
        className="min-h-[92px] w-full rounded-[12px] border border-[#000]/10 bg-white px-4 py-3 text-sm shadow-sm"
        {...rest}
      />
    </View>
  );
}

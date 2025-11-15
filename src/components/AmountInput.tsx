import React from 'react';
import { TextInput } from 'react-native';

interface AmountInputProps {
  value: string;
  onChange: (val: string) => void;
}

export default function AmountInput({ value, onChange }: AmountInputProps) {
  const handleChange = (text: string) => {
    const numeric = text.replace(/[^0-9.]/g, '');
    onChange(`$${numeric}`);
  };

  return (
    <TextInput
      value={value}
      onChangeText={handleChange}
      keyboardType="numeric"
      textAlign="center"
      className="border-b border-[#565E7F24] text-[30px] font-semibold text-black"
    />
  );
}

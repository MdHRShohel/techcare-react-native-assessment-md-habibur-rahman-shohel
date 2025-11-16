import { Search01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import React from 'react';
import { TextInput, View } from 'react-native';

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
}) => {
  return (
    <View
      className={`flex-1 flex-row items-center rounded-[10px] bg-white px-3 shadow-sm ${className}`}
    >
      <HugeiconsIcon icon={Search01Icon} size={14} className="text-grey" />
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        className="ml-2 flex-1 text-sm text-[#515771]"
        placeholderTextColor="#515771"
      />
    </View>
  );
};

export default SearchBar;

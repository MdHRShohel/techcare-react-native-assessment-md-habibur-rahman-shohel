/* eslint-disable react-native/no-color-literals */
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import React, { useState } from 'react';
import { FlatList, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { CategoryItem } from '../types/categoryType';

interface DropdownProps {
  label?: string;
  value: string;
  options: CategoryItem[];
  onChange: (val: CategoryItem) => void;
}

export default function Dropdown({ label, value, options, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <View className="w-full" style={{ position: 'relative' }}>
      {label && <Text className="text-textColor mb-3 text-sm">{label}</Text>}

      {/* Trigger Input */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setOpen(!open)}
        className="w-full flex-row items-center justify-between rounded-[12px] border border-[#000]/10 bg-white px-4 py-3 shadow-sm"
      >
        <Text className="text-sm text-black">{value}</Text>
        <HugeiconsIcon icon={ArrowDown01Icon} size={16} className="text-grey" />
      </TouchableOpacity>

      {open && (
        <>
          <Pressable
            onPress={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: 75,
              left: 0,
              right: 0,
              zIndex: 100,
            }}
            className="max-h-[250px] overflow-auto rounded-[12px] border border-[#000]/10 bg-white py-2 shadow-lg"
          >
            <FlatList
              data={options}
              keyExtractor={(item) => item.id}
              nestedScrollEnabled
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onChange(item);
                    setOpen(false);
                  }}
                  className="flex-row items-center gap-3 border-b border-[#000]/10 px-4 py-3"
                >
                  {item.icon && (
                    <View
                      style={{
                        backgroundColor: '#EBF6F6',
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <HugeiconsIcon icon={item.icon} size={20} color="black" />
                    </View>
                  )}

                  <Text className="text-sm text-black">{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </>
      )}
    </View>
  );
}

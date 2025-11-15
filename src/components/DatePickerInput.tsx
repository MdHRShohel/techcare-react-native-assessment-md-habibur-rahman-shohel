import { Calendar03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import React, { useState } from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

interface DatePickerInputProps {
  label?: string;
  date?: Date; // optional, can be undefined initially
  onChange: (date: Date) => void;
  mode?: 'date' | 'time';
  placeholder?: string;
}

export default function DatePickerInput({
  label,
  date,
  onChange,
  mode = 'date',
  placeholder = 'Pick a date',
}: DatePickerInputProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | null>(date || null);

  const handleConfirm = (d: Date) => {
    setSelected(d);
    onChange(d);
    setOpen(false);
  };

  return (
    <View className="w-full" style={{ position: 'relative' }}>
      {label && <Text className="text-textColor mb-2 text-sm">{label}</Text>}

      {/* Trigger */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setOpen(true)}
        className="w-full flex-row items-center justify-between rounded-[12px] border border-[#000]/10 bg-white px-4 py-3 shadow-sm"
      >
        <Text className={`text-sm ${selected ? 'text-black' : 'text-darkBlack'}`}>
          {selected ? selected.toLocaleDateString() : placeholder}
        </Text>
        <HugeiconsIcon icon={Calendar03Icon} size={16} className="text-grey" />
      </TouchableOpacity>

      {/* Modal */}
      <Modal transparent visible={open} animationType="fade">
        <Pressable className="flex-1" onPress={() => setOpen(false)} />
        <View
          className="absolute bottom-0 left-0 right-0 rounded-t-2xl bg-white p-4 shadow-xl"
          style={{ paddingBottom: 32 }}
        >
          <DatePicker date={selected || new Date()} onDateChange={handleConfirm} mode={mode} />
          <TouchableOpacity
            onPress={() => setOpen(false)}
            className="mx-auto mt-4 w-[200px] items-center rounded-xl border border-grey/10 bg-tabBackground py-3"
          >
            <Text className="font-medium text-black">Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

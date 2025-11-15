import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { categories } from '../constants/category';
import { CategoryItem, CategoryType } from '../types/categoryType';
import AmountInput from './AmountInput';
import DatePickerInput from './DatePickerInput';
import Dropdown from './Dropdown';
import TextArea from './TextArea';
import UiButton from './UiButton';

interface TransactionsModalsComponentsProps {
  closeModal: () => void;
}

interface FormData {
  type: CategoryType;
  amount: string;
  category: CategoryItem | null;
  date?: Date;
  note: string;
}

const TransactionsModalsComponents = ({ closeModal }: TransactionsModalsComponentsProps) => {
  const [formData, setFormData] = useState<FormData>({
    type: 'expense',
    amount: '$',
    category: null,
    date: undefined,
    note: '',
  });

  const filteredCategories = categories.filter((c) => c.type === formData.type);

  const handleCancel = () => {
    // Reset the form to initial values
    setFormData({
      type: 'expense',
      amount: '$',
      category: null,
      date: undefined,
      note: '',
    });
    closeModal();
  };

  const handleSave = () => {
    if (!formData.category) {
      Alert.alert('Validation', 'Please select a category');
      return;
    }

    if (!formData.amount || formData.amount === '$') {
      Alert.alert('Validation', 'Please enter an amount');
      return;
    }

    // Example: send formData to backend or parent callback
    console.log('Saved Data:', formData);
    Alert.alert('Success', 'Transaction saved!');
  };

  return (
    <View>
      {/* Type Selector */}
      <View className="flex-row gap-3">
        <UiButton
          label="Expense"
          variant="outline"
          selected={formData.type === 'expense'}
          onPress={() => setFormData((prev) => ({ ...prev, type: 'expense', category: null }))}
        />
        <UiButton
          label="Income"
          variant="outline"
          selected={formData.type === 'income'}
          onPress={() => setFormData((prev) => ({ ...prev, type: 'income', category: null }))}
        />
      </View>

      {/* Form Fields */}
      <View className="mt-5 gap-4">
        <View>
          <Text className="text-textColor text-sm">Amount</Text>
          <AmountInput
            value={formData.amount}
            onChange={(val) => setFormData((prev) => ({ ...prev, amount: val }))}
          />
        </View>

        <Dropdown
          label="Category"
          value={formData.category?.label ?? 'Choose category'}
          options={filteredCategories}
          onChange={(item: CategoryItem) => setFormData((prev) => ({ ...prev, category: item }))}
        />

        <DatePickerInput
          label="Date"
          date={formData.date}
          onChange={(date) => setFormData((prev) => ({ ...prev, date }))}
        />

        <TextArea
          label="Notes"
          value={formData.note}
          onChange={(val) => setFormData((prev) => ({ ...prev, note: val }))}
          placeholder="Write a note here"
          rows={5}
        />
      </View>

      {/* Action Buttons */}
      <View className="mt-[26px] flex-row gap-3">
        <UiButton
          label="Cancel"
          variant="primary-outline"
          className="w-[45%]"
          onPress={handleCancel}
        />
        <UiButton label="Save" variant="primary" className="w-[55%]" onPress={handleSave} />
      </View>
    </View>
  );
};

export default TransactionsModalsComponents;

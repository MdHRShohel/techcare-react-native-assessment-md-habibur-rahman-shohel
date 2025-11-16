import React, { useMemo, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import uuid from 'react-native-uuid';
import { categories } from '../constants/category';
import { useTransactionStore } from '../store/useTransactionStore';
import { CategoryItem, CategoryType } from '../types/categoryType';
import { Transaction } from '../types/Transaction';
import AmountInput from './AmountInput';
import DatePickerInput from './DatePickerInput';
import Dropdown from './Dropdown';
import TextArea from './TextArea';
import UiButton from './UiButton';

interface TransactionsModalsComponentsProps {
  closeModal: () => void;
  editing?: Transaction | null;
}

interface FormData {
  type: CategoryType;
  amount: string;
  category: CategoryItem | null;
  date?: Date;
  note: string;
}

const defaultFormData: FormData = {
  type: 'expense',
  amount: '$',
  category: null,
  date: undefined,
  note: '',
};

const TransactionsModalsComponents = ({
  closeModal,
  editing,
}: TransactionsModalsComponentsProps) => {
  const initialForm = useMemo<FormData>(() => {
    if (editing) {
      return {
        type: editing.type,
        amount: `$${editing.amount}`,
        category: categories.find((c) => c.label === editing.category?.label) || null,
        date: editing.date ? new Date(editing.date) : undefined,
        note: editing.note ?? '',
      };
    }
    return defaultFormData;
  }, [editing]);

  const [formData, setFormData] = useState<FormData>(initialForm);

  const addTransaction = useTransactionStore((s) => s.addTransaction);
  const updateTransaction = useTransactionStore((s) => s.updateTransaction);

  const filteredCategories = categories.filter((c) => c.type === formData.type);

  const resetForm = () => setFormData(defaultFormData);

  const handleCancel = () => {
    resetForm();
    closeModal();
  };

  const handleSave = () => {
    if (!formData.category) return Alert.alert('Validation', 'Please select a category');
    if (!formData.amount || formData.amount === '$')
      return Alert.alert('Validation', 'Please enter an amount');
    if (!formData.date) return Alert.alert('Validation', 'Please pick a date');
    if (!formData.note) return Alert.alert('Validation', 'Please enter a note');

    const payload: Transaction = {
      id: editing ? editing.id : (uuid.v4() as string),
      type: formData.type,
      category: formData.category,
      amount: parseFloat(formData.amount.replace('$', '')),
      date: formData.date.toISOString(),
      note: formData.note,
    };

    if (editing) {
      updateTransaction(payload);
      Alert.alert('Success', 'Transaction updated!');
    } else {
      addTransaction(payload);
      Alert.alert('Success', 'Transaction added!');
    }

    resetForm();
    closeModal();
  };

  return (
    <View>
      <View className="flex-row gap-3">
        <UiButton
          label="Expense"
          variant="outline"
          selected={formData.type === 'expense'}
          onPress={() => setFormData((p) => ({ ...p, type: 'expense', category: null }))}
        />
        <UiButton
          label="Income"
          variant="outline"
          selected={formData.type === 'income'}
          onPress={() => setFormData((p) => ({ ...p, type: 'income', category: null }))}
        />
      </View>

      <View className="mt-5 gap-4">
        <View>
          <Text className="text-textColor text-sm">Amount</Text>
          <AmountInput
            value={formData.amount}
            onChange={(val) => setFormData((p) => ({ ...p, amount: val }))}
          />
        </View>

        <Dropdown
          label="Category"
          value={formData.category?.label ?? 'Choose category'}
          options={filteredCategories}
          onChange={(item: CategoryItem) => setFormData((p) => ({ ...p, category: item }))}
        />

        <DatePickerInput
          label="Date"
          date={formData.date}
          onChange={(date) => setFormData((p) => ({ ...p, date }))}
        />

        <TextArea
          label="Notes"
          value={formData.note}
          onChange={(val) => setFormData((p) => ({ ...p, note: val }))}
          placeholder="Write a note here"
          rows={5}
        />
      </View>

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

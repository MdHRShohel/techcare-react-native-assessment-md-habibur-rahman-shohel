import { Text, View } from 'react-native';
import { Transaction } from '../types/Transaction';
import { formatCurrency } from '../utils/formatCurrency';
import { formatHeaderDate } from '../utils/formatHeaderDate';

export const TransactionSectionHeader = ({
  title,
  data,
}: {
  title: string;
  data: Transaction[];
}) => {
  const total = data.reduce((sum, tx) => {
    const amount =
      typeof tx.amount === 'string'
        ? parseFloat(tx.amount.replace('$', '')) || 0
        : typeof tx.amount === 'number'
          ? tx.amount
          : 0;
    return sum + amount;
  }, 0);

  return (
    <View className="mb-2 mt-6 flex-row justify-between">
      <Text className="flex-1 text-sm font-medium uppercase text-grey">
        {formatHeaderDate(title)}
      </Text>
      <Text className="font-medium text-grey">{formatCurrency(total)}</Text>
    </View>
  );
};

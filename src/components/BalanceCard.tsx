import { ViewIcon, ViewOffSlashIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import RoundedArrow from '../assets/Icons/arrow-rounded.svg';
import CardBG from '../assets/images/card-bg.png';
import PriceBg1 from '../assets/images/pricebg-1.png';
import PriceBg2 from '../assets/images/pricebg-2.png';
import { useTransactionStore } from '../store/useTransactionStore';
import { formatCurrency } from '../utils/formatCurrency';
import GradientDivider from './GradientDivider';

const BalanceCard = () => {
  const [isBalanceVisible, setIsBalanceVisible] = React.useState(true);
  const transactions = useTransactionStore((s) => s.transactions);

  const balanceData = React.useMemo(() => {
    const income = transactions
      .filter((t) => t.type === 'income')
      .reduce(
        (sum, t) =>
          sum + (typeof t.amount === 'number' ? t.amount : parseFloat(t.amount.toString())),
        0,
      );

    const expense = transactions
      .filter((t) => t.type === 'expense')
      .reduce(
        (sum, t) =>
          sum + (typeof t.amount === 'number' ? t.amount : parseFloat(t.amount.toString())),
        0,
      );

    return { totalBalance: income - expense, income, expense };
  }, [transactions]);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <View className="relative mr-1 p-4 shadow-md">
      <Image source={CardBG} className="absolute inset-0" />
      <View className="flex-row">
        <Text className="flex-1 text-xs font-medium uppercase text-gray">total balance</Text>
        <TouchableOpacity onPress={toggleBalanceVisibility}>
          <HugeiconsIcon
            icon={isBalanceVisible ? ViewOffSlashIcon : ViewIcon}
            className="size-5 text-gray"
          />
        </TouchableOpacity>
      </View>
      <Text className="mt-[10px] text-3xl font-bold text-titleText">
        {isBalanceVisible ? formatCurrency(balanceData.totalBalance) : '********'}
      </Text>

      <View className="-mx-[14px]">
        <GradientDivider />
      </View>

      <View className="flex-row justify-between gap-[18px]">
        <View className="relative flex-1 px-[14px] py-3">
          <Image source={PriceBg1} className="absolute inset-0" />
          <View className="absolute right-3 top-3">
            <RoundedArrow />
          </View>
          <Text className="text-xs font-medium text-gray">Income</Text>
          <Text className="mt-[6px] text-[20px] font-medium text-titleText">
            {formatCurrency(balanceData.income)}
          </Text>
        </View>
        <View className="relative flex-1 px-[14px] py-3">
          <Image source={PriceBg2} className="absolute inset-0" />
          <View className="absolute right-3 top-3 rotate-180">
            <RoundedArrow />
          </View>
          <Text className="text-xs font-medium text-gray">Expense</Text>
          <Text className="mt-[6px] text-[20px] font-medium text-titleText">
            {formatCurrency(balanceData.expense)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceCard;

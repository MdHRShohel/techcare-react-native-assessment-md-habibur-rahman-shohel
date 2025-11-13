import { ViewIcon, ViewOffSlashIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import CardBG from '../assets/images/card-bg.png';
import GradientDivider from './GradientDivider';

const BalanceCard = () => {
  const [isBalanceVisible, setIsBalanceVisible] = React.useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <View className="relative mr-1 p-4">
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
      <Text className="text-titleText mt-[10px] text-3xl font-bold">
        {isBalanceVisible ? '$12,345.67' : '********'}
      </Text>

      <View className="-mx-[14px] my-[18px]">
        <GradientDivider />
      </View>
    </View>
  );
};

export default BalanceCard;

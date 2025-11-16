import { Wallet01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import React from 'react';
import { Text, View } from 'react-native';

const SplashScreen = () => {
  return (
    <View className="flex-1 animate-pulse items-center justify-center bg-[#eef6fb]">
      <HugeiconsIcon icon={Wallet01Icon} size={100} className="mb-4 text-[#0F0D27]" />
      <Text className=" text-3xl font-bold text-[#0F0D27]">Finance</Text>
    </View>
  );
};

export default SplashScreen;

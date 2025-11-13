import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NotificationIcon } from '../assets/Icons';
import ProfileImg from '../assets/images/profile.png';

type CustomHeaderProps = {
  title: string;
  route: { name: string };
};

export default function CustomHeader({ title, route }: CustomHeaderProps) {
  return (
    <View className="flex-row items-center justify-between bg-[#EDF5FB] px-4 py-3">
      <View className="flex-row items-center">
        <View className="flex-col">
          {route?.name === 'Home' && <Text className="text-sm text-gray">Good Morning 👋</Text>}
          <Text className="text-titleText text-xl font-semibold">
            {route?.name === 'Home' ? 'Johnson Smith' : title}
          </Text>
        </View>
      </View>
      <View className="flex-row items-center gap-4">
        <TouchableOpacity>
          <NotificationIcon width={22} height={22} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={ProfileImg} className="size-10 rounded-full" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

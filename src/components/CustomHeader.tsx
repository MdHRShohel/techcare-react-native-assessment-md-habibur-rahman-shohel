import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NotificationIcon } from '../assets/Icons';
import ProfileImg from '../assets/images/profile.png';
import { useAuthStore } from '../store/useAuthStore';

type CustomHeaderProps = {
  title: string;
  route: { name: string };
};

export default function CustomHeader({ title, route }: CustomHeaderProps) {
  const user = useAuthStore((s) => s.user);
  const name = user?.name || '';
  return (
    <View className="flex-row items-center justify-between bg-[#EDF5FB] px-4 py-3">
      <View className="flex-row items-center">
        <View className="flex-col">
          {route?.name === 'Home' && <Text className="text-sm text-gray">Good Morning 👋</Text>}
          <Text className="text-xl font-semibold text-titleText">
            {route?.name === 'Home' ? name : title}
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

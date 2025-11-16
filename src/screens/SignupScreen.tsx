import { ChatUser01Icon, LockIcon, Mail01Icon, Wallet01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../store/useAuthStore';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Main: undefined;
};

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signup = useAuthStore((s) => s.signup);
  const loading = useAuthStore((s) => s.loading);

  const navigation = useNavigation<Nav>();

  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    const success = await signup(name, email, password);
    if (success) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
    } else {
      Alert.alert('Signup Failed', 'Something went wrong. Try again.');
    }
  };

  return (
    <View className="flex-1 justify-center bg-white px-8">
      {/* Header */}
      <View className="mb-10 items-center">
        <HugeiconsIcon icon={Wallet01Icon} size={70} className="text-[#0F0D27]" />
        <Text className="mt-2 text-3xl font-bold text-[#0F0D27]">Create Account</Text>
      </View>

      {/* Full Name */}
      <View className="mb-4">
        <Text className="mb-1 text-sm text-slate-500">Full Name</Text>
        <View className="flex-row items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3">
          <HugeiconsIcon icon={ChatUser01Icon} size={18} className="text-slate-600" />
          <TextInput
            placeholder="John Doe"
            placeholderTextColor="#9CA3AF"
            className="flex-1 text-slate-900"
            onChangeText={setName}
            value={name}
          />
        </View>
      </View>

      {/* Email */}
      <View className="mb-4">
        <Text className="mb-1 text-sm text-slate-500">Email</Text>
        <View className="flex-row items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3">
          <HugeiconsIcon icon={Mail01Icon} size={18} className="text-slate-600" />
          <TextInput
            placeholder="you@example.com"
            placeholderTextColor="#9CA3AF"
            className="flex-1 text-slate-900"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
        </View>
      </View>

      {/* Password */}
      <View className="mb-4">
        <Text className="mb-1 text-sm text-slate-500">Password</Text>
        <View className="flex-row items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3">
          <HugeiconsIcon icon={LockIcon} size={18} className="text-slate-600" />
          <TextInput
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            className="flex-1 text-slate-900"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
        </View>
      </View>

      {/* Confirm Password */}
      <View className="mb-6">
        <Text className="mb-1 text-sm text-slate-500">Confirm Password</Text>
        <View className="flex-row items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3">
          <HugeiconsIcon icon={LockIcon} size={18} className="text-slate-600" />
          <TextInput
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            className="flex-1 text-slate-900"
            secureTextEntry
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
        </View>
      </View>

      {/* Signup Button */}
      <TouchableOpacity
        disabled={loading}
        onPress={handleSignup}
        className={`w-full rounded-xl py-4 active:opacity-90 ${
          loading ? 'bg-[#0F0D27]/60' : 'bg-[#0F0D27]'
        }`}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-center text-base font-semibold text-white">Sign Up</Text>
        )}
      </TouchableOpacity>

      {/* Login Link */}
      <Text className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{' '}
        <Text className="font-semibold text-[#0F0D27]" onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>

      {/* Footer */}
      <Text className="mt-6 text-center text-sm text-slate-500">
        Start your journey with Finance App 🚀
      </Text>
    </View>
  );
}

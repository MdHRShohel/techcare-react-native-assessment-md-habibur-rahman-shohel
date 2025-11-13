import { Text, View } from 'react-native';
import { ScreenWrapper } from '../components/ScreenWrapper';

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-semibold text-slate-900">Home Screen 🏠</Text>
      </View>
    </ScreenWrapper>
  );
}

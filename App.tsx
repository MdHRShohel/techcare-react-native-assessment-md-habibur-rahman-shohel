import './global.css';
import { StatusBar, Text, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
// Ignore SafeAreaView deprecation warning from dependencies
LogBox.ignoreLogs(['SafeAreaView has been deprecated']);

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-2xl font-bold text-blue-500">Initial setup with nativewind</Text>
      </View>
    </SafeAreaProvider>
  );
}

export default App;

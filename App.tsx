/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';
import RootNavigator from './src/navigation/RootNavigator';

if ((Text as any).defaultProps == null) {
  (Text as any).defaultProps = {};
}
(Text as any).defaultProps.style = { fontFamily: 'Inter' };

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

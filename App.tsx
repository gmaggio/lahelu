import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import store from '@core/state/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppDrawer } from '@core/components';
import { useLoadFonts } from '@core/hooks';
import { linking } from '@core/routes';

export default function App() {
  const { fontsLoaded, fontsError } = useLoadFonts();

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer linking={linking}>
            <AppDrawer />
            <StatusBar style="light" backgroundColor="#1a1a1a" />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
}

import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import store from '@core/state/store';
import {
  DrawerLayout,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppHeader, AppDrawer, BottomTabs } from '@core/components';
import { useAppDrawer, useLoadFonts } from '@core/hooks';
import { linking } from '@core/routes';

export default function App() {
  const { drawerRef, drawerContentType, openAppDrawer, closeAppDrawer } =
    useAppDrawer();

  const { fontsLoaded, fontsError } = useLoadFonts();

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer linking={linking}>
            <DrawerLayout
              ref={drawerRef}
              drawerWidth={300}
              drawerPosition="right"
              renderNavigationView={() =>
                drawerContentType && <AppDrawer type={drawerContentType} />
              }
              onDrawerClose={closeAppDrawer}
            >
              <View className="flex-1">
                <AppHeader
                  openTagsDrawer={() => openAppDrawer('tags')}
                  openSearchDrawer={() => openAppDrawer('search')}
                />
                <BottomTabs />
              </View>
            </DrawerLayout>
            <StatusBar style="light" backgroundColor="#1a1a1a" />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
}

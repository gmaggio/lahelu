/* eslint-disable camelcase */
import { Provider } from 'react-redux';
import RouteWrapper from 'src/routes/RouteWrapper';
import { StatusBar } from 'expo-status-bar';
import routeMap from '@routes/routeMap';
import { NavigationContainer } from '@react-navigation/native';
import store from '@shared/state/store';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_500Medium,
  OpenSans_500Medium_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';
import { useEffect } from 'react';

const linking = {
  prefixes: ['https://lahelu.com', 'lahelu://'],
  config: {
    screens: Object.keys(routeMap).reduce(
      (acc, routeName) => {
        const { path } = routeMap[routeName as keyof typeof routeMap];
        return { ...acc, [routeName]: path };
      },
      {} as Record<string, string>,
    ),
  },
};

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_500Medium,
    OpenSans_500Medium_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RouteWrapper />
        <StatusBar style="light" translucent />
      </NavigationContainer>
    </Provider>
  );
}

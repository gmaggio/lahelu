/* eslint-disable camelcase */
import { Provider } from 'react-redux';
import RouteWrapper from 'src/routes/RouteWrapper';
import { StatusBar } from 'expo-status-bar';
import routeMap from '@routes/routeMap';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import store from '@shared/state/store';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '@shared/components';
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
import PostsView from '@features/posts/presentation/views/PostsView';

const linking: LinkingOptions<ReactNavigation.RootParamList> | undefined = {
  prefixes: ['https://lahelu.com', 'lahelu://'],
  config: {
    screens: Object.keys(routeMap).reduce(
      (screenConfig, routeName) => {
        const { name } = routeMap[routeName as keyof typeof routeMap];
        return { ...screenConfig, [routeName]: name };
      },
      {} as Record<string, string>,
    ),
  },
};

const Tab = createBottomTabNavigator();

const renderHeader = () => <Header />;

const renderTabBarIcon = (routeName: string, color: string, size: number) => {
  let iconName: keyof typeof Ionicons.glyphMap = 'home';

  switch (routeName) {
    case 'Home':
      iconName = 'home-outline';
      break;
    case 'Topics':
      iconName = 'people-outline';
      break;
    case 'Create':
      iconName = 'add-circle-outline';
      break;
    case 'Notifications':
      iconName = 'notifications-outline';
      break;
    case 'User':
      iconName = 'person-circle';
      break;
    default:
      break;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer linking={linking}>
          {/* <RouteWrapper /> */}

          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: true,
              header: renderHeader,
              backgroundColor: '#1a1a1a',
              tabBarActiveTintColor: '#4f738b',
              tabBarInactiveTintColor: 'white',
              tabBarActiveBackgroundColor: '#1a1a1a',
              tabBarInactiveBackgroundColor: '#1a1a1a',
              tabBarShowLabel: false,
              tabBarStyle: {
                borderTopWidth: 0,
              },
              tabBarItemStyle: {
                borderTopWidth: 2,
                borderTopColor: '#000',
              },
              tabBarIcon: ({ color, size }) =>
                renderTabBarIcon(route.name, color, size),
            })}
          >
            <Tab.Screen name="Home" component={PostsView} />
            <Tab.Screen name="Topics" component={PostsView} />
            <Tab.Screen name="Create" component={PostsView} />
            <Tab.Screen name="Notifications" component={PostsView} />
            <Tab.Screen name="User" component={PostsView} />
          </Tab.Navigator>

          <StatusBar style="light" backgroundColor="#1a1a1a" />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

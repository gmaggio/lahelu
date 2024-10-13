/* eslint-disable camelcase */
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import routeMap from '@routes/routeMap';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import store from '@shared/state/store';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import {
  DrawerLayout,
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DText, Header } from '@shared/components';
import PostsView from '@features/posts/presentation/views/PostsView';
import { View } from 'react-native';
import { HeaderProps } from '@shared/components/Header';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
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

const AppHeader = ({ openTagsDrawer, openSearchDrawer }: HeaderProps) => (
  <Header openTagsDrawer={openTagsDrawer} openSearchDrawer={openSearchDrawer} />
);

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
      iconName = 'search-outline';
      break;
    case 'User':
      iconName = 'person-circle';
      break;
    default:
      break;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const renderDrawerContent = (drawerContentType: 'tags' | 'search' | null) => {
  if (drawerContentType === 'tags') {
    return (
      <SafeAreaView className="flex-1 bg-[#1a1a1a] p-4">
        <DText className="text-lg text-white" weight="800ExtraBold">
          Filter by Tag
        </DText>
        {['Tag1', 'Tag2', 'Tag3'].map((tag) => (
          <TouchableOpacity
            key={tag}
            onPress={() => console.log(`Filter by ${tag}`)}
          >
            <DText className="text-white">{tag}</DText>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    );
  }

  if (drawerContentType === 'search') {
    return (
      <SafeAreaView className="flex-1 bg-[#1a1a1a] p-4">
        <DText className="text-lg text-white" weight="800ExtraBold">
          Notifications
        </DText>
        {['Notification 1', 'Notification 2', 'Notification 3'].map(
          (notification) => (
            <View key={notification} style={{ marginVertical: 8 }}>
              <DText className="text-white">{notification}</DText>
            </View>
          ),
        )}
      </SafeAreaView>
    );
  }

  return null;
};

export default function App() {
  const drawerRef = useRef<DrawerLayout>(null);
  const [drawerContentType, setDrawerContentType] = useState<
    'tags' | 'search' | null
  >(null);

  const openDrawer = (type: 'tags' | 'search') => {
    setDrawerContentType(type);
    drawerRef.current?.openDrawer();
  };

  const closeDrawer = () => {
    setDrawerContentType(null);
    drawerRef.current?.closeDrawer();
  };

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
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer linking={linking}>
            <DrawerLayout
              ref={drawerRef}
              drawerWidth={300}
              drawerPosition="right"
              renderNavigationView={() =>
                renderDrawerContent(drawerContentType)
              }
              onDrawerClose={closeDrawer}
            >
              <View className="flex-1">
                <AppHeader
                  openTagsDrawer={() => openDrawer('tags')}
                  openSearchDrawer={() => openDrawer('search')}
                />
                <Tab.Navigator
                  screenOptions={({ route }) => ({
                    headerShown: false,
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
              </View>
            </DrawerLayout>
            <StatusBar style="light" backgroundColor="#1a1a1a" />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
}

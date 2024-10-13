import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsView from '@features/posts/presentation/views/PostsView';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const renderTabBarIcon = (routeName: string, color: string, size: number) => {
  const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
    Home: 'home-outline',
    Topics: 'people-outline',
    Create: 'add-circle-outline',
    Notifications: 'search-outline',
    User: 'person-circle',
  };
  return <Ionicons name={icons[routeName]} size={size} color={color} />;
};

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#4f738b',
      tabBarInactiveTintColor: 'white',
      tabBarActiveBackgroundColor: '#1a1a1a',
      tabBarInactiveBackgroundColor: '#1a1a1a',
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 60,
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
);

export default BottomTabs;

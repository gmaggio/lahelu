import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeView from '@features/home/presentation/views/HomeView';

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeView}
        options={{ title: 'Lahelu Home' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;

import React from 'react';
import PostsView from '@features/posts/presentation/views/PostsView';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Posts: undefined;
};

interface RouteType {
  name: string;
  component: React.ComponentType<object>;
  options: NativeStackNavigationOptions;
}

const routeMap: Record<keyof RootStackParamList, RouteType> = {
  Posts: {
    name: 'posts',
    component: PostsView,
    options: {
      headerShown: false,
    },
  },
};

export default routeMap;

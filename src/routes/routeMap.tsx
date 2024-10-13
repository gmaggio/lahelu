import React from 'react';
import PostsView from '@features/posts/presentation/views/PostsView';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Posts: undefined;
};

interface RouteType {
  component: React.ComponentType<object>;
  options: NativeStackNavigationOptions;
  path: string;
}

const routeMap: Record<keyof RootStackParamList, RouteType> = {
  Posts: {
    component: PostsView,
    options: {
      headerShown: false,
    },
    path: 'posts',
  },
};

export default routeMap;

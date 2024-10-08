import React from 'react';
import HomeView from '@features/home/presentation/views/HomeView';
import ScreenHeader from '@shared/components/ScreenHeader';

export type RootStackParamList = {
  Home: undefined;
};

interface RouteType {
  component: React.ComponentType<object>;
  options: object;
  path: string;
}

const routeMap: Record<keyof RootStackParamList, RouteType> = {
  Home: {
    component: HomeView,
    options: {
      title: 'Lahelu',
      header: () => <ScreenHeader />,
    },
    path: 'home',
  },
};

export default routeMap;

import HomeView from '@features/home/presentation/views/HomeView';

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
    options: { title: 'Lahelu' },
    path: 'home',
  },
};

export default routeMap;

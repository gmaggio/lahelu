import HomeView from '@features/home/presentation/views/HomeView';

interface RouteType {
  name: string;
  component: React.ComponentType<object>;
  options: object;
}

const routeMap: RouteType[] = [
  {
    name: 'Home',
    component: HomeView,
    options: { title: 'Lahelu' },
  },
];

export default routeMap;

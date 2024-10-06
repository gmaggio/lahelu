import { Provider } from 'react-redux';
import RouteWrapper from 'src/routes/RouteWrapper';
import { StatusBar } from 'expo-status-bar';
import routeMap from '@routes/routeMap';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/shared/state/store';

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
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RouteWrapper />
        <StatusBar />
      </NavigationContainer>
    </Provider>
  );
}

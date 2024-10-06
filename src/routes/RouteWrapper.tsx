import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routeMap from './routeMap';

const Stack = createNativeStackNavigator();

const RouteWrapper = () => (
  <Stack.Navigator>
    {routeMap.map((Current) => {
      const CurrentComponent = Current.component;

      return (
        <Stack.Screen
          key={Current.name}
          name={Current.name}
          component={CurrentComponent}
          options={Current.options}
        />
      );
    })}
  </Stack.Navigator>
);

export default RouteWrapper;

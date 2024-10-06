import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routeMap from './routeMap';

const Stack = createNativeStackNavigator();

const RouteWrapper = () => (
  <Stack.Navigator>
    {Object.entries(routeMap).map(([key, Current]) => {
      const CurrentComponent = Current.component;

      return (
        <Stack.Screen
          key={key}
          name={key}
          component={CurrentComponent}
          options={Current.options}
        />
      );
    })}
  </Stack.Navigator>
);

export default RouteWrapper;

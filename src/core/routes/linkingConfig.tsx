import routeMap from '@core/routes/routeMap';
import { LinkingOptions } from '@react-navigation/native';

const linking: LinkingOptions<ReactNavigation.RootParamList> | undefined = {
  prefixes: ['https://lahelu.com', 'lahelu://'],
  config: {
    screens: Object.keys(routeMap).reduce(
      (screenConfig, routeName) => {
        const { name } = routeMap[routeName as keyof typeof routeMap];
        return { ...screenConfig, [routeName]: name };
      },
      {} as Record<string, string>,
    ),
  },
};

export default linking;

import AppHeader from '@core/components/AppHeader';
import BottomTabs from '@core/components/BottomTabs';
import { SearchDrawerView, TagsDrawerView } from '@shared/components';
import { View } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export interface DrawerViewProps {
  name: string;
  component: React.ComponentType<unknown>;
}

type DrawerParamList = {
  HomeStack: undefined;
  Settings: undefined;
};

const Main = () => {
  const navigation = useNavigation();

  const openTagsDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const openSearchDrawer = () => {
    const parentNavigation =
      navigation.getParent<DrawerNavigationProp<DrawerParamList>>();
    if (parentNavigation) {
      parentNavigation.openDrawer();
    }
  };

  return (
    <View className="flex-1">
      <AppHeader
        openTagsDrawer={() => openTagsDrawer()}
        openSearchDrawer={() => openSearchDrawer()}
      />
      <BottomTabs />
    </View>
  );
};

const TagsDrawer = () => <TagsDrawerView name="Main" component={Main} />;

const SearchDrawer = () => (
  <SearchDrawerView name="TagsDrawer" component={TagsDrawer} />
);

const AppDrawer: React.FC = () => <SearchDrawer />;

export default AppDrawer;

import AppHeader from '@core/components/AppHeader';
import BottomTabs from '@core/components/BottomTabs';
import { SearchDrawerView, TagsDrawerView } from '@shared/components';
import { View } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export interface DrawerViewProps {
  name: string;
  component: React.ComponentType;
}

type DrawerParamList = {
  TagsDrawer: undefined;
  SearchDrawer: undefined;
};

const Main: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const openDrawer = (drawerType: 'tags' | 'search') => {
    if (drawerType === 'tags') {
      navigation.dispatch(DrawerActions.openDrawer());
    } else {
      const parentNavigation =
        navigation.getParent<DrawerNavigationProp<DrawerParamList>>();
      if (parentNavigation) {
        parentNavigation.openDrawer();
      }
    }
  };

  return (
    <View className="flex-1">
      <AppHeader
        openTagsDrawer={() => openDrawer('tags')}
        openSearchDrawer={() => openDrawer('search')}
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

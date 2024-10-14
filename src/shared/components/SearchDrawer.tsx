import { DrawerViewProps } from '@core/components';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import DText from '@shared/components/DText';
import clsx from 'clsx';

const SearchDrawer = createDrawerNavigator();

const renderSearchDrawerContent = () => <SearchDrawerContent />;

function SearchDrawerContent() {
  return (
    <SafeAreaView className={clsx('flex-1 gap-2', 'p-4', 'bg-[#1a1a1a]')}>
      <DText>Search</DText>
    </SafeAreaView>
  );
}

const SearchDrawerView = ({ name, component }: DrawerViewProps) => (
  <SearchDrawer.Navigator
    id="SearchDrawer"
    screenOptions={{
      drawerPosition: 'right',
      headerShown: false,
      drawerStyle: {
        width: 300,
      },
    }}
    drawerContent={renderSearchDrawerContent}
  >
    <SearchDrawer.Screen name={name} component={component} />
  </SearchDrawer.Navigator>
);

export default SearchDrawerView;

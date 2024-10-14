import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerViewProps } from '@core/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import DText from '@shared/components/DText';
import clsx from 'clsx';

const TagsDrawer = createDrawerNavigator();

const renderTagsDrawerContent = () => <TagsDrawerContent />;

function TagsDrawerContent() {
  return (
    <SafeAreaView className={clsx('flex-1 gap-2', 'p-4', 'bg-[#1a1a1a]')}>
      <DText>Tag1</DText>
      <DText>Tag2</DText>
      <DText>Tag3</DText>
    </SafeAreaView>
  );
}

const TagsDrawerView = ({ name, component }: DrawerViewProps) => (
  <TagsDrawer.Navigator
    id="TagsDrawer"
    screenOptions={{
      drawerPosition: 'left',
      headerShown: false,
      drawerStyle: {
        width: 250,
      },
    }}
    drawerContent={renderTagsDrawerContent}
  >
    <TagsDrawer.Screen name={name} component={component} />
  </TagsDrawer.Navigator>
);
export default TagsDrawerView;

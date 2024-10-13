import DText from '@shared/components/DText';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

interface AppDrawerProps {
  type: 'tags' | 'search';
}

const AppDrawer: React.FC<AppDrawerProps> = ({ type }) => {
  const content = {
    tags: {
      title: 'Filter by Tag',
      items: ['Tag1', 'Tag2', 'Tag3'],
    },
    search: {
      title: 'Notifications',
      items: ['Notification 1', 'Notification 2', 'Notification 3'],
    },
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1a1a', padding: 16 }}>
      <DText className="text-lg text-white" weight="800ExtraBold">
        {content[type].title}
      </DText>
      {content[type].items.map((item) => (
        <TouchableOpacity key={item} onPress={() => console.log(`${item}`)}>
          <DText className="text-white">{item}</DText>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default AppDrawer;

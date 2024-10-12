import DText from '@shared/components/DText';
import clsx from 'clsx';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const Header = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
      }}
    >
      <View
        className={clsx(
          'flex-row items-start justify-between',
          'border-b-2 border-b-black',
          'p-6',
          'bg-[#1a1a1a]',
        )}
      >
        <View className={clsx('flex-row items-center')}>
          <Feather name="menu" size={22} color="white" />
          <DText
            className={clsx('text-[#65a4ec] text-2xl', 'pl-4')}
            weight="800ExtraBold"
          >
            LAHELU
          </DText>
        </View>
        <View className="flex-row gap-4">
          <Feather name="search" size={22} color="white" />
          <Feather name="plus-circle" size={22} color="white" />
          <Feather name="bell" size={22} color="white" />
          <Feather name="user" size={22} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Header;

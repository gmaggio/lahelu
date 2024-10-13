import DText from '@shared/components/DText';
import clsx from 'clsx';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

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
          'p-3',
          'bg-[#1a1a1a]',
        )}
      >
        <View className={clsx('flex-row items-center')}>
          <TouchableOpacity className="p-3">
            <Ionicons name="menu" size={22} color="white" />
          </TouchableOpacity>
          <DText
            className={clsx('text-[#65a4ec] text-2xl', 'px-4 py-2')}
            weight="800ExtraBold"
          >
            LAHELU
          </DText>
        </View>
        <View className="flex-row">
          {[
            {
              icon: 'search-outline',
              action: () => {},
              mobileOnly: true,
            },
            {
              icon: 'add-circle-outline',
              action: () => {},
              mobileOnly: false,
            },
            {
              icon: 'notifications-outline',
              action: () => {},
              mobileOnly: false,
            },
            {
              icon: 'person-circle',
              action: () => {},
              mobileOnly: false,
            },
          ].map(({ icon, action, mobileOnly }) => (
            <TouchableOpacity
              key={icon}
              className={clsx('p-3', !mobileOnly && 'hidden md:flex')}
              onPress={action}
            >
              <Ionicons
                name={icon as keyof typeof Ionicons.glyphMap}
                size={22}
                color="white"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Header;

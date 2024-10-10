import clsx from 'clsx';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="light" backgroundColor="red" />
      <View
        className={clsx(
          'items-start justify-center',
          'border-b-2 border-b-[#4f738b]',
          'bg-[#1a1a1a]',
        )}
        style={{
          paddingTop: insets.top,
        }}
      >
        <View className={clsx('p-6')}>
          <Text className="text-[#65a4ec] text-2xl font-bold">LAHELU</Text>
        </View>
      </View>
    </>
  );
};

export default Header;

import clsx from 'clsx';
import React from 'react';
import { Text, View, SafeAreaView, StatusBar } from 'react-native';

const ScreenHeader = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <View
        className={clsx(
          'items-center justify-center h-[80]',
          'border-b-2 border-b-[#4f738b]',
          'bg-[#1a1a1a]',
        )}
      >
        <Text className="text-[#65a4ec] text-3xl font-bold">LAHELU</Text>
      </View>
    </SafeAreaView>
  </>
);

export default ScreenHeader;

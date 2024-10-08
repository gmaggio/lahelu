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
      <View className="items-center justify-center h-[80] bg-[#1a1a1a] border-b-2 border-b-[#4f738b]">
        <Text className="text-[#65a4ec] text-3xl font-bold">LAHELU</Text>
      </View>
    </SafeAreaView>
  </>
);

export default ScreenHeader;

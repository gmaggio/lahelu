import DText from '@shared/components/DText';
import clsx from 'clsx';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = () => {
  const insets = useSafeAreaInsets();

  return (
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
        <DText className="text-[#65a4ec] text-2xl" weight="800ExtraBold" italic>
          LAHELU
        </DText>
      </View>
    </View>
  );
};

export default Header;

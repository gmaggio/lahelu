import { Icon } from '@expo/vector-icons/build/createIconSet';
import DText from '@shared/components/DText';
import clsx from 'clsx';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

interface BoxedButtonProps {
  key: string;
  icon?: React.ReactElement<Icon<string, string>>;
  label?: string | undefined;
  onPress?: () => void;
}

interface Props {
  buttons: BoxedButtonProps[];
  classNameProp?: string | undefined;
}

const BoxedButtons: React.FC<Props> = ({ buttons, classNameProp }) => (
  <View
    className={clsx(
      'flex-row items-center justify-center',
      'rounded-lg border border-[#414141]',
      'overflow-hidden',
      classNameProp,
    )}
  >
    {buttons.map(({ key, icon, label, onPress }, index) => (
      <TouchableOpacity
        key={key}
        onPress={onPress}
        className={clsx(index > 0 && 'border-l border-[#414141]')}
      >
        <View
          key={key}
          className={clsx('flex-row items-center justify-between', 'p-3')}
        >
          {icon}
          {label && <DText className={clsx(icon && 'pl-2')}>{label}</DText>}
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

export default BoxedButtons;

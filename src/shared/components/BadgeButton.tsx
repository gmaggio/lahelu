import { Icon } from '@expo/vector-icons/build/createIconSet';
import DText from '@shared/components/DText';
import clsx from 'clsx';
import React from 'react';
import { ColorValue, View } from 'react-native';

interface Props {
  icon?: React.ReactElement<Icon<string, string>>;
  label: string;
  badgeColor?: ColorValue | undefined;
  textColor?: ColorValue | undefined;
  classNameProp?: string | undefined;
  classNameLabel?: string | undefined;
}

const BadgeButton: React.FC<Props> = ({
  icon,
  label,
  badgeColor,
  textColor,
  classNameProp,
  classNameLabel,
}) => (
  <View
    className={clsx(
      'flex-row items-center justify-between',
      'px-3 py-1',
      'border rounded-full',
      classNameProp,
    )}
    style={{
      backgroundColor: badgeColor ?? 'transparent',
      borderColor: badgeColor ?? '#414141',
    }}
  >
    {icon !== null && icon}
    <DText
      className={clsx(icon !== null && 'pl-2', classNameLabel)}
      style={{
        color: textColor ?? 'white',
      }}
    >
      {label}
    </DText>
  </View>
);

export default BadgeButton;

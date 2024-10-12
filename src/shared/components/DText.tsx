/* eslint-disable react/jsx-props-no-spreading */
import { Text, TextProps } from 'react-native';
import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { FontWeight, getFontFamilyTW } from '@shared/utils';

interface DTextProps extends TextProps {
  children: ReactNode;
  className?: string;
  weight?: FontWeight;
  italic?: boolean;
}

const DText: React.FC<DTextProps> = ({
  children,
  className,
  weight = '400Regular',
  italic = false,
  ...props
}: DTextProps) => (
  <Text
    className={clsx(
      getFontFamilyTW(weight, italic),
      'text-textColor',
      className,
    )}
    style={{
      includeFontPadding: false,
    }}
    {...props}
  >
    {children}
  </Text>
);

export default DText;

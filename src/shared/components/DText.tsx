/* eslint-disable react/jsx-props-no-spreading */
import { Text, TextProps } from 'react-native';
import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface DTextProps extends TextProps {
  children: ReactNode;
  className?: string;
}

const DText: React.FC<DTextProps> = ({
  children,
  className,
  ...props
}: DTextProps) => (
  <Text className={clsx('text-textColor', className)} {...props}>
    {children}
  </Text>
);

export default DText;

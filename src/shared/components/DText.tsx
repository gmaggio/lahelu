/* eslint-disable react/jsx-props-no-spreading */
import { Text, TextProps } from 'react-native';

const DText: React.FC<TextProps> = ({
  children,
  className,
  ...props
}: TextProps) => (
  <Text className={`text-textColor ${className}`} {...props}>
    {children}
  </Text>
);

export default DText;

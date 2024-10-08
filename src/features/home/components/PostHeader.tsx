import React from 'react';
import { View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import DText from '@shared/components/DText';
import { styled } from 'nativewind';

const StyledView = styled(View);

interface Props {
  userID: string;
  avatar: string;
  username: string;
  dateCreated: Date;
  classNameProp?: string | undefined;
}

const PostHeader: React.FC<Props> = ({
  userID,
  avatar,
  username,
  dateCreated,
  classNameProp = '',
}: Props) => (
  <StyledView
    key={`PostHeader-${userID}`}
    className={`flex-row items-center justify-between ${classNameProp}`}
  >
    <View className="flex-row items-center">
      <Image source={{ uri: avatar }} className="w-8 h-8 rounded-full mr-2" />
      <DText className="text-white">{username}</DText>
      <DText className="text-white">
        {` • ${dateCreated.toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}`}
      </DText>
    </View>
    <Entypo name="dots-three-horizontal" size={16} color="white" />
  </StyledView>
);

export default PostHeader;

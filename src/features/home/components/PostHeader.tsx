import React from 'react';
import { View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import DText from '@shared/components/DText';
import clsx from 'clsx';

interface Props {
  postID: string;
  avatar: string;
  username: string;
  dateCreated: Date;
  classNameProp?: string | undefined;
}

const PostHeader: React.FC<Props> = ({
  postID,
  avatar,
  username,
  dateCreated,
  classNameProp = '',
}: Props) => (
  <View
    key={`PostHeader-${postID}`}
    className={clsx('flex-row items-center justify-between', classNameProp)}
  >
    <View className="flex-row items-center">
      <Image source={{ uri: avatar }} className="w-8 h-8 mr-2 rounded-full" />
      <DText>{username}</DText>
      <DText className="text-gray-300">
        {` • ${dateCreated.toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}`}
      </DText>
    </View>
    <Entypo name="dots-three-horizontal" size={16} color="white" />
  </View>
);

export default PostHeader;

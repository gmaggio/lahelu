import { Post } from '@core/models/Post';
import DText from '@shared/components/DText';
import { View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PostHeader from '@features/home/components/PostHeader';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  const {
    postID,
    userID,
    title,
    totalUpvotes,
    totalDownvotes,
    totalComments,
    createTime,
    feed,
    mediaWidth,
    mediaHeight,
    media,
    mediaThumbnail,
    sensitive,
    mediaType,
    hashtags,
    userUsername,
    userAvatar,
  } = post;

  return (
    <View key={postID} className="flex items-stretch justify-stretch">
      {/* Header */}
      <View>
        <PostHeader
          classNameProp="pb-4"
          userID={userID}
          username={userUsername}
          avatar={userAvatar}
          dateCreated={createTime}
        />
        <DText className="font-bold pb-4">{title}</DText>
      </View>

      <View>
        <DText>BODY</DText>
      </View>
      <View>
        <DText>FOOTER</DText>
      </View>
    </View>
  );
};

export default PostItem;

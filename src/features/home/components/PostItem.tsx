import { Post } from '@core/models/Post';
import DText from '@shared/components/DText';
import { View, Image } from 'react-native';
import PostHeader from '@features/home/components/PostHeader';
import PostFooter from './PostFooter';

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
      <View className="px-6 pb-3">
        <PostHeader
          classNameProp="pb-3"
          postID={postID}
          username={userUsername}
          avatar={userAvatar}
          dateCreated={createTime}
        />
        <DText className="font-bold">{title}</DText>
      </View>

      {/* Content */}
      <View className="w-full max-h-[500] min-h-[350] items-center justify-start overflow-hidden object-cover rounded-lg bg-gray-600">
        <Image
          source={{ uri: media }}
          width={mediaWidth}
          height={mediaHeight}
          resizeMode="cover"
        />
      </View>

      {/* Footer */}
      <PostFooter
        postID={postID}
        hashtags={hashtags}
        totalUpvotes={totalUpvotes}
        totalComments={totalComments}
      />
    </View>
  );
};

export default PostItem;

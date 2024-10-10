import { Post } from '@core/models/Post';
import { View, Image } from 'react-native';
import clsx from 'clsx';
import PostFooter from '@features/home/components/PostFooter';
import PostHeader from '@features/home/components/PostHeader';
import { DText } from '@shared/components';

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
    <View key={postID} className="items-stretch justify-stretch">
      {/* Header */}
      <View className="px-6 pb-3">
        <PostHeader
          classNameProp="pb-3"
          postID={postID}
          username={userUsername}
          avatar={userAvatar}
          dateCreated={createTime}
        />
        <DText weight="700Bold">{title}</DText>
      </View>

      {/* Content */}
      <View
        className={clsx(
          'items-center justify-start',
          'w-full max-h-[500] min-h-[350]',
          'overflow-hidden object-cover',
          'bg-gray-600',
        )}
      >
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

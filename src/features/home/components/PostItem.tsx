import { Post } from '@core/models/Post';
import DText from '@shared/components/DText';
import { View, Image, ScrollView } from 'react-native';
import PostHeader from '@features/home/components/PostHeader';
import { FontAwesome } from '@expo/vector-icons';
import BadgeButton from '@shared/components/BadgeButton';
import BoxedButtons from '@shared/components/BoxedButtons';

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
          userID={userID}
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
      <View className="px-6 pt-3">
        {/* Tags */}
        <ScrollView
          horizontal
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 8,
          }}
        >
          <BadgeButton
            classNameLabel="font-bold"
            badgeColor="#dd952a"
            label="Sawer"
            icon={<FontAwesome name="dollar" size={12} color="white" />}
          />
          {hashtags.map((hashtag) => (
            <BadgeButton
              key={`${hashtag}-${postID}`}
              label={hashtag}
              icon={<FontAwesome name="hashtag" size={12} color="white" />}
            />
          ))}
        </ScrollView>

        {/* Interactions */}
        <View className="flex-row items-center justify-between pt-3">
          <View
            className="flex-row items-start"
            style={{
              gap: 8,
            }}
          >
            <BoxedButtons
              buttons={[
                {
                  key: `up-vote-${postID}`,
                  icon: (
                    <FontAwesome
                      name="arrow-up"
                      size={16}
                      color="rgba(255,255,255,0.4)"
                    />
                  ),
                  label: totalUpvotes > 0 ? totalUpvotes.toString() : 'vote',
                },
                {
                  key: `up-down-${postID}`,
                  icon: (
                    <FontAwesome
                      name="arrow-down"
                      size={16}
                      color="rgba(255,255,255,0.4)"
                    />
                  ),
                },
              ]}
            />
            <BoxedButtons
              buttons={[
                {
                  key: `comments-${postID}`,
                  icon: (
                    <FontAwesome
                      name="comment-o"
                      size={16}
                      color="rgba(255,255,255,0.4)"
                    />
                  ),
                  label: totalComments.toString(),
                },
              ]}
            />
          </View>

          <BoxedButtons
            buttons={[
              {
                key: `share-${postID}`,
                icon: (
                  <FontAwesome
                    name="share"
                    size={16}
                    color="rgba(255,255,255,0.5)"
                  />
                ),
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default PostItem;

import React from 'react';
import { View, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import clsx from 'clsx';
import { BadgeButton, BoxedButtons } from '@shared/components';

interface PostFooterProps {
  postID: string;
  hashtags: string[];
  totalUpvotes: number;
  totalComments: number;
}

const PostFooter: React.FC<PostFooterProps> = ({
  postID,
  hashtags,
  totalUpvotes,
  totalComments,
}) => (
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
        classNameLabel="font-openSansBold"
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
    <View className={clsx('flex-row items-center justify-between', 'pt-3')}>
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
);

export default PostFooter;

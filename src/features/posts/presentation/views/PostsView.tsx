import React from 'react';
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import usePostsViewModel from '@features/posts/presentation/viewmodels/usePostsViewModel';
import PostItem from '@features/posts/components/PostItem';
import clsx from 'clsx';

const ItemSeparator: React.FC = () => (
  <View
    className={clsx(
      'w-full pb-6 mb-6',
      'border-b-2 border-b-solid border-b-black',
    )}
  />
);

const PostsView: React.FC = () => {
  const { posts, loading, error, loadMore } = usePostsViewModel();

  if (loading && posts.length === 0) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView className={clsx('items-stretch flex-1', 'bg-[#1a1a1a]')}>
      <FlatList
        testID="post-items"
        className="bg-[#1a1a1a] py-6"
        data={posts}
        renderItem={({ item }) => PostItem({ post: item })}
        keyExtractor={(item) => `${item.postID}`}
        onEndReached={loadMore}
        onEndReachedThreshold={0.8}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
        ItemSeparatorComponent={ItemSeparator}
      />
    </SafeAreaView>
  );
};

export default PostsView;

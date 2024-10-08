import React from 'react';
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import useHomeViewModel from '@features/home/presentation/viewmodels/useHomeViewModel';
import PostItem from '@features/home/components/PostItem';

const ItemSeparator: React.FC = () => (
  <View className="h-4 border-b-black/50" />
);

const HomeView: React.FC = () => {
  const { posts, loading, error, loadMore } = useHomeViewModel();

  if (loading && posts.length === 0) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView className="flex-1 items-stretch bg-[#1a1a1a]">
      <FlatList
        testID="post-items"
        className="bg-[#1a1a1a] p-6"
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

export default HomeView;

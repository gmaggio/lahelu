import React from "react";
import { FlatList, Text, View, ActivityIndicator } from "react-native";
import useHomeViewModel from "@features/home/presentation/viewmodels/useHomeViewModel";

const HomeView: React.FC = () => {
  const { posts, loading, error, loadMore } = useHomeViewModel();

  if (loading && posts.length === 0) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.userUsername}</Text>
          </View>
        )}
        keyExtractor={(item) => item.postID.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

export default HomeView;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/shared/state/store";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Lahelu App</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

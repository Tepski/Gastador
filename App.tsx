import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [fontLoaded, fontError] = Font.useFonts({
    Comfortaa: require("./assets/fonts/Comfortaa-Regular.ttf"),
  });

  if (!fontLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <View style={styles.container}>
          <HomeScreen />
          <StatusBar style="auto" hidden={true} />
        </View>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Comfortaa-Regular",
    flex: 1,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
});

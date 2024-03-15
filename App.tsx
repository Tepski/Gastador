import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Testing from "./Components/Testing";

export default function App() {
  const [fontLoaded, fontError] = Font.useFonts({
    MadimiOne: require("./assets/fonts/Nunito-Regular.ttf"),
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
    fontFamily: "MadimiOne",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

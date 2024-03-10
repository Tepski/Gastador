import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import * as Font from "expo-font";

export default function App() {
  const [fontLoaded, fontError] = Font.useFonts({
    Comfortaa: require("./assets/fonts/Comfortaa-Regular.ttf"),
  });

  if (!fontLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" hidden={true} />
      {/* <AppLoading /> */}
    </View>
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

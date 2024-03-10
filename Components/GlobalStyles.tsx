import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const [fontLoaded, fontError] = useFonts({
  Comfortaa: require("../assets/fonts/Comfortaa-Regular.ttf"),
});

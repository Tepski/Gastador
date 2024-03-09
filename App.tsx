import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import BottomNavbar from "./Components/BottomNavbar";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <BottomNavbar />
      <StatusBar style="auto" hidden={true} />
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

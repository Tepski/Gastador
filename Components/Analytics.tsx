import { StyleSheet, Text, View, Dimensions, ScaledSize } from "react-native";
import React from "react";
import Colors from "../assets/Colors";

const DevDim: ScaledSize = Dimensions.get("screen");

const Analytics: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontFamily: "Comfortaa" }}>Analytics</Text>
    </View>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    height: DevDim.height,
    width: DevDim.width,
    justifyContent: "center",
    alignItems: "center",
  },
});

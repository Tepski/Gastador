import { StyleSheet, Text, View, Dimensions, ScaledSize } from "react-native";
import React from "react";

const DevDim: ScaledSize = Dimensions.get("screen");
interface AnalyticsProps {
  handleScrollToIndex: (index: number) => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ handleScrollToIndex }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 50, fontFamily: "Comfortaa" }}
        onPress={() => handleScrollToIndex(0)}
      >
        Analytics
      </Text>
    </View>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    height: DevDim.height,
    width: DevDim.width,
    justifyContent: "center",
    alignItems: "center",
  },
});

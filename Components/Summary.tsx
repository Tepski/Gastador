import { StyleSheet, Text, View, Dimensions, ScaledSize } from "react-native";
import React from "react";

const DevDim: ScaledSize = Dimensions.get("screen");

interface SummaryProps {
  handleScrollToIndex: (index: number) => void;
}

const Summary: React.FC<SummaryProps> = ({ handleScrollToIndex }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }} onPress={() => handleScrollToIndex(1)}>
        Summary
      </Text>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    height: DevDim.height,
    width: DevDim.width,
    justifyContent: "center",
    alignItems: "center",
  },
});

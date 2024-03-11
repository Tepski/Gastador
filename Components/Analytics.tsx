import { StyleSheet, Text, View, Dimensions, ScaledSize } from "react-native";
import React from "react";
import Colors from "../assets/Colors";
import { PieChart, pieDataItem } from "react-native-gifted-charts";

const DevDim: ScaledSize = Dimensions.get("screen");

const Analytics: React.FC = () => {
  const pieData: pieDataItem[] = [
    { value: 200, color: Colors.primary.toString(), text: "Food" },
    { value: 80, color: Colors.secondary.toString(), text: "Transportation" },
    { value: 120, color: Colors.accent.toString(), text: "Educational" },
  ];

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontFamily: "Comfortaa" }}>Analytics</Text>
      <View>
        <PieChart
          data={pieData}
          donut
          textColor="black"
          radius={120}
          showText
          textBackgroundRadius={26}
        />
      </View>
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

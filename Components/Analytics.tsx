import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScaledSize,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../assets/Colors";
import { createClient } from "@supabase/supabase-js";
import {
  PieChart,
  pieDataItem,
  BarChart,
  barDataItem,
  LineChart,
  lineDataItem,
} from "react-native-gifted-charts";

const DevDim: ScaledSize = Dimensions.get("screen");
const supabase = createClient(
  "https://gazuuhetjchlqetwtnoz.supabase.co",
  "https://gazuuhetjchlqetwtnoz.supabase.co"
);

const Analytics: React.FC = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const { data }: any = await supabase.from("countries").select();
    setCountries(data);
  };

  const pieData: pieDataItem[] = [
    { value: 200, color: Colors.primary.toString(), text: "Food" },
    { value: 80, color: Colors.secondary.toString(), text: "Transportation" },
    { value: 120, color: Colors.accent.toString(), text: "Educational" },
  ];

  const barData: barDataItem[] = [
    { value: 323, label: "M" },
    { value: 221, label: "T", frontColor: "#177AD5" },
    { value: 864, label: "W", frontColor: "#177AD5" },
    { value: 123, label: "T" },
    { value: 513, label: "F", frontColor: "#177AD5" },
    { value: 522, label: "S" },
    { value: 722, label: "S" },
  ];

  const lineData: lineDataItem[] = [
    { value: 15 },
    { value: 30 },
    { value: 26 },
    { value: 45 },
    { value: 50 },
    { value: 60 },
    { value: 30 },
  ];

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 20, fontFamily: "MadimiOne", color: Colors.primary }}
      >
        Analytics
      </Text>
      <ScrollView
        style={{
          height: "100%",
          width: "100%",
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            height: "100%",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            gap: 40,
            padding: 20,
            backgroundColor: Colors.background,
          }}
        >
          <View
            style={{
              backgroundColor: Colors.background,
              padding: 20,
              borderRadius: 20,
              borderWidth: 2,
            }}
          >
            <PieChart
              data={pieData}
              donut
              textColor="black"
              radius={115}
              showText
              textBackgroundRadius={26}
              textSize={8}
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.background,
              padding: 20,
              borderRadius: 20,
              borderWidth: 2,
            }}
          >
            <LineChart
              data={lineData}
              color={Colors.accent.toString()}
              thickness={3}
              width={300}
              hideRules
              hideYAxisText={true}
              adjustToWidth
              hideDataPoints
              curvature={0.7}
              height={200}
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.background,
              padding: 20,
              borderRadius: 20,
              borderWidth: 2,
            }}
          >
            <BarChart
              barWidth={18}
              noOfSections={2}
              barBorderRadius={100}
              frontColor="lightgray"
              data={barData}
              disablePress
              hideRules
              yAxisThickness={0}
              xAxisThickness={0}
              barMarginBottom={2}
              height={200}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    height: DevDim.height,
    width: DevDim.width,
    paddingTop: 25,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

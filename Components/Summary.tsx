import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScaledSize,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../assets/Colors";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import HistoryComponent from "./HistoryComponent";

const DevDim: ScaledSize = Dimensions.get("screen");

const Summary: React.FC = () => {
  const currentGastos = useSelector((state: RootState) => state.gastos);

  // FUCNTION FOR CALCULATING NUMBER OF DAYS PER MONTH
  // function getDaysInMonth(year: number): void {
  //   const newList = Array.from({ length: 12 }, (_, month) =>
  //     new Date(year, month + 1, 0).getDate()
  //   );
  //   console.log(newList);
  // }

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: Colors.background,
          paddingVertical: 30,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.7}>
            <Icons name="account-circle" size={40} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={[{ fontSize: 20, color: Colors.primary }, styles.text]}>
            Summary
          </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Icons name="backburger" size={30} color={Colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.expense}>
          <Text
            style={[
              styles.text,
              {
                fontSize: 100,
                color: currentGastos.totalGastos < 0 ? "red" : "green",
              },
            ]}
          >
            ₱{currentGastos.totalGastos}
          </Text>
          <Text style={{ fontFamily: "MadimiOne", color: Colors.primary }}>
            Total Expenses
          </Text>
        </View>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 30 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            borderColor: Colors.secondary,
            paddingTop: 20,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: Colors.text,
          }}
        >
          <Text style={{ color: Colors.secondary, fontFamily: "MadimiOne" }}>
            Recent
          </Text>
          <Text style={{ color: Colors.secondary, fontFamily: "MadimiOne" }}>
            Amount
          </Text>
        </View>
        <HistoryComponent data={currentGastos.data} />
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    height: DevDim.height,
    width: DevDim.width,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  avatar: {
    backgroundColor: "white",
    width: 55,
    aspectRatio: 1,
    borderRadius: 100,
  },
  text: {
    fontFamily: "MadimiOne",
  },
  settings: {
    backgroundColor: "white",
    elevation: 10,
    paddingVertical: 10,
    fontSize: 20,
    fontFamily: "MadimiOne",
    borderRadius: 30,
    justifyContent: "center",
    textAlign: "center",
    margin: 5,
    width: "30%",
  },
  expense: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderColor: Colors.primary,
    width: "90%",
    borderRadius: 20,
    padding: 20,
  },
});

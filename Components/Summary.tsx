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
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { addGastos } from "../state/gastos/gastosSlice";
import { RootState } from "../state/store";
import { CurvedTransition } from "react-native-reanimated";

const DevDim: ScaledSize = Dimensions.get("screen");

const Summary: React.FC = () => {
  const currentGastos = useSelector((state: RootState) => state.gastos);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(currentGastos.data);
  }, [currentGastos]);

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: Colors.background,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 30,
          elevation: 10,
          borderRadius: 40,
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
        <Text
          style={[
            styles.text,
            {
              fontSize: 100,
              color: currentGastos.totalGastos < 0 ? "red" : "green",
            },
          ]}
        >
          {currentGastos.totalGastos}
        </Text>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 30 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            borderColor: Colors.secondary,
            paddingTop: 20,
          }}
        >
          <Text style={{ color: Colors.primary }}>Recent</Text>
          <Text style={{ color: Colors.primary }}>Amount</Text>
        </View>
        <View>
          {currentGastos.data.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{item.time}</Text>
                <Text>{item.icon}</Text>
                <Text>{item.name}</Text>
                <Text>{item.value}</Text>
              </View>
            );
          })}
        </View>
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
    fontFamily: "Comfortaa",
  },
  settings: {
    backgroundColor: "white",
    elevation: 10,
    paddingVertical: 10,
    fontSize: 20,
    fontFamily: "Comfortaa",
    borderRadius: 30,
    justifyContent: "center",
    textAlign: "center",
    margin: 5,
    width: "30%",
  },
});

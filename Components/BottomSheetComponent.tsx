import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../assets/Colors";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";

const BottomSheetComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <View></View>
        <TextInput style={styles.textInput} placeholder="Enter Amount" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textInput: {
    borderColor: Colors.accent,
    borderWidth: 1,
    padding: 20,
    width: 250,
    borderRadius: 20,
    paddingHorizontal: 30,
    backgroundColor: "white",
    elevation: 5,
    fontSize: 20,
  },
  textInputContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  checkBox: {
    backgroundColor: Colors.primary,
  },
});

export default BottomSheetComponent;

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScaledSize,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../assets/Colors";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { addGastos, minusGastos } from "../state/gastos/gastosSlice";
import { RootState } from "../state/store";

const DevDim: ScaledSize = Dimensions.get("screen");

{
  /* 
EXPENSES LIST

food
transpo
custom
gas
others
rent
bills
gym
internet
phone
educational
*/
}

const Summary: React.FC = () => {
  const currentGastos = useSelector((state: RootState) => state.gastos.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7}>
          <Icons name="account-circle" size={40} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Icons name="backburger" size={30} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <Text style={[{ fontSize: 20 }, styles.text]}>Summary</Text>
      <Text
        style={[
          styles.text,
          { fontSize: 70, color: currentGastos < 0 ? "red" : "green" },
        ]}
      >
        {currentGastos}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text
          onPress={() => dispatch(addGastos({ value: 20 }))}
          style={{
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
          }}
        >
          ADD
        </Text>
        <Text
          onPress={() => dispatch(minusGastos({ value: 20 }))}
          style={{
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
          }}
        >
          MINUS
        </Text>
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
    paddingTop: 25,
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
  settings: {},
});

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../assets/Colors";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { UseSelector, useSelector } from "react-redux";
import { RootState } from "../state/store";

interface BottomSheetComponentProps {
  setData: Dispatch<SetStateAction<DataProps>>;
  data: DataProps;
}

interface DataProps {
  id: number;
  name: string;
  value: number;
  icon: string;
  time: string;
}

interface IconListProps {
  name: string;
  icon: any;
}

const BottomSheetComponent: React.FC<BottomSheetComponentProps> = ({
  setData,
  data,
}): React.ReactElement => {
  const [selectedCategory, setSelectedCategory] = useState<
    IconListProps | undefined
  >();

  const currentGastos = useSelector((state: RootState) => state.gastos.data);

  const getDate = (): string => {
    let hours;
    let minutes;

    hours = new Date().getHours().toString();
    minutes = new Date().getMinutes().toString();

    return `${hours.length == 1 ? "0" + hours : hours}:${
      minutes.length == 1 ? "0" + minutes : minutes
    }`;
  };

  const iconList: IconListProps[] = [
    { name: "Food", icon: "food-fork-drink" },
    { name: "Transportation", icon: "bus" },
    { name: "Gas", icon: "gas-station" },
    { name: "Bills", icon: "cash-register" },
    { name: "Internet", icon: "wifi" },
    { name: "Education", icon: "notebook" },
    { name: "Rent", icon: "home-account" },
    { name: "Medicine", icon: "pill" },
    { name: "Grocery", icon: "cart" },
    { name: "Add Custom", icon: "plus" },
  ];

  useEffect(() => {
    setData({
      ...data,
      id: currentGastos.length,
      name: selectedCategory?.name ?? "",
      icon: selectedCategory?.icon ?? "",
    });
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          { fontSize: 20, alignSelf: "flex-end", color: Colors.secondary },
        ]}
      >
        {selectedCategory ? selectedCategory.name : "Select Category"}
      </Text>
      <View style={styles.textInputContainer}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: Colors.primary,
              borderRadius: 100,
              width: "80%",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Icons
              name={selectedCategory ? selectedCategory.icon : "radiobox-blank"}
              size={45}
              color={"white"}
            />
          </View>
        </View>
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          placeholder="Enter Amount . . ."
          onChangeText={(e) =>
            setData({ ...data, value: parseFloat(e), time: getDate() })
          }
        />
      </View>
      <View style={{ padding: 20 }}>
        <Text style={[styles.text, { fontSize: 20, color: Colors.text }]}>
          Categories
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {iconList.map((item, index) => {
          return (
            <TouchableOpacity
              style={[
                styles.iconContainer,
                selectedCategory?.name == item.name && {
                  backgroundColor: Colors.primary,
                },
              ]}
              key={index}
              onPress={() => setSelectedCategory(item)}
            >
              <Icons
                name={item.icon.toString()}
                size={15}
                color={
                  selectedCategory?.name == item.name ? "white" : Colors.primary
                }
              />
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 10,
                    color:
                      selectedCategory?.name == item.name
                        ? "white"
                        : Colors.text,
                  },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
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
    width: 280,
    borderRadius: 20,
    paddingHorizontal: 30,
    backgroundColor: "white",
    elevation: 5,
    fontSize: 20,
    fontFamily: "Comfortaa",
  },
  textInputContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomColor: Colors.accent,
    borderBottomWidth: 2,
    paddingBottom: 30,
    paddingTop: 10,
  },
  text: {
    fontFamily: "Comfortaa",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 15,
    margin: 2,
    paddingVertical: 5,
  },
});

export default BottomSheetComponent;

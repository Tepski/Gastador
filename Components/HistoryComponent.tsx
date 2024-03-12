import React, { SetStateAction, useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import Colors from "../assets/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import { useDispatch } from "react-redux";
import { deleteGastos } from "../state/gastos/gastosSlice";

interface HistoryComponentProps {
  data: dataProps[];
}

interface dataProps {
  id: number;
  name: string;
  time: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  value: number;
}

const HistoryComponent: React.FC<HistoryComponentProps> = ({
  data,
}): React.ReactElement => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<dataProps | null>(null);

  const dispatch = useDispatch();

  const handleLongPress = (item: dataProps) => {
    setSelectedItem(item);
    setShowModal(!showModal);
  };

  const handleConfirmDelete = () => {
    if (selectedItem) {
      dispatch(deleteGastos(selectedItem));
      setSelectedItem(null);
      setShowModal(false);
    }
  };

  return (
    <View>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
              alignItems: "center",
            }}
            onLongPress={() => handleLongPress(item)}
          >
            <Text style={{ fontFamily: "Comfortaa" }}>{item.time}</Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                paddingHorizontal: 20,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.primary,
                  borderRadius: 100,
                  padding: 10,
                }}
              >
                <MaterialCommunityIcons
                  name={item.icon}
                  size={20}
                  color={Colors.background}
                />
              </View>
              <Text
                style={{
                  fontFamily: "Comfortaa",
                  paddingHorizontal: 5,
                  color: Colors.primary,
                }}
              >
                {item.name}
              </Text>
            </View>
            <Text style={{ fontFamily: "Comfortaa" }}>{item.value}</Text>
          </TouchableOpacity>
        );
      })}
      <Modal
        visible={showModal}
        transparent
        style={{
          height: "120%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.cofirmationContainer}>
            <Text
              style={{
                fontFamily: "Comfortaa",
                marginBottom: 30,
                color: Colors.primary,
              }}
            >
              Confirm Delete
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleConfirmDelete()}>
                <Text style={styles.text}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  cofirmationContainer: {
    backgroundColor: Colors.background,
    width: "80%",
    padding: 30,
    borderRadius: 15,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Comfortaa",
    fontSize: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.accent,
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: Colors.primary,
  },
});

export default HistoryComponent;
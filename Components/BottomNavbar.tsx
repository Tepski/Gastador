import react from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Colors from "../assets/Colors";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";

interface BottomNavbarProps {
  handleScrollToIndex: (index: number) => void;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  handlePresentModal: () => void;
}

interface NavbarItemsProps {
  index: number;
  name: String;
  icon: "format-list-bulleted" | "chart-bar";
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({
  handleScrollToIndex,
  selected,
  handlePresentModal,
}) => {
  const NavbarItems: NavbarItemsProps[] = [
    { index: 0, name: "Summary", icon: "format-list-bulleted" },
    { index: 1, name: "Analytics", icon: "chart-bar" },
  ];

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={NavbarItems}
        contentContainerStyle={{ flex: 1, justifyContent: "space-around" }}
        keyExtractor={(_, index) => index.toString()}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => handleScrollToIndex(item.index)}
              >
                <Icons
                  name={item.icon}
                  size={20}
                  color={
                    selected == item.index ? Colors.accent : Colors.background
                  }
                />
                <Text
                  style={[
                    styles.text,
                    selected == item.index && { color: Colors.accent },
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={styles.floatingButton}>
        <View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.button2}
            onPress={() => handlePresentModal()}
          >
            {/* <Text
              style={{
                color: "black",
                fontSize: 50,
                fontFamily: "Comfortaa",
              }}
            >
              +
            </Text> */}
            <Icons name="plus" color={Colors.background} size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 20,
    backgroundColor: Colors.primary,
    width: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 20,
    elevation: 5,
  },
  text: {
    fontFamily: "Comfortaa",
    color: "white",
    fontSize: 12,
    textDecorationLine: "none",
  },
  floatingButton: {
    position: "absolute",
    top: -50,
    width: 85,
    height: 85,
    backgroundColor: Colors.background,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    backgroundColor: Colors.accent,
    width: 70,
    height: 70,
    borderRadius: 100,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomNavbar;

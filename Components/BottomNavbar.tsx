import react from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const BottomNavbar = () => {
  interface NavbarItemsProps {
    index: Number;
    name: String;
    icon: null;
  }

  const NavbarItems: NavbarItemsProps[] = [
    { index: 0, name: "Summary", icon: null },
    { index: 1, name: "Analytics", icon: null },
  ];

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
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
      />
      <View style={styles.floatingButton}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.button2}>
            <Text
              style={[
                {
                  color: "black",
                  fontSize: 50,
                  fontFamily: "Comfortaa",
                },
              ]}
            >
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 20,
    backgroundColor: "grey",
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
    fontSize: 20,
  },
  floatingButton: {
    position: "absolute",
    top: -50,
    width: 85,
    height: 85,
    backgroundColor: "skyblue",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    backgroundColor: "powderblue",
    width: 70,
    aspectRatio: 1,
    borderRadius: 100,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomNavbar;

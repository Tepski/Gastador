import React, { useState, useRef } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Analytics from "../Components/Analytics";
import Summary from "../Components/Summary";
import BottomNavbar from "../Components/BottomNavbar";

const HomeScreen = (): React.JSX.Element => {
  const [selected, setSelected] = useState<number>(0);

  const listRef = useRef<FlatList<any>>(null);

  const handleScrollToIndex = (index: number): void => {
    listRef.current && listRef.current.scrollToIndex({ animated: true, index });
    setSelected(index);
  };

  const ComponentList: React.JSX.Element[] = [<Summary />, <Analytics />];

  return (
    <View style={styles.container}>
      <FlatList
        ref={listRef}
        data={ComponentList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return item;
        }}
      />
      <BottomNavbar
        handleScrollToIndex={handleScrollToIndex}
        selected={selected}
        setSelected={setSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;

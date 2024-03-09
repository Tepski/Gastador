import React, { useState, useRef } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Analytics from "../Components/Analytics";
import Summary from "../Components/Summary";

const HomeScreen = (): React.JSX.Element => {
  const listRef = useRef<FlatList<React.JSX.Element>>(null);

  const handleSrollToIndex = (index: number): void => {
    listRef.current && listRef.current.scrollToIndex({ animated: true, index });
  };

  const ComponentList: React.JSX.Element[] = [
    <Summary handleScrollToIndex={handleSrollToIndex} />,
    <Analytics handleScrollToIndex={handleSrollToIndex} />,
  ];

  return (
    <View style={styles.container}>
      <FlatList
        ref={listRef}
        data={ComponentList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return item;
        }}
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

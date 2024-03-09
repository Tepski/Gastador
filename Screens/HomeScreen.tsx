import React, { useState, useRef } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Analytics from "../Components/Analytics";
import Summary from "../Components/Summary";

const HomeScreen = (): React.JSX.Element => {
  const listRef = useRef<FlatList<any>>(null);

  const handleScrollToIndex = (index: number): void => {
    listRef.current && listRef.current.scrollToIndex({ animated: true, index });
  };

  const ComponentList: React.JSX.Element[] = [
    <Summary key={"summary"} handleScrollToIndex={handleScrollToIndex} />,
    <Analytics key={"analitycs"} handleScrollToIndex={handleScrollToIndex} />,
  ];

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

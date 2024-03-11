import React, { useState, useRef, useMemo } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Analytics from "../Components/Analytics";
import Summary from "../Components/Summary";
import BottomNavbar from "../Components/BottomNavbar";
import BottomSheetComponent from "../Components/BottomSheetComponent";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet/";
import Colors from "../assets/Colors";

const HomeScreen = (): React.JSX.Element => {
  const [selected, setSelected] = useState<number>(0);

  const listRef = useRef<FlatList<any>>(null);
  const modalref = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["20%", "70%"], []);

  const handleScrollToIndex = (index: number): void => {
    listRef.current && listRef.current.scrollToIndex({ animated: true, index });
    setSelected(index);
  };

  const handlePresentModal = (): void => {
    modalref.current?.present();
  };

  const ComponentList: React.JSX.Element[] = [<Summary />, <Analytics />];

  return (
    <BottomSheetModalProvider>
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
          handlePresentModal={handlePresentModal}
          handleScrollToIndex={handleScrollToIndex}
          selected={selected}
          setSelected={setSelected}
        />
      </View>
      <View>
        <BottomSheetModal
          snapPoints={snapPoints}
          ref={modalref}
          index={1}
          footerComponent={() => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => modalref.current?.dismiss()}
            >
              <View style={styles.footer}>
                <Text
                  style={{
                    fontFamily: "Comfortaa",
                    fontSize: 20,
                    color: Colors.background,
                  }}
                >
                  CONFIRM
                </Text>
              </View>
            </TouchableOpacity>
          )}
        >
          <BottomSheetView style={{ flex: 1 }}>
            <BottomSheetComponent />
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Comfortaa",
    fontSize: 80,
  },
  footer: {
    marginBottom: 10,
    height: 50,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    borderRadius: 30,
    elevation: 5,
  },
});

export default HomeScreen;

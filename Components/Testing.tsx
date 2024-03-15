import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import Colors from "../assets/Colors";

const Testing = () => {
  const getCurrentDate = () => {
    const date = new Date().toDateString();
    return date;
  };

  const addDocs = async () => {
    try {
      const citiesRef = collection(db, "cities");

      await setDoc(doc(citiesRef, "SF"), {
        name: "San Francisco",
        state: "CA",
        country: "USA",
        capital: false,
        population: 860000,
        regions: ["west_coast", "norcal"],
      });
      await setDoc(doc(citiesRef, "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
        capital: false,
        population: 3900000,
        regions: ["west_coast", "socal"],
      });
      await setDoc(doc(citiesRef, "DC"), {
        name: "Washington, D.C.",
        state: null,
        country: "USA",
        capital: true,
        population: 680000,
        regions: ["east_coast"],
      });
      await setDoc(doc(citiesRef, "TOK"), {
        name: "Tokyo",
        state: null,
        country: "Japan",
        capital: true,
        population: 9000000,
        regions: ["kanto", "honshu"],
      });
      await setDoc(doc(citiesRef, "BJ"), {
        name: "Beijing",
        state: null,
        country: "China",
        capital: true,
        population: 21500000,
        regions: ["jingjinji", "hebei"],
      });
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  };

  const getDatum = async () => {
    const Countries = await getDocs(collection(db, "cities"));
    const someData = await getDoc(doc(db, "cities", "SF"));
    console.log(someData.data());
    if (Countries) {
      Countries.forEach((item) => console.log(item.data().country));
    }
  };

  return (
    <View>
      <Text style={[styles.text]} onPress={getDatum}>
        Testing
      </Text>
    </View>
  );
};

export default Testing;

const styles = StyleSheet.create({
  text: {
    fontFamily: "MadimiOne",
    fontSize: 20,
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 20,
    color: "white",
  },
});

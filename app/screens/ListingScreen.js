import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";

import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Blue PS4 Controller",
    price: 100,
    image: require("../assets/controller.jpg"),
  },
  {
    id: 2,
    title: "Lamp in good condition",
    price: 20,
    image: require("../assets/shoes.jpg"),
  },
];

function ListingScreen({ navigation }) {
  //Render cards using flat list
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.gray_light,
  },
});

export default ListingScreen;

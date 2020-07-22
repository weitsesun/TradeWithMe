import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import routes from "../navigation/routes";
import colors from "../config/colors";
import listingsApi from "../api/listings";

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    const res = await listingsApi.getListings();
    setListings(res.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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

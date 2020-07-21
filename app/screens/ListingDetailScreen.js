import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import { ListItem } from "../components/lists";

function ListingDetailScreen({ route }) {
  const listing = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/wayne.jpeg")}
            title={"Wayne S."}
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 25,
  },
});

export default ListingDetailScreen;

import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import Card from "../components/Card";
import routes from "../navigation/routes";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import ActivityIndicator from "../components/ActivityIndicator";

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadListings = async () => {
    setLoading(true);
    const res = await listingsApi.getListings();
    setLoading(false);

    if (!res.ok) return setError(true);

    setError(false);
    setListings(res.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.container}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={loadListings} color="tertiary" />
        </>
      )}
      <ActivityIndicator visible={loading} />
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

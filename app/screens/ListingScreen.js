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
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
  const getListingsApi = useApi(
    listingsApi.getListings
    //{ data: listings, loading, error, request: loadListings }
  );

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.container}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton
            title="Retry"
            onPress={getListingsApi.request}
            color="tertiary"
          />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
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

import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors";

function ListItem({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  detailsContainer: {
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subtitle: {
    color: colors.gray,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;

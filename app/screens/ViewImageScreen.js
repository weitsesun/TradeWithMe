import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/lamp.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  buttonContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 70,
    left: 30,
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
  },
  deleteIcon: {
    position: "absolute",
    top: 70,
    right: 30,
    width: 40,
    height: 40,
    backgroundColor: colors.secondary,
  },
});

export default ViewImageScreen;

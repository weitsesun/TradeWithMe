import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <AntDesign
        name="delete"
        size={30}
        color={colors.tertiary}
        style={styles.deleteIcon}
      />
      <MaterialCommunityIcons
        name="close"
        size={30}
        color={colors.white}
        style={styles.closeIcon}
      />

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
    right: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 70,
    left: 30,
  },
});

export default ViewImageScreen;

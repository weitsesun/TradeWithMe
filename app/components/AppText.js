import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    ...Platform.select({
      ios: {
        fontFamily: "Arial",
        fontSize: 20,
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 18,
      },
    }),
  },
});

export default AppText;

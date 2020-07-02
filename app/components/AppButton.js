import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
  // return <Button title={children} style={styles.button} color={colors.white} />;
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});

export default AppButton;

import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";

function LoginScreen(props) {
  return (
    <Screen>
      <Image source={require("../assets/logo.png")} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LoginScreen;

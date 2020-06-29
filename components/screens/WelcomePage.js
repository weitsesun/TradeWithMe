import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function WelcomePage() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcome_page_background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
          resizeMode={"stretch"}
        />
        <Text style={styles.text}>Trade What You Don't Need</Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "tomato",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "turquoise",
  },
  logo: {
    width: 80,
    height: 80,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});

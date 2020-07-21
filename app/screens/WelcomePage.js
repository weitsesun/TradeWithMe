import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import colors from "../config/colors.js";
import AppButton from "../components/AppButton";

export default function WelcomePage({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcome_page_background.jpg")}
      blurRadius={7}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
          resizeMode={"stretch"}
        />
        <Text style={styles.tagLine}>Trade Your Stuff Here</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
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
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 80,
    height: 80,
  },
  tagLine: {
    color: colors.black,
    fontSize: 23,
    fontWeight: "600",
    marginVertical: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});

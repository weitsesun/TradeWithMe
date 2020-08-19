import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import authApi from "../api/auth";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  /**
   * Function that handle login info and authentication
   * show error message when the user is failed to login
   * @param {string, string} param0
   */
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email or/and password."
          visible={loginFailed}
        />
        <AppFormField
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          name="email"
        />
        <AppFormField
          placeholder="Password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
          name="password"
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 60,
  },
});

export default LoginScreen;

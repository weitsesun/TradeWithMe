import React from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

/**
 * Temporary Data
 * TODO: Delete later
 */
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={255}
          name="title"
        />
        <AppFormField
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          name="price"
          width={120}
        />
        <AppFormPicker
          placeholder="Category"
          items={categories}
          name="category"
          width="50%"
        />
        <AppFormField
          placeholder="Description"
          autoCapitalize="none"
          autoCorrect={false}
          name="description"
          multiline
          numberOfLines={3}
          maxLength={255}
        />

        <SubmitButton title="POST" color="secondary" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;

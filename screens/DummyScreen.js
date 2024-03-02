import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const DummyScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text>This is a dummy description used in an assignment</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  cardContainer: {
    borderRadius: 12,
    borderColor: "#B77E7E",
    borderWidth: 2,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 12,
  },
});

export default DummyScreen;

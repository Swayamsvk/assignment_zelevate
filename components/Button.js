import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textStyles}>Press</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: "#B77E7E",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyles: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});

export default Button;

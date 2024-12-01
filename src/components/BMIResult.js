import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BMIResult = ({ bmi, category }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Your BMI: {bmi.toFixed(1)}</Text>
      <Text style={styles.categoryText}>Category: {category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 18,
    color: "#555",
  },
});

export default BMIResult;

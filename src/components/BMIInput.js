import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const BMIInput = ({ onCalculate }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleCalculate = () => {
    if (weight.trim() && height.trim()) {
      onCalculate(parseFloat(weight), parseFloat(height));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <Button title="Calculate BMI" onPress={handleCalculate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default BMIInput;

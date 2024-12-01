import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{item}</Text>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default TodoItem;

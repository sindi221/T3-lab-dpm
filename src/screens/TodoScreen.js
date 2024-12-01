import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import TodoItem from '../components/TodoItem';

const TodoScreen = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Lifecycle: ComponentDidMount
  useEffect(() => {
    console.log('App Loaded');
    setTodos(['Learn React Native', 'Build an App']);
  }, []);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Tasks</Text>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TodoItem item={item} />}
      />
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add" onPress={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default TodoScreen;

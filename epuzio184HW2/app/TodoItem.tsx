// components/TodoItem.js
import React from 'react';
import { View, Text, Button} from 'react-native';
import Checkbox from 'expo-checkbox';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View>
      <Checkbox
        value={task.completed}
        onValueChange={() => toggleCompleted(task.id)}
      />
      <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </Text>
      <Button title="X" onPress={() => deleteTask(task.id)} />
    </View>
  );
}
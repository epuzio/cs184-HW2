import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import { NavigationProp } from '@react-native-firebase/native';
import {FIREBASE_AUTH} from '../FirebaseConfig.tsx';
import TodoItem from './TodoItem.tsx';

export default function TodoList(){
    const[tasks, setTasks] = useState([
        {id: 1, text: "Review pull request for CS 184", duedate: "October 24, 2024", priority: 3, completed: true, },
        {id: 2, text: "Midterm paper for Art History 130", duedate: "October 25, 2024", priority: 1, completed: false, },
        {id: 3, text: "Study lecture slides for CS 181 midterm", duedate: "October 30, 2024", priority: 2, completed: true, },
        {id: 4, text: "Get Flu Shot", duedate: "October 31, 2024", priority: 2, completed: true, },
        {id: 5, text: "Feed Milo's cats", duedate: "October 23, 2024", priority: 2, completed: false, },
    ]);
    const [text, setText] = useState('');
    const [duedate, setDuedate] = useState('');
    const [priority, setPriority] = useState('');
    function addTask(){
        const newTask = { id: Date.now(), text, duedate, priority, completed: false}
        setTasks([...tasks, newTask]);
        setText('');
    }
    function deleteTask(id){
        setTasks(tasks.filter(task => task.id !== id));
    }
    function toggleCompleted(id) {
        setTasks(tasks.map(task => (task.id === id? {...task, completed: !task.completed} : task)))
    }

        // Render TodoList Component
    return (
        <View>
        {tasks.map(task => (
            <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
            />
        ))}
        <TextInput
            value={text}
            onChangeText={setText}
            placeholder="New Task"
        />
        <Button title="Add" onPress={addTask} />
        </View>
    );
}




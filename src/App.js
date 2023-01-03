import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import styles from './App.style';

function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handlePress = () => {
    setTasks([...tasks, text]);
    setText('');
  };
  const handleDeletePress = index => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  return (
    <View style={styles.main_container}>
      <Text style={styles.header}>TODO LIST</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your task here.."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.button_text}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          style={styles.taskList}
          data={tasks}
          keyExtractor={item => item + Date.now() + Math.random()}
          renderItem={({item, index}) => (
            <View style={styles.task_container}>
              <Text style={styles.list_items}>{item}</Text>
              <TouchableOpacity
                style={styles.delete_button}
                onPress={() => handleDeletePress(index)}>
                <Text style={styles.delete_button_text}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default App;

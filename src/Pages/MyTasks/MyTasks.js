import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import styles from './MyTasks.style';
import {useDispatch} from 'react-redux';

function MyTasks() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  const handlePress = () => {
    setTasks([...tasks, text]);
    setText('');
  };
  const handleDeletePress = index => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  const handleCompletePress = task => {
    const newTask = [...tasks];
    const index = tasks.indexOf(task);
    newTask.splice(index, 1);
    setTasks(newTask);
    dispatch({type: 'SEND_COMPLETED', payload: {task}});
  };

  return (
    <View style={styles.main_container}>
      <Text style={styles.header}>To Do List</Text>
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
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.completed_button}
                  onPress={() => handleCompletePress(item)}>
                  <Text style={styles.completed_button_text}>✓</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.delete_button}
                  onPress={() => handleDeletePress(index)}>
                  <Text style={styles.delete_button_text}>X</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default MyTasks;

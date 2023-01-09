import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './Completed.style';

const Deleted = () => {
  const list = useSelector(s => s.completedTask);
  const dispatch = useDispatch();

  const handleClearPress = () => {
    dispatch({type: 'REMOVE_ALL_COMPLETED_TASKS'});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Completed Tasks</Text>
      <FlatList
        style={{flex: 1}}
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={({item, index}) => (
          <View style={styles.complete_tasks}>
            <Text style={styles.complete_tasks_text}>{item}</Text>
          </View>
        )}
      />
      <TouchableOpacity onPress={handleClearPress}>
        <Text style={styles.clear_button_text}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Deleted;

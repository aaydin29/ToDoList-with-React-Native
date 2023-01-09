import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    color: 'white',
    backgroundColor: '#37474f',
    fontWeight: 'bold',
    fontSize: 25,
    padding: 10,
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#e0e0e0',
    flex: 1,
  },
  complete_tasks: {
    borderBottomWidth: 1,
    borderRadius: 5,
    backgroundColor: '#338a3e',
    margin: 10,
    padding: 10,
    flex: 1,
    marginBottom: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  clear_button_text: {
    borderWidth: 1,
    padding: 7,
    borderRadius: 5,
    marginRight: 12,
    marginLeft: 12,
    marginTop: 8,
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'red',
    borderColor: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  complete_tasks_text: {
    fontSize: 15,
    color: 'white',
  },
});

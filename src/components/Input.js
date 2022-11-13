import { TextInput, StyleSheet } from 'react-native';

export function Input(props) {
  return (
    <TextInput style={styles.input} placeholder="whats your note?" onChangeText={props.setNote} />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 10,
    backgroundColor: '#5BBEF0',
    textAlignVertical: 'top',
    margin: 10,
    borderRadius: 5,
    padding: 10,
    color: '#363636',
    fontSize: 16,
    fontFamily: 'Regular',
  },
});

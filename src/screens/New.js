import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { Header } from '../components/Header';

export function New() {
  return (
    <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
      <Header />
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity style={styles.btn}>
        <TextInput style={styles.text}>Save</TextInput>
      </TouchableOpacity>
    </View>
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

  btn: {
    flex: 1,
    height: 10,
    margin: 10,
    backgroundColor: '#054f77',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Medium',
  },
});

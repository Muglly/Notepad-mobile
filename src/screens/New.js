import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

import { Header } from '../components/Header';

import { UserContext } from '../contexts/context';

export function New() {
  const { isNote, setNote } = useContext(UserContext);

  function handeleNoteCreate() {
    if (!isNote.trim()) {
      return alert('type your note');
    }
    try {
      setNote('');
      alert('Annotation created');
    } catch (error) {
      console.log(error);
      alert('Unable to create your annotation.');
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
      <Header />
      <TextInput
        style={styles.input}
        placeholder="whats your note?"
        onChangeText={setNote}
        value={isNote}
      />
      <TouchableOpacity style={styles.btn} onPress={handeleNoteCreate}>
        <Text style={styles.text}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 10,
    margin: 10,
    backgroundColor: '#009DCF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Medium',
  },
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

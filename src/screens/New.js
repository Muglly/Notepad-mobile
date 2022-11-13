import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

import { Header } from '../components/Header';

export function New() {
  const [isNote, setNote] = useState('');

  function handeleNoteCreate() {
    if (!isNote.trim()) {
      return alert('type your note');
    }
    try {
      <View style={styles.card}>
        <Text style={styles.annotation} value={isNote} />
      </View>;

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
  annotation: {
    fontFamily: 'Regular',
    fontSize: 15,
    padding: 10,
    color: '#fff',
  },
  card: {
    margin: 10,
    backgroundColor: '#5BBEF0',
    borderRadius: 10,
  },
});

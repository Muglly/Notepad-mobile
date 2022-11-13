import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Header } from '../components/Header';
import { Input } from '../components/Input';

export function New(props) {
  const [isNote, setNote] = useState('');

  function handeleNoteCreate() {
    alert(isNote);
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
      <Header />
      <Input onChangeText={setNote} value={isNote} />
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
});

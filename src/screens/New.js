import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Header } from '../components/Header';
import { Input } from '../components/Input';

export function New(props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
      <Header />
      <Input />
      <TouchableOpacity style={styles.btn}>
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

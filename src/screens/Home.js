import { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { Header } from '../components/Header';

import { UserContext } from '../contexts/context';

export function Home() {
  const { isNote } = useContext(UserContext);

  function handeleNoteCreate() {
    return (
      <View style={styles.card}>
        <Text style={styles.annotation} value={isNote} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
      <Header />
      <View>{handeleNoteCreate}</View>
    </View>
  );
}

const styles = StyleSheet.create({
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

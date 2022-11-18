import { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import { Header } from '../components/Header';

import { UserContext } from '../contexts/context';

export function Home() {
  const { isNote } = useContext(UserContext);

  const NoteList = () => {
    try {
      console.log('home console: ', isNote);
      return (
        <View style={styles.card}>
          <Text style={styles.annotation}>{isNote}</Text>
        </View>
      );
    } catch (error) {
      console.log('noteList error: ', error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
      <Header />
      <FlatList data={isNote} renderItem={() => <NoteList />} />
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

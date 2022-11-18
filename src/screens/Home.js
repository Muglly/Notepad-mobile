import { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import { Header } from '../components/Header';

import { UserContext } from '../contexts/context';

export function Home() {
  const { isNote } = useContext(UserContext);

  const NoteList = () => {
    try {
      if (isNote != null || '') {
        console.log('home console: ', isNote);
        return (
          <View style={styles.card}>
            <Text style={styles.annotation}>{isNote}</Text>
          </View>
        );
      }
    } catch (error) {
      console.log('noteList error: ', error);
    }
  };

  // useEffect(() => {
  //   console.log('Home isNote: ', isNote);
  // }, [isNote]);

  return (
    <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
      <Header />
      <NoteList />
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

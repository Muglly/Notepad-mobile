import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function Note(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.annotation}>{props.notes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: '#5BBEF0',
    borderRadius: 10,
  },
  annotation: {
    fontFamily: 'Regular',
    fontSize: 15,
    padding: 10,
    color: '#fff',
  },
});

import { StyleSheet, View } from 'react-native';

export function Note() {
  return <View style={styles.card}></View>;
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: '#5BBEF0',
    borderRadius: 10,
  },
});

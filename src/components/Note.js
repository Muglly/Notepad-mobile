import { StyleSheet, Text } from 'react-native';

export function Note() {
  return <Text style={styles.annotation}>{props.notes}</Text>;
}

const styles = StyleSheet.create({
  annotation: {
    fontFamily: 'Regular',
    fontSize: 15,
    padding: 10,
    color: '#fff',
  },
});

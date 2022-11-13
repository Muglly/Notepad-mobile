import { StyleSheet, Text, View } from 'react-native';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Notepad</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#069',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Medium',
    marginTop: 15,
  },
});

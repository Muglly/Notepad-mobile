import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function Note() {
  const [annotation, setAnnotation] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel libero non tellus ultricies auctor. Cras at sollicitudin metus, ut interdum ipsum. Integer vel sagittis felis, id placerat odio. Phasellus elementum non metus at aliquet. Pellentesque ac turpis vitae eros pellentesque condimentum sit amet sed tortor.'
  );

  return (
    <View style={styles.card}>
      <Text style={styles.annotation}>{annotation}</Text>
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

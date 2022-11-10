import { TextInput, View } from 'react-native';

import { Header } from '../components/Header';

export function New() {
  return (
    <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
      <Header />
      <TextInput></TextInput>
    </View>
  );
}

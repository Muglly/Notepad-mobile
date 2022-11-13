import { View } from 'react-native';

import { Header } from '../components/Header';

export function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
      <Header />
    </View>
  );
}

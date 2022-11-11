import { View, Text } from 'react-native';

import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Note } from '../components/Note';

export function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
      <Header />
      <Card>
        <Note />
      </Card>
    </View>
  );
}

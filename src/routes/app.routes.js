import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { New } from '../screens/New';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <SimpleLineIcons name="notebook" size={24} color="black" />,
          tabBarLabel: 'NoteBook',
        }}
      />
      <Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: () => <SimpleLineIcons name="note" size={24} color="black" />,
          tabBarLabel: 'NoteBook',
        }}
      />
    </Navigator>
  );
}

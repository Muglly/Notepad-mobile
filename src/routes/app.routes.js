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
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#363636',
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#069',
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <SimpleLineIcons name="notebook" size={30} color={color} />,
        }}
      />
      <Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({ color }) => <SimpleLineIcons name="note" size={30} color={color} />,
        }}
      />
    </Navigator>
  );
}

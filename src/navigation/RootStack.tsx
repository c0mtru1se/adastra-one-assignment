import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/RootStackParamList';
import { HomeScreen } from '../components/home/HomeScreen';
import { BookDetailScreen } from '../components/detail/BookDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: '#000',
          headerBackTitleVisible: false,
          gestureEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};

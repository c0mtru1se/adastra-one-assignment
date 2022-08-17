import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/RootStackParamList';
import { HomeScreen } from '../components/home/HomeScreen';
import { AnimalDetailScreen } from '../components/detail/AnimalDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AnimalDetail" component={AnimalDetailScreen} />
    </Stack.Navigator>
  );
};

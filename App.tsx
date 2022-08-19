import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './src/navigation/RootStack';
import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <QueryClientProvider client={queryClient}>
        <RootStack />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

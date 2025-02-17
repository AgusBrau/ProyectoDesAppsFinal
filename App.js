import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Opciones from './screens/Opciones';
import Decision from './screens/Decision';

const Stack =  createNativeStackNavigator()
export default function App() {
  return (
        <NavigationContainer >
      <Stack.Navigator initialRouteName='Home' screenOptions={{
      headerShown: false,
    }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Opciones' component={Opciones} />
        <Stack.Screen name='Decision' component={Decision} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import FormValid from './components/FormValid';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <View style={styles.container}>
    //  <FormValid/>
    //   <StatusBar style="auto" />
    // </View>
    < NavigationContainer>
    < Stack.Navigator initialRouteName="LogIn">
      <Stack.Screen   name='LogIn' component={FormValid}/>
      <Stack.Screen  name='Home' component={Home}/>
    </Stack.Navigator>
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

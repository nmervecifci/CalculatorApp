// Routing
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { StatusBar } from 'expo-status-bar';

// React native
import { Button, StyleSheet, Text, View } from 'react-native';

// Function Calculator
import FunctionCalculator from './src/ClassCalculator';
import ClassCalculator from './src/ClassCalculator';

// CREATE
// Create Native Stack
const Stack = createNativeStackNavigator();

//FUNCTION
// 1.YOL
// const App = () => { }
// 2.YOL
 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"      component={HomeScreen}    options={{ title: "Anasayfa" }} />
        <Stack.Screen name="ClassCalculator" component={ClassCalculator} options={{ title: "Class Calculator Alanı" }} />
        <Stack.Screen name="FunctionCalculator" component={FunctionCalculator} options={{ title: "Function Calculator Alanı" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

///////////////////////////////////////
// BUTTON HomeScreen
const HomeScreen = ({ navigation,route }) => {
  return (
    <View>

      {/* Class Calculator */}
      <Button
        title='Calculator Class'
        onPress={() => navigation.navigate('ClassCalculator', { name: 'Class Component Calculator' })} />


      {/* Function Calculator */}
      <Button
        title='Calculator Function'
        onPress={() => navigation.navigate('FunctionCalculator', { name: 'Class Component Calculator' })} />

    </View> // common View
  ); //end return 
} //end HomeScreen


// EXPORT
export default App;
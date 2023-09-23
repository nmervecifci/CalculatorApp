// rfc
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import FunctionCalculator from './src/FunctionCalculator';

// Create Native Stack
const Stack = createNativeStackNavigator();

// ROUTER FUNCTION
 function RouterCalculator() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={FunctionCalculator} options={{title:"Calcaulator App"}} />
    </Stack.Navigator>
   </NavigationContainer>
  ) // end return
} // end Router

// Page Redirect

export default RouterCalculator
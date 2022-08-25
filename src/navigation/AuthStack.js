import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import FormScreen from '../screens/FormScreen';



function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="FormScreen"
        component={FormScreen}
      /> 
        
    </Stack.Navigator>
  );
}

export default AuthStack;

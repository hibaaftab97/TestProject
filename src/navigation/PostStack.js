import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import postListScreen from '../screens/postListScreen';
import AddPostScreen from '../screens/AddPostScreen';

function PostStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="postListScreen"
        component={postListScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AddPostScreen"
        component={AddPostScreen}
      />
    </Stack.Navigator>
  );
}

export default PostStack;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Basic from '../screens/Basic';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
        <Stack.Screen name="Basic" component={Basic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

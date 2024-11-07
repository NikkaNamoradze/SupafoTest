import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import EntryScreen from '../Screens/Entry/EntryScreen';
import SignInScreen from '../Screens/Authentication/SignInScreen';
import SignUpScreen from '../Screens/Authentication/SignUpScreen';

const UnAuthorizedStackNavigator = createNativeStackNavigator();

const Navigation = () => {
  return (
    <UnAuthorizedStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <UnAuthorizedStackNavigator.Screen
        name="EntryScreen"
        component={EntryScreen}
      />
      <UnAuthorizedStackNavigator.Screen
        name="SignInScreen"
        component={SignInScreen}
      />
      <UnAuthorizedStackNavigator.Screen
        name="SignUpScreen"
        component={SignUpScreen}
      />
    </UnAuthorizedStackNavigator.Navigator>
  );
};

export default Navigation;

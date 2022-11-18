import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen} from './login/login.screen';
import HomeScreen from './home/home.screen';
import {RegisterScreen} from './register/register.screen';
import DeliveryScreen from './delivery/delivery.screen';
import DeliveryRouteScreen from './delivery-route/delivery-route.screen';
import DeliveriesScreen from './deliveries/deliveries.screen';

const {Navigator, Screen} = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <Screen name="Login" component={LoginScreen}></Screen>
      <Screen name="Home" component={HomeScreen}></Screen>
      <Screen name="Register" component={RegisterScreen}></Screen>
      <Screen name="DeliveryRoute" component={DeliveryRouteScreen}></Screen>
      <Screen name="Deliveries" component={DeliveriesScreen}></Screen>
      <Screen name="Delivery" component={DeliveryScreen}></Screen>
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;

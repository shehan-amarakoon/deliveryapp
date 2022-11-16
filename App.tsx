import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './App.style';
import AddressScreen from './src/screens/address/address.screen';
import DeliveriesScreen from './src/screens/deliveries/deliveries.screen';
import DeliveryScreen from './src/screens/delivery/delivery.screen';
import HomeScreen from './src/screens/home/home.screen';
import {LoginScreen} from './src/screens/login/login.screen';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <LoginScreen />
    </PaperProvider>
  );
};

export default App;

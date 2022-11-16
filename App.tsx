import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './App.style';
import HomeScreen from './src/screens/home/home.screen';
import {LoginScreen} from './src/screens/login/login.screen';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <HomeScreen />
    </PaperProvider>
  );
};

export default App;

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {theme} from './App.style';
import LoadingComponent from './src/components/loading/loading.component';
import AppNavigator from './src/screens/app.navigator';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
        <LoadingComponent />
      </PaperProvider>
    </Provider>
  );
};

export default App;

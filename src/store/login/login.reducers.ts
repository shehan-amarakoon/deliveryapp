import {createReducer, current} from '@reduxjs/toolkit';
import {AppInitialState} from '../AppInitialState';
import {
  login,
  loginFail,
  loginSuccess,
  recoverPassword,
  recoverPasswordFail,
  recoverPasswordReset,
  recoverPasswordSuccess,
} from './login.actions';
import {LoginState} from './LoginState';

const initialState: LoginState = AppInitialState.login;

export const loginReducer = createReducer(initialState, builder => {
  console.log('\n main reducer');
  builder
    .addCase(recoverPassword, currentState => {
      return {
        ...currentState,
        error: null,
        isRecoveredPassword: false,
        isRecoveringPassword: true,
      };
    })
    .addCase(recoverPasswordSuccess, currentState => {
      console.log('\nReducer');
      return {
        ...currentState,
        error: null,
        isRecoveredPassword: true,
        isRecoveringPassword: false,
      };
    })
    .addCase(recoverPasswordFail, (currentState, actions) => {
      return {
        ...currentState,
        error: actions.payload,
        isRecoveredPassword: false,
        isRecoveringPassword: false,
      };
    })
    .addCase(recoverPasswordReset, currentState => {
      return {
        ...currentState,
        error: null,
        isRecoveredPassword: false,
        isRecoveringPassword: false,
      };
    })
    .addCase(login, currentState => {
      return {
        ...currentState,
        error: null,
        isLoggedIn: false,
        isLoggingIn: true,
      };
    })
    .addCase(loginSuccess, currentState => {
      return {
        ...currentState,
        isLoggedIn: true,
        isLoggingIn: false,
      };
    })
    .addCase(loginFail, (currentState, action) => {
      return {
        ...currentState,
        error: action.payload,
        isLoggedIn: false,
        isLoggingIn: false,
      };
    })
    .addDefaultCase((state, action) => {
      console.log('\nLOGIN REDUCER ', action.type);
    });
});

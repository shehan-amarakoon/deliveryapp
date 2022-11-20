import {createReducer, current} from '@reduxjs/toolkit';
import {AppInitialState} from '../AppInitialState';
import {
  recoverPassword,
  recoverPasswordFail,
  recoverPasswordSuccess,
} from './login.actions';
import {LoginState} from './LoginState';

const initialState: LoginState = AppInitialState.login;

export const loginReducer = createReducer(initialState, builder => {
  builder.addCase(recoverPassword, currentState => {
    return {
      ...currentState,
      error: null,
      isRecoveredPassword: false,
      isRecoveringPassword: true,
    };
  });
  builder.addCase(recoverPasswordSuccess, currentState => {
    return {
      ...currentState,
      error: null,
      isRecoveredPassword: true,
      isRecoveringPassword: false,
    };
  });
  builder.addCase(recoverPasswordFail, (currentState, actions) => {
    return {
      ...currentState,
      error: actions.payload,
      isRecoveredPassword: false,
      isRecoveringPassword: false,
    };
  });
});

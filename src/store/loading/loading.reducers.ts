import {createReducer} from '@reduxjs/toolkit';
import loginScreen from '../../screens/login/login.screen';
import {show, hide} from './loading.actions';
import {LoadingState} from './LoadingState';

const initialState: LoadingState = {
  show: false,
};

export const loadingReducer = createReducer(initialState, builder => {
  builder.addCase(show, () => {
    return {show: true};
  });
  builder.addCase(hide, () => {
    return {show: false};
  });
});

const {show, hide} = require('../loading.actions');
const {loadingReducer} = require('../loading.reducers');
import {createAction} from '@reduxjs/toolkit';

describe('loading store', () => {
  it('show', () => {
    const initialState = {show: false};
    const newState = loadingReducer(initialState, show);

    expect(newState).toEqual({show: true});
  });

  it('show', () => {
    const initialState = {show: true};
    const newState = loadingReducer(initialState, hide);

    expect(newState).toEqual({show: false});
  });

  it('should keep state if action unknow', () => {
    const initialState = {show: true};
    const action = createAction('UNKNOWN');
    const newState = loadingReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});

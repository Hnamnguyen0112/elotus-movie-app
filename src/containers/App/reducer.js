import { createReducer } from '@reduxjs/toolkit';
import update from 'immutability-helper';

import {
  appInitializeRequest,
  appInitializeSuccess,
  appShowLoading
} from './actions';

const initialState = {
  initialized: false,
  loading: false,
};

const appReducer = createReducer(initialState, {
  [appShowLoading]: (state, action) =>
    update(state, {
      loading: {
        $set: action.payload
      }
    }),
  [appInitializeRequest]: (state) =>
    update(state, {
      loading: {
        $set: true
      }
    }),
  [appInitializeSuccess]: (state, action) =>
    update(state, {
      loading: {
        $set: false
      },
      initialized: {
        $set: true
      },
      authenticated: {
        $set: action.payload
      }
    }),
});

export default appReducer;

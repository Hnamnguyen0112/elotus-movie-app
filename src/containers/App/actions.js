import { createAction } from '@reduxjs/toolkit';

import {
  APP_INITIALIZE_REQUEST,
  APP_INITIALIZE_SUCCESS,
  APP_SHOW_LOADING
} from './constants';

export const appShowLoading = createAction(APP_SHOW_LOADING);
export const appInitializeRequest = createAction(APP_INITIALIZE_REQUEST);
export const appInitializeSuccess = createAction(APP_INITIALIZE_SUCCESS);

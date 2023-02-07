import { fork, put, takeLatest } from 'redux-saga/effects';

import {
  appInitializeSuccess,
} from './actions';
import {
  APP_INITIALIZE_REQUEST,
} from './constants';

export function* appInitializeSaga() {
  yield put(appInitializeSuccess());
}

export function* watchAppInitializeSaga() {
  yield takeLatest(APP_INITIALIZE_REQUEST, appInitializeSaga);
}

export default function* saga() {
  yield fork(watchAppInitializeSaga);
}

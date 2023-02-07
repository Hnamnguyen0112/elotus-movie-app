import { fork, put, takeLatest, call, select } from 'redux-saga/effects';
import {
  HOME_GET_NOW_PLAYING_MOVIES_REQUEST,
  HOME_GET_TOP_RATED_MOVIES_REQUEST,
  HOME_SEARCH_MOVIES_REQUEST,
} from './constants';
import {
  homeGetNowPlayingMoviesFailure,
  homeGetNowPlayingMoviesSuccess,
  homeGetTopRatedMoviesFailure,
  homeGetTopRatedMoviesSuccess,
  homeSearchMoviesFailure,
  homeSearchMoviesSuccess,
} from './actions';
import { getNowPlayingMovies, getTopRatedMovies, searchMovies } from '@containers/Home/api';

function* HomeGetNowPlayingMoviesRequestSaga({ payload }) {
  const { page } = payload;
  try {
    const data = yield call(getNowPlayingMovies, page);
    yield put(homeGetNowPlayingMoviesSuccess(data));
  } catch (e) {
    yield put(homeGetNowPlayingMoviesFailure(e));
  }
}

function* HomeGetTopRatedMoviesRequestSaga({ payload }) {
  const { page } = payload;
  try {
    const data = yield call(getTopRatedMovies, page);
    yield put(homeGetTopRatedMoviesSuccess(data));
  } catch (e) {
    yield put(homeGetTopRatedMoviesFailure(e));
  }
}

function* HomeSearchMoviesRequestSaga({ payload }) {
  const { page, query } = payload;
  try {
    const data = yield call(searchMovies, query, page);
    const search = yield select(({homeState}) => homeState.search);
    let response
    if (search.query === query && page > search.page) {
      response = { ...data, query, results: [...search.results, ...data.results]}
    } else {
      response = {...data, query}
    }
    yield put(homeSearchMoviesSuccess(response));
  } catch (e) {
    yield put(homeSearchMoviesFailure(e));
  }
}

function* watchHomeGetNowPlayingMoviesRequestSaga() {
  yield takeLatest(HOME_GET_NOW_PLAYING_MOVIES_REQUEST, HomeGetNowPlayingMoviesRequestSaga)
}

function* watchHomeGetTopRatedMoviesRequestSaga() {
  yield takeLatest(HOME_GET_TOP_RATED_MOVIES_REQUEST, HomeGetTopRatedMoviesRequestSaga)
}

function* watchHomeSearchMoviesRequestSaga() {
  yield takeLatest(HOME_SEARCH_MOVIES_REQUEST, HomeSearchMoviesRequestSaga)
}

export default function* saga() {
  yield fork(watchHomeGetNowPlayingMoviesRequestSaga);
  yield fork(watchHomeGetTopRatedMoviesRequestSaga);
  yield fork(watchHomeSearchMoviesRequestSaga);
}

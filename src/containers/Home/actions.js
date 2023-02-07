import { createAction } from '@reduxjs/toolkit';
import {
  HOME_GET_NOW_PLAYING_MOVIES_FAILURE,
  HOME_GET_NOW_PLAYING_MOVIES_REQUEST,
  HOME_GET_NOW_PLAYING_MOVIES_SUCCESS,
  HOME_GET_TOP_RATED_MOVIES_FAILURE,
  HOME_GET_TOP_RATED_MOVIES_REQUEST,
  HOME_GET_TOP_RATED_MOVIES_SUCCESS,
  HOME_SEARCH_MOVIES_FAILURE,
  HOME_SEARCH_MOVIES_REQUEST,
  HOME_SEARCH_MOVIES_SUCCESS,
} from './constants';

export const homeGetNowPlayingMoviesRequest = createAction(HOME_GET_NOW_PLAYING_MOVIES_REQUEST);
export const homeGetNowPlayingMoviesSuccess = createAction(HOME_GET_NOW_PLAYING_MOVIES_SUCCESS);
export const homeGetNowPlayingMoviesFailure = createAction(HOME_GET_NOW_PLAYING_MOVIES_FAILURE);

export const homeGetTopRatedMoviesRequest = createAction(HOME_GET_TOP_RATED_MOVIES_REQUEST);
export const homeGetTopRatedMoviesSuccess = createAction(HOME_GET_TOP_RATED_MOVIES_SUCCESS);
export const homeGetTopRatedMoviesFailure = createAction(HOME_GET_TOP_RATED_MOVIES_FAILURE);

export const homeSearchMoviesRequest = createAction(HOME_SEARCH_MOVIES_REQUEST);
export const homeSearchMoviesSuccess = createAction(HOME_SEARCH_MOVIES_SUCCESS);
export const homeSearchMoviesFailure = createAction(HOME_SEARCH_MOVIES_FAILURE);

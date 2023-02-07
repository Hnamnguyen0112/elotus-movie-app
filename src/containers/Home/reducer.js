import { createReducer } from '@reduxjs/toolkit';
import {
  homeGetNowPlayingMoviesFailure,
  homeGetNowPlayingMoviesRequest,
  homeGetNowPlayingMoviesSuccess,
  homeGetTopRatedMoviesFailure,
  homeGetTopRatedMoviesRequest,
  homeGetTopRatedMoviesSuccess,
  homeSearchMoviesFailure,
  homeSearchMoviesRequest,
  homeSearchMoviesSuccess,
} from './actions';
import update from 'immutability-helper';

const initialState = {
  nowPlaying: {
    loading: false,
    date: {
      maximum: null,
      minimum: null
    },
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
    error: null
  },
  topRated: {
    loading: false,
    date: {
      maximum: null,
      minimum: null
    },
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
    error: null
  },
  search: {
    query: null,
    loading: false,
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
    error: null
  }
};

const homeReducer = createReducer(initialState, {
  /** GET NOW PLAYING MOVIES */
  [homeGetNowPlayingMoviesRequest]: (state) =>
    update(state, {
      nowPlaying: {
        loading: {
          $set: true
        }
      }
    }),
  [homeGetNowPlayingMoviesSuccess]: (state, action) =>
    update(state, {
      nowPlaying: {
        loading: {
          $set: false
        },
        results: {
          $push: action.payload.results
        },
        page: {
          $set: action.payload.page
        },
        total_pages: {
          $set: action.payload.total_pages
        },
        total_results: {
          $set: action.payload.total_results
        }
      }
    }),
  [homeGetNowPlayingMoviesFailure]: (state, action) =>
    update(state, {
      nowPlaying: {
        loading: {
          $set: false
        },
        error: {
          $set: action.payload
        }
      }
    }),
  /** END GET NOW PLAYING MOVIES */
  /** GET TOP RATED MOVIES */
  [homeGetTopRatedMoviesRequest]: (state) =>
    update(state, {
      topRated: {
        loading: {
          $set: true
        }
      }
    }),
  [homeGetTopRatedMoviesSuccess]: (state, action) =>
    update(state, {
      topRated: {
        loading: {
          $set: false
        },
        results: {
          $push: action.payload.results
        },
        page: {
          $set: action.payload.page
        },
        total_pages: {
          $set: action.payload.total_pages
        },
        total_results: {
          $set: action.payload.total_results
        }
      }
    }),
  [homeGetTopRatedMoviesFailure]: (state, action) =>
    update(state, {
      topRated: {
        loading: {
          $set: false
        },
        error: {
          $set: action.payload
        }
      }
    }),
  /** END GET TOP RATED MOVIES */
  /** SEARCH MOVIES */
  [homeSearchMoviesRequest]: (state) =>
    update(state, {
      search: {
        loading: {
          $set: true
        }
      }
    }),
  [homeSearchMoviesSuccess]: (state, action) =>
    update(state, {
      search: {
        query: {
          $set: action.payload.query,
        },
        loading: {
          $set: false,
        },
        results: {
          $set: action.payload.results,
        },
        page: {
          $set: action.payload.page,
        },
        total_pages: {
          $set: action.payload.total_pages,
        },
        total_results: {
          $set: action.payload.total_results,
        },
      },
    }),
  [homeSearchMoviesFailure]: (state, action) =>
    update(state, {
      search: {
        loading: {
          $set: false
        },
        error: {
          $set: action.payload
        }
      }
    }),
  /** END SEARCH MOVIES */
});

export default homeReducer;

import saga from '@containers/App/saga';
import { compose, configureStore as configureStoreToolkit } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from '@utils/createInjectorsEnhancer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers';

export default function configureStore(initialState = {}) {
  const reduxSagaMonitorOptions = {};

  let sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }
  const composeEnhancers = compose;

  const store = configureStoreToolkit({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(middlewares),
    preloadedState: initialState,
    devTools: {
      shouldHotReload: false
    },
    enhancers: (defaultEnhancers) => [
      composeEnhancers(createInjectorsEnhancer({ createReducer, runSaga: sagaMiddleware.run })),
      ...defaultEnhancers
    ]
  });

  sagaMiddleware.run(saga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}

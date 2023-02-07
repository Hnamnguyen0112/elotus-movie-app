import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FallbackPage from '@components/FallbackPage';
import { connectAutoDispatch } from '@utils/connectAutoDispatch';

import { appInitializeRequest } from './actions';
import routes from '@containers/App/routes'
import { useInjectReducer } from '@utils/injectReducer';
import homeReducer from '@containers/Home/reducer';
import { useInjectSaga } from '@utils/injectSaga'
import homeSaga from '@containers/Home/saga';
import AppLayout from '@containers/App/Layout';
import NotFound from '@containers/NotFound';

function renderRoute(routes) {
  return routes.map(({ path, key, component, children }) =>
     !children || !children.length ? <Route path={path} key={key} element={component} /> :
        <Route path={path} key={key} element={component}>
          {renderRoute(children)}
        </Route>
  );
}

function App({ initialized, appInitializeRequest }) {
  useInjectReducer({ key: 'homeState', reducer: homeReducer });

  useInjectSaga({ key: 'homeSaga', saga: homeSaga });

  useEffect(() => {
    appInitializeRequest();
  }, []);

  if (!initialized) {
    return <FallbackPage />;
  }

  return (
      <BrowserRouter>
          <Routes>
            {routes.map(({ path, key, component, children }) =>
              (!children || !children.length) ?
                <Route path={path} key={key} element={<AppLayout>{component}</AppLayout>} />:
                <Route path={path} key={key} element={<AppLayout>{component}</AppLayout>}>
                  {renderRoute(children)}
                </Route>
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  );
}

export default connectAutoDispatch(
  ({ appState }) => ({
    initialized: appState.initialized
  }),
  { appInitializeRequest }
)(App);

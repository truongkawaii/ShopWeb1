import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas';

// store.propTypes = {
//   children: PropTypes.any.isRequired,
// };

const sagaMiddleware = createSagaMiddleware();

const storeApp = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

const store = props => {
  // eslint-disable-next-line react/prop-types
  return <Provider store={storeApp}>{props.children}</Provider>;
};
sagaMiddleware.run(rootSaga);
export default store;

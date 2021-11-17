import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import productPageReducer from './reducers';
import productPageSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    productPageReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(productPageSagas);

export default store;

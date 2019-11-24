import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middleware = [];
middleware.push(thunk);

if(process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

export { store, persistor };

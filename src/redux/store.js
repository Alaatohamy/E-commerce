// import { createStore, applyMiddleware } from 'redux';
import { createStore } from 'redux';
// import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

// const middleware = [logger];

// const store = createStore(rootReducer, applyMiddleware(...middleware));
const store = createStore(rootReducer);

const persistor = persistStore(store);
 
export { store, persistor };
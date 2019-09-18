import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { fetchShopDataStart } from "redux/shop/shop.sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(fetchShopDataStart);

const persistor = persistStore(store);

export { store, persistor };

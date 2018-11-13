import { createStore, applyMiddleware } from "redux";
import createSagaMiddlewere from "redux-saga";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "../reducers";
import Saga from "../saga";

const sagaMiddlewere = createSagaMiddlewere();

let middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares = [thunkMiddleware, createLogger()];
} else {
  middlewares = [thunkMiddleware];
}

export default createStore(
  reducer,
  applyMiddleware(sagaMiddlewere, ...middlewares)
);

sagaMiddlewere.run(Saga);

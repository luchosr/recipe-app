import { AppsOutlined } from "@material-ui/icons";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";

const createSagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;

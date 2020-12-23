import { createStore, applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit"
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from "redux-logger"
// import { Sagas } from "./sagas"
const sagaMiddleware = createSagaMiddleware()

const Store = configureStore({
    reducer,
    middleware: applyMiddleware(sagaMiddleware)
});

// sagaMiddleware.run(Sagas)

export default Store;
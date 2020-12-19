import { createStore, applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit"
// import RootReducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from "redux-logger"
// import { Sagas } from "./sagas"
const sagaMiddleware = createSagaMiddleware()

function reducer(state = {}, action = {}) {
    return state;
}

const Store = configureStore({
    reducer,
    middleware: applyMiddleware(sagaMiddleware)
});

// sagaMiddleware.run(Sagas)

export default Store;
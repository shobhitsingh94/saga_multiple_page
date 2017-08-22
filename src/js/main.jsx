import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import {Provider} from "react-redux";
import {combineReducers, createStore, applyMiddleware} from "redux";
import {default as myreducers} from "./reducers/statereducer.jsx";
import {logger, crashReporter} from "./middlewares/midlleware";

import "../css/styles.css";
import utils from "./common/utils/utils";
import App from "./app";
import rootSaga from "./sagas/saga.jsx";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    state: myreducers
});
const store = createStore(reducers,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class Main extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById("root"));
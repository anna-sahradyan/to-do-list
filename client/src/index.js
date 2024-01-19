import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import rootReducer from "./redux/store";
import {configureStore} from "@reduxjs/toolkit";

//import store from "./reducer/store";
const store = configureStore({
    reducer: rootReducer,
});
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);


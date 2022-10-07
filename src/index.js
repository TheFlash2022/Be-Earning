import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "antd/dist/antd.css";
// redux
import {store} from './redux/configStore';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// import {createStore} from 'redux';
// const store=createStore(rootReducer);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
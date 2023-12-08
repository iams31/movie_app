import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import "./index.css";
import App from "./components/App";
import reducer from "./reducers/index";

// const logger=function(obj){//this object have two properties called dispatch and getstate so that  it will be same as store

// }
//curried logger function
//logger(obj)(next)(action)
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //middleware code
    if (typeof action !== "function") {
      console.log("ACTION_TYPE= ", action.type);
    }
    next(action);
  };
// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch);
//   }

//   next(action);
// };
const store = createStore(reducer, applyMiddleware(logger, thunk));
// console.log(store.getState())
// store.dispatch({

//   type:'ADD_MOVIES',
//   movies:[{name:'XXX'}]
// })
// console.log('State after dispatch: ', store.getState())
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App store={store} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import "./index.css";

import reducer from "./reducers/index";
import { createContext } from "react";
import AppWrapper from "./components/App";

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
export const storeContext = createContext();
class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <storeContext.Provider value={store}>
        {this.props.children}
      </storeContext.Provider>
    );
  }
}
const store = createStore(reducer, applyMiddleware(logger, thunk));
// console.log(store.getState())
// store.dispatch({

//   type:'ADD_MOVIES',
//   movies:[{name:'XXX'}]
// })
// console.log('State after dispatch: ', store.getState())
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

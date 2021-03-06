import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cart from "./cart";
import foods from "./foods";
import search from "./search";

const root = combineReducers({
  cart,
  foods,
  search,
});

let store = createStore(
  root,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);
export default store;

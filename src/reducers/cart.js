import { combineReducers } from "redux";
import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_SERVINGS } from "../actions/types";

const itemSet = function(state = new Set(), action) {
  switch(action.type) {
    case ADD_TO_CART:
      let addState = new Set(state);
      addState.add(action.payload);
      return addState;
    case REMOVE_FROM_CART:
      let remState = new Set(state);
      remState.delete(action.payload);
      return remState;
    default: 
      return state;
  }
};

const itemList = function(state = [], action) {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(id => id !== action.payload);
    default: 
      return state;
  }
};

const servingsMap = function(state = new Map(), action) {
  switch(action.type) {
    case ADD_TO_CART:
      let copy = new Map(state);
      copy.set(action.payload, 1);
      return copy;
    case REMOVE_FROM_CART:
      let copy2 = new Map(state);
      copy2.delete(action.payload);
      return copy2;
    case CHANGE_SERVINGS:
      let copy3 = new Map(state);
      copy3.set(action.id, action.payload);
      return copy3;
    default:
      return state;
  }
}

const cart = combineReducers({
    itemSet,
    itemList,
    servingsMap,
});

export default cart;
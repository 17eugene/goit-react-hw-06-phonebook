import { combineReducers } from "redux";
import types from "./contacts-types";

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD:
      if (
        state.find(
          (contact) =>
            contact.number === action.payload.number ||
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        alert("Contact already exist!");
        return;
      }
      return [action.payload, ...state];

    case types.DELETE:
      return state.filter((contact) => contact.id !== action.payload);

    default:
      return state;
  }
};

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case types.CHANGE_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

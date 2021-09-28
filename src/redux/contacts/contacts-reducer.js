import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import types from "./contacts-types";

import contactsActions from "./contacts-actions";

const itemsReducer = createReducer([], {
  [contactsActions.addContact]: (state, action) => {
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
  },

  [contactsActions.deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filterReducer = createReducer("", {
  [contactsActions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

//========================vanila redux
// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case types.ADD:
//       if (
//         state.find(
//           (contact) =>
//             contact.number === action.payload.number ||
//             contact.name.toLowerCase() === action.payload.name.toLowerCase()
//         )
//       ) {
//         alert("Contact already exist!");
//         return;
//       }
//       return [action.payload, ...state];

//     case types.DELETE:
//       return state.filter((contact) => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "contacts/changeFilter":
//       return action.payload;

//     default:
//       return state;
//   }
// };

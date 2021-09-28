// import types from "./contacts-types";
import shortid from "shortid";

import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", (data) => {
  return {
    payload: {
      id: shortid.generate(),
      ...data,
    },
  };
});

const deleteContact = createAction("contacts/delete");
const changeFilter = createAction("contacts/changeFilter");

const actions = {
  addContact,
  deleteContact,
  changeFilter,
};

export default actions;

//================================vanila redux
// const addContact = (data) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     ...data,
//   },
// });

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

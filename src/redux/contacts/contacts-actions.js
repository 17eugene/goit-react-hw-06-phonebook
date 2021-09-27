import types from "./contacts-types";
import shortid from "shortid";

const addContact = (data) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    ...data,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

const actions = {
  addContact,
  deleteContact,
  changeFilter,
};

export default actions;

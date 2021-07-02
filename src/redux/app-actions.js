import { createAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";

// axios.defaults.baseURL = "http://http://localhost:3000";

// const addContact = (name, number) => (dispatch) => {
//   const contact = { name, number };

//   dispatch({ type: "contacts/addContactRequest" });

//   axios
//     .post("/contacts", contact)
//     .then((response) =>
//       dispatch({ type: "contacts/addContactSuccess", payload: response.data })
//     )
//     .catch((error) =>
//       dispatch({ type: "contacts/addContactError", payload: error })
//     );
// };

// const addContact = createAction("app/addContact", (name, number) => {
//   return {
//     payload: {
//       id: uuidv4(),
//       name,
//       number,
//     },
//   };
// });

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");

const fetchContactRequest = createAction("contacts/fetchContactRequest");
const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
const fetchContactError = createAction("contacts/fetchContactError");

// const deleteContact = createAction("app/deleteContact");

const handleChange = createAction("app/handleChange");

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  handleChange,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
};

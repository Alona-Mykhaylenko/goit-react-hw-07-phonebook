import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "./app-actions";

axios.defaults.baseURL = "http://localhost:3000";

const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactRequest());

  axios
    .get("/contacts")
    .then((response) => dispatch(fetchContactSuccess(response.data)))
    .catch((error) => dispatch(fetchContactError(error)));
};

const addContact = (name, number) => (dispatch) => {
  const contact = { name, number };

  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then((response) => dispatch(addContactSuccess(response.data)))
    .catch((error) => dispatch(addContactError(error)));
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export { addContact, deleteContact, fetchContacts };

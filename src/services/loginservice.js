import axios from "axios";
// import { jwtDecode } from "jwt-decode";
import {
  axiosBaseGetUserById,
  axiosBasePostData,
} from "../helpers/axiosHelper";

const URL_SERVER = "http://127.0.0.1:5000";

// DONE
export const postLoginInf = async (value) => {
  const url = `${URL_SERVER}/login`;
  const token = await axiosBasePostData(url, value);
  return token;
};

// Done
export const getUserProfile = async () => {
  const response = await axiosBaseGetUserById(URL_SERVER);
  const userInfo = response.data;
  return userInfo;
};

export const postNewContact = async (contact) => {
  const url = `${URL_SERVER}/signup`;
  console.log(contact);
  return await axios.post(url, contact);
};

// export const getAllContacts = async () => {
//   const url = `${URL_SERVER}/users`;
//   const token = localStorage.getItem("token_auth");
//   if (token) {
//     const allContacs = await axios.get(url, {
//       header: { Authorization: `bearer ${token}` },
//     });
//   }
// };

// export const getContactInfo = async (UserId) => {
//   const url = `${URL_SERVER}/:userId`;
//   const x = await axios.get(url);
// };

// const token = localStorage.get("auth_token");
// const userId = jwtDecode(token).userid;
// const url = `${URL_SERVER}/UserProfile?userId=${userId}`;
// if (token) {
//   const response = await axios.get(url, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }

// const response = await axiosBaseGetByData(); // --> man token ro dakhele localstorage daram az token estefade mikonam baraye darkhast haye jadidam

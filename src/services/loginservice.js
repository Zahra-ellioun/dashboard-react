import axios from "axios";

const URL_SERVER = "http://localhost:9000/";

export const getLoginInf = (value) => {
  const url = `${URL_SERVER}/logindata`;
  return axios.post(url, value);
};

export const getLoginContacts = () => {
  const url = `${URL_SERVER}/logindata`;
  return axios.get(url);
};

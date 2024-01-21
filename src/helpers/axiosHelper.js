import axios from "axios";
import { jwtDecode } from "jwt-decode";

// when user log in make a token  DONE
export let axiosBasePostData = async (url, value) => {
  // console.log(url, value);
  const response = await axios.post(url, value);
  const token = response.data.token;
  localStorage.clear();
  localStorage.setItem("token_auth", token);
  // console.log(token);
  return token;
};

// get token of user that log in and add it on the header
export let axiosBaseGetUserById = async (URL_SERVER) => {
  const token = localStorage.getItem("token_auth");
  const decoded = jwtDecode(token);
  const userId = decoded.user_id;
  const url = `${URL_SERVER}/user/${userId}`;
  if (token) {
    const response = await axios.get(url, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  }
};

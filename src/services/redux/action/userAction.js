import { LOG_IN, LOG_OUT } from "../actionTypes/actionTypes";

const logIn = (payload) => {
  return {
    type: LOG_IN,
    payload: payload,
  };
};
const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
export { logIn, logOut };

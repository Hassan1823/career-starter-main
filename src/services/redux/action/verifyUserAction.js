import { VERIFY_USER, CLEAR_VERIFY } from "../actionTypes/actionTypes";

const verifyUser = (payload) => {
  return {
    type: VERIFY_USER,
    payload: payload,
  };
};
const clearVerifyUser = () => {
  return {
    type: CLEAR_VERIFY,
  };
};
export { verifyUser, clearVerifyUser };

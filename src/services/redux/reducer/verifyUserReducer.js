import { VERIFY_USER, CLEAR_VERIFY } from "../actionTypes/actionTypes";

const initialState = {
  isVerify: false,
  VerifyData: {},
};

const verifyUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_USER:
      return {
        ...state,
        isVerify: true,
        VerifyData: { ...action.payload },
      };
    case CLEAR_VERIFY:
      return {
        ...state,
        isVerify: false,
        VerifyData: {},
      };
    default:
      return state;
  }
};

export default verifyUserReducer;

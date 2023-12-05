import { LOG_OUT, LOG_IN } from "../actionTypes/actionTypes";

const initialState = {
  isUser: false,
  User_Data: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isUser: true,
        User_Data: { ...action.payload },
      };
    case LOG_OUT:
      return {
        ...state,
        isUser: false,
        User_Data: {},
      };
    default:
      return state;
  }
};

export default userReducer;

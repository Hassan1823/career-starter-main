import { verifyUserReducer, userReducer } from "./index";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  verifyUser: verifyUserReducer,
});
export default rootReducer;

import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import loadingReducer from "./loadingReducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  loading: loadingReducer,
});

export default rootReducer;

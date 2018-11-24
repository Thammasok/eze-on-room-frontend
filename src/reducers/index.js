import { combineReducers } from "redux";
import authentication from "./libs/authentication";
import example from "./libs/example";

export default combineReducers({
  authentication,
  example
});

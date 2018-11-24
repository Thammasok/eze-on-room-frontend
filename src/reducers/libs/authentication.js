import {
  SIGN_IN_RESPONSE,
  SIGN_IN_REQUEST_FAILED
} from "../../actions/authentication";

export default function example(state = {}, action) {
  switch (action.type) {
    case SIGN_IN_RESPONSE:
      return {
        token: action.token
      };
    case SIGN_IN_REQUEST_FAILED:
      return action;
    default:
      return state;
  }
}

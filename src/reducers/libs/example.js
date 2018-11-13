import { LOCAL_STORAGE_RESPONSE } from "../../actions/example";

export default function example(state = {}, action) {
  switch (action.type) {
    case LOCAL_STORAGE_RESPONSE:
      return {
        username1: action.username
      };
    default:
      return state;
  }
}

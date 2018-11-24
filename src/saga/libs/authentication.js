import { call, put, takeLatest } from "redux-saga/effects";
import {
  SIGN_IN_REQUEST,
  getUserSingInRequestFail,
  getUserSingInResult
} from "../../actions/authentication";
import { fetchSignIn } from "../../api/authentication";

function* getUserSingIn(action) {
  try {
    const response = yield call(fetchSignIn, action.username, action.password);
    if (response.status === 200) {
      yield put(getUserSingInResult(response.data));
    } else {
      yield put(getUserSingInRequestFail(response.data));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* authenticationSaga() {
  yield takeLatest(SIGN_IN_REQUEST, getUserSingIn);
}

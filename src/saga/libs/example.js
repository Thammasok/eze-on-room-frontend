import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOCAL_STORAGE_REQUEST,
  getLocalStorageRes
} from "../../actions/example";
import { fetchLocalStorage } from "../../api/example";

function* getExampleLocalStorage(action) {
  try {
    const res = yield call(fetchLocalStorage, action.storeKey);
    yield put(getLocalStorageRes(res));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export function* exampleSaga() {
  yield takeLatest(LOCAL_STORAGE_REQUEST, getExampleLocalStorage);
}

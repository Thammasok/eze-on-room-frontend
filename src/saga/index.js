import { all, fork } from "redux-saga/effects";
import * as exampleSaga from "./libs/example";

export default function* rootSaga() {
  yield all([...Object.values(exampleSaga)].map(fork));
}

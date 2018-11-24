import { all, fork } from "redux-saga/effects";
import * as authenticationSaga from "./libs/authentication";
import * as exampleSaga from "./libs/example";

export default function* rootSaga() {
  yield all(
    [...Object.values(authenticationSaga), ...Object.values(exampleSaga)].map(
      fork
    )
  );
}

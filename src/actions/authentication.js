import localStorage from "localStorage";

export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_REQUEST_FAILED = "SIGN_IN_REQUEST_FAILED";
export const SIGN_IN_RESPONSE = "SIGN_IN_RESPONSE";

export const getUserSingInRequest = (username, password) => ({
  type: SIGN_IN_REQUEST,
  username: username,
  password: password
});

export const getUserSingInRequestFail = errorResult => ({
  type: SIGN_IN_REQUEST_FAILED,
  error: true,
  data: {
    message: errorResult.message,
    path: errorResult.path[0]
  }
});

export const getUserSingInResult = userData => ({
  type: SIGN_IN_RESPONSE,
  ...userData
});

export const isAuthentication = () => {
  if (localStorage.getItem("token") === null) {
    return false;
  } else {
    return true;
  }
};

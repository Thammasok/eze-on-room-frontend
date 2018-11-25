export const ITEM_LISTS_REQUEST = "ITEM_LISTS_REQUEST";
export const ITEM_LISTS_REQUEST_FAILED = "ITEM_LISTS_REQUEST_FAILED";
export const ITEM_LISTS_RESPONSE = "ITEM_LISTS_RESPONSE";

export const getUserSingInRequest = (username, password) => ({
  type: ITEM_LISTS_REQUEST,
  username: username,
  password: password
});

export const getUserSingInRequestFail = errorResult => ({
  type: ITEM_LISTS_REQUEST_FAILED,
  error: true,
  data: {
    message: errorResult.message,
    path: errorResult.path[0]
  }
});

export const getUserSingInResult = storeLists => ({
  type: ITEM_LISTS_RESPONSE,
  ...storeLists
});

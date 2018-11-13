// import localStorage from "localStorage";

// export function addLocalStorage(name) {
//   return () => {
//     // localStorage.removeItem('example');
//     // console.log(config.service_url)
//     localStorage.setItem("example", JSON.stringify({ username: name }));
//   };
// }

// export function getLocalStorage() {
//   return dispatch => {
//     let localExample = JSON.parse(localStorage.getItem("example"));
//     dispatch({
//       type: "GET_LOCAL_STORAGE",
//       ...localExample
//     });
//   };
// }

export const LOCAL_STORAGE_REQUEST = "LOCAL_STORAGE_REQUEST";
export const LOCAL_STORAGE_RESPONSE = "LOCAL_STORAGE_RESPONSE";

export const getLocalStorageReq = storeKey => ({
  type: LOCAL_STORAGE_REQUEST,
  storeKey
});

export const getLocalStorageRes = localStorageData => ({
  type: LOCAL_STORAGE_RESPONSE,
  ...localStorageData
});

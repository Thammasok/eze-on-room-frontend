export const fetchLocalStorage = localStoreageKey => {
  return JSON.parse(localStorage.getItem(localStoreageKey));
};

export const getLocalStorage = (key) => {
  try {
    return window.localStorage.getItem(key);
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const saveLocalStorage = (key, data) => {
  try {
    window.localStorage.setItem(key, data);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const removeLocalStorage = (key) => {
  window.localStorage.removeItem(key);
  return true;
};

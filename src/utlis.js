export const setInLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));

export const removeItemFromLocalStorage = (key) => localStorage.removeItem(key);

export const updateUserListInLocalStorage = (user) => {
  const users = JSON.parse(localStorage.getItem("USERLIST"));
  if (!users) {
    setInLocalStorage("USERLIST", [user]);
  } else {
    setInLocalStorage("USERLIST", [...users, user]);
  }
};

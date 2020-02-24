import actionType from "./const";

export const setUser = (value) => ({
  type: actionType.SET_USER,
  value: value
})
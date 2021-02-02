import { userActionType } from "./userActionType";

export const setCurrentUser = (user) => {
  return {
    type: userActionType.SET_CURRENT_USER,
    payload: user,
  };
};

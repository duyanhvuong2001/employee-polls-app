import { SET_AUTHED_USER } from "../actions/authedUser";

export const authedUser = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_AUTHED_USER:
      return action.user;
  }
};

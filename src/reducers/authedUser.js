import { LOG_IN, LOG_OUT, SET_AUTHED_USER } from "../actions/authedUser";

export const authedUser = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_AUTHED_USER:
      return action.user;
    case LOG_OUT:
      return null;
    case LOG_IN:
      return action.user;
  }
};

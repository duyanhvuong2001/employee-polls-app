export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN = "LOG_IN";
export const setAuthedUser = (user) => {
  return {
    type: SET_AUTHED_USER,
    user,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const logIn = (user) => {
  return {
    type: LOG_IN,
    user,
  };
};

import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

const DEMO_AUTHED_USER = "sarahedo";

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(DEMO_AUTHED_USER));
    });
  };
};

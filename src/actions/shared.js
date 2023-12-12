import * as API from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

export const ADD_ANSWER = "ADD_ANSWER";
export const OPTION_ONE = "optionOne";
export const OPTION_TWO = "optionTwo";

export const handleInitialData = () => {
  return (dispatch) => {
    return API.getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
};

export const addAnswer = ({ questionId, authedUser, answer }) => {
  return {
    type: ADD_ANSWER,
    questionId,
    authedUser,
    answer,
  };
};

export const handleAddAnswer = (info) => {
  return (dispatch) => {
    return API.saveQuestionAnswer({
      authedUser: info.authedUser,
      qid: info.questionId,
      answer: info.answer,
    })
      .then(() => dispatch(addAnswer(info)))
      .catch((e) => {
        alert(
          "There was some error in saving your response, Please try again!"
        );
      });
  };
};

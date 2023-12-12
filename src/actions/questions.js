import * as API from "../utils/api";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export const handleAddQuestion = (optionOneText, optionTwoText, author) => {
  return (dispatch) => {
    return API.saveQuestion({ optionOneText, optionTwoText, author })
      .then((question) => {
        dispatch(addQuestion(question));
      })
      .catch((e) => {
        alert(
          "There's something wrong in adding question to the database, Please try agian!"
        );

        throw e;
      });
  };
};

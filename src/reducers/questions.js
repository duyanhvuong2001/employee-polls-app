import { ADD_QUESTION, RECEIVE_QUESTIONS } from "../actions/questions";
import { ADD_ANSWER } from "../actions/shared";

export const questions = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_ANSWER:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: state[action.questionId][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: {
          ...action.question,
        },
      };
  }
};

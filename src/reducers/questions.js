import { RECEIVE_QUESTIONS } from "../actions/questions";

export const questions = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
  }
};

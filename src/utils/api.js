import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({ users, questions })
  );
};

export const saveQuestionAnswer = (info) => {
  return _saveQuestionAnswer(info);
};

export const saveQuestion = (question) => {
  return _saveQuestion(question);
};

export const userHasVoted = (question, authedUser) => {
  return {
    optionOneChosen: question.optionOne.votes.includes(authedUser),
    optionTwoChosen: question.optionTwo.votes.includes(authedUser),
  };
};

export const userHasAnswered = (question, authedUser) => {
  const { optionOneChosen, optionTwoChosen } = userHasVoted(
    question,
    authedUser
  );
  return optionOneChosen || optionTwoChosen;
};

export const getAuthor = (users, question) => {
  return Object.values(users).find((user) => user.id === question.author);
};

export const calculateResponses = (question) => {
  const totalVotesLength =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  return {
    optionOneRes: {
      voteCount: question.optionOne.votes.length,
      percentage: (
        100 *
        (question.optionOne.votes.length / totalVotesLength)
      ).toFixed(2),
    },
    optionTwoRes: {
      voteCount: question.optionTwo.votes.length,
      percentage: (
        100 *
        (question.optionTwo.votes.length / totalVotesLength)
      ).toFixed(2),
    },
  };
};

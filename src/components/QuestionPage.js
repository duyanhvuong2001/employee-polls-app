import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  calculateResponses,
  userHasAnswered,
  userHasVoted,
  getAuthor,
} from "../utils/utils";
import { OPTION_ONE, OPTION_TWO, handleAddAnswer } from "../actions/shared";
import LogInReminder from "./LogInReminder";

const QuestionPage = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { questions, authedUser, dispatch, users } = props;
  const question = questions[id];

  //Navigate to not found page if question is null
  if (!question) {
    navigate("/404");
    return null;
  }

  if (!authedUser) {
    return <LogInReminder />;
  }

  const author = getAuthor(users, question);

  const answered = userHasAnswered(question, authedUser);

  const { optionOneChosen, optionTwoChosen } = userHasVoted(
    question,
    authedUser
  );
  const { optionOneRes, optionTwoRes } = calculateResponses(question);

  const submitVote = (e, answer) => {
    e.preventDefault();

    dispatch(handleAddAnswer({ questionId: id, authedUser, answer }));
  };

  return (
    question !== null && (
      <>
        <h2 className="d-flex align-items-center">
          <img className="avatar me-2" alt={author.id} src={author.avatarURL} />
          Would you rather...
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Options</th>
              <th>{!answered ? "Vote" : "Result"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{question.optionOne.text}</td>
              <td className={optionOneChosen ? "text-success" : ""}>
                {!answered ? (
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      submitVote(e, OPTION_ONE);
                    }}
                  >
                    Vote Option 1
                  </button>
                ) : (
                  <>
                    {optionOneRes.voteCount} ({optionOneRes.percentage}%)
                  </>
                )}
              </td>
            </tr>
            <tr>
              <td>{question.optionTwo.text}</td>
              <td className={optionTwoChosen ? "text-success" : ""}>
                {!answered ? (
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      submitVote(e, OPTION_TWO);
                    }}
                  >
                    Vote Option 2
                  </button>
                ) : (
                  <>
                    {optionTwoRes.voteCount} ({optionTwoRes.percentage}%)
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </>
    )
  );
};

const mapStateToProps = ({ questions, authedUser, users }) => {
  return {
    questions,
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(QuestionPage);

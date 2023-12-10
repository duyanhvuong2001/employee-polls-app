import { useState } from "react";
import { connect } from "react-redux";
import Question from "./Question";

const Dashboard = (props) => {
  const [showAnswered, setShowAnswered] = useState(false);
  //Check auth status
  if (props.authedUser === null) {
    return (
      <div>
        <span>Please Log In First</span>
      </div>
    );
  }

  const handleToggleQuestions = (e) => {
    e.preventDefault();

    setShowAnswered(!showAnswered);
  };

  const { answeredQs, notAnsweredQs } = props;

  const displayingQuestions = showAnswered ? answeredQs : notAnsweredQs;
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <hr />
      <h2>{!showAnswered && "Not"} Answered</h2>
      <ul>
        {displayingQuestions.map((questionId) => (
          <li key={questionId}>
            <Question id={questionId} />
          </li>
        ))}
      </ul>

      <button onClick={handleToggleQuestions}>Toggle</button>
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser }) => {
  const userHasAnswered = (questionId) => {
    return (
      questions[questionId].optionOne.votes.includes(authedUser) ||
      questions[questionId].optionTwo.votes.includes(authedUser)
    );
  };
  return {
    notAnsweredQs: Object.keys(questions)
      .filter((question) => {
        return !userHasAnswered(question);
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQs: Object.keys(questions)
      .filter((question) => {
        return userHasAnswered(question);
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  };
};
export default connect(mapStateToProps)(Dashboard);

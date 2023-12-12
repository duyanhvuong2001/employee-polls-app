import { useState } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { userHasAnswered } from "../utils/utils";
import LogInReminder from "./LogInReminder";
const Dashboard = (props) => {
  const [showAnswered, setShowAnswered] = useState(false);
  //Check auth status
  if (props.authedUser === null) {
    return <LogInReminder />;
  }

  const handleToggleQuestions = (e) => {
    e.preventDefault();

    setShowAnswered(!showAnswered);
  };

  const { answeredQs, notAnsweredQs } = props;

  const displayingQuestions = showAnswered ? answeredQs : notAnsweredQs;
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <div className="dashboard">
            <h1 className="mb-4">Dashboard</h1>
            <hr />

            <h2 className={`text-${showAnswered ? "success" : "danger"}`}>
              {!showAnswered && "Not "}Answered
            </h2>

            <ul className="list-group">
              {displayingQuestions.map((questionId) => (
                <li className="list-group-item" key={questionId}>
                  <Question id={questionId} />
                </li>
              ))}
            </ul>

            <button
              className="btn btn-primary mt-3"
              onClick={handleToggleQuestions}
            >
              Toggle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser }) => {
  return {
    authedUser,
    notAnsweredQs: Object.keys(questions)
      .filter((question) => {
        return !userHasAnswered(questions[question], authedUser);
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQs: Object.keys(questions)
      .filter((question) => {
        return userHasAnswered(questions[question], authedUser);
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  };
};
export default connect(mapStateToProps)(Dashboard);

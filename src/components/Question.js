import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Question = (props) => {
  const { question } = props;
  if (question === null) {
    return <div>This question does not exist</div>;
  }

  return (
    <div className="question card">
      <Link
        to={`/question/${question.id}`}
        className="card-body text-decoration-none"
      >
        <h5 className="card-title mb-4">Would you rather...</h5>
        <div className="d-flex justify-content-between">
          <div className="option">
            <p className="card-text lead font-weight-bold">
              {question.optionOne.text}
            </p>
          </div>
          <div className="option">
            <p className="card-text lead">OR</p>
          </div>
          <div className="option">
            <p className="card-text lead font-weight-bold">
              {question.optionTwo.text}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ questions }, { id }) => {
  const question = questions[id];
  return {
    question,
  };
};

export default connect(mapStateToProps)(Question);

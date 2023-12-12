import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Question = (props) => {
  const { question } = props;
  if (question === null) {
    return <div>This question does not exist</div>;
  }

  return (
    <div className="question">
      <Link to={`/question/${question.id}`}>
        <p>
          <strong>{question.optionOne.text}</strong>
        </p>
        <p>VS</p>
        <p>
          <strong>{question.optionTwo.text}</strong>
        </p>
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

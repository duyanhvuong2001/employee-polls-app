import { connect } from "react-redux";

const Question = (props) => {
  const { question } = props;
  if (question === null) {
    return <div>This question does not exist</div>;
  }

  return (
    <div>
      <p>Question by {question.author}</p>
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

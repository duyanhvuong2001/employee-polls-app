import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import LogInReminder from "./LogInReminder";

const NewQuestion = (props) => {
  const { dispatch, authedUser } = props;
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const navigate = useNavigate();

  if (authedUser === null) {
    return <LogInReminder />;
  }
  const handleOptionOneTextChange = (e) => {
    setOptionOneText(e.target.value);
  };

  const handleOptionTwoTextChange = (e) => {
    setOptionTwoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser));

    //Redirect to root when done
    navigate("/");
  };
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Would you rather...</h2>
      <form onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center mb-3">
          <div className="col-auto">
            <label htmlFor="optionOne" className="col-form-label">
              Option 1
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="optionOne"
              className="form-control"
              value={optionOneText}
              onChange={handleOptionOneTextChange}
              required
            />
          </div>
        </div>
        <div className="row g-3 align-items-center mb-3">
          <div className="col-auto">
            <label htmlFor="optionTwo" className="col-form-label">
              Option 2
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="optionTwo"
              value={optionTwoText}
              onChange={handleOptionTwoTextChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Question
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};

export default connect(mapStateToProps)(NewQuestion);

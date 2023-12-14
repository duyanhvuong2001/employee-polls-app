import { connect } from "react-redux";
import {} from "react-bootstrap";
const LeaderboardEntry = (props) => {
  const { user } = props;
  if (!user) {
    return <div>User not found</div>;
  }

  const numQuestions = user.questions.length;
  const numAnswers = Object.keys(user.answers).length;
  return (
    <div className="leaderboard-entry">
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="info-group">
              <img
                className="avatar d-inline-block me-3"
                src={user.avatarURL}
                alt={user.id}
              />
              <h3 className="d-inline-block mb-0">{user.id}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <span className="badge bg-primary p-2">
              <strong className="text-white">Number of Questions:</strong>{" "}
              {numQuestions}
            </span>
          </div>
          <div className="col">
            <span className="badge bg-success p-2">
              <strong className="text-white">Answered Questions:</strong>{" "}
              {numAnswers}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }, { id }) => {
  return { user: users[id] };
};

export default connect(mapStateToProps)(LeaderboardEntry);

import { connect } from "react-redux";
import LogInReminder from "./LogInReminder";
import LeaderboardEntry from "./LeaderboardEntry";
import { ListGroup, ListGroupItem } from "react-bootstrap";
const Leaderboard = (props) => {
  const { authedUser, users } = props;

  if (!authedUser) {
    return <LogInReminder />;
  }
  return (
    <div>
      <ListGroup>
        {users &&
          users.map((user) => (
            <ListGroupItem key={user}>
              <LeaderboardEntry id={user} />
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users: Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    ),
  };
};
export default connect(mapStateToProps)(Leaderboard);

import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { logIn, logOut } from "../actions/authedUser";

const Authenticator = (props) => {
  const { authedUser, otherUsers, dispatch } = props;

  const loggedIn = authedUser !== null;

  const handleLogOut = (e) => {
    dispatch(logOut());
  };

  const handleLogIn = (user) => {
    dispatch(logIn(user));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        <span data-testid="log-in-dropdown">
          {loggedIn ? `Hi ${authedUser}` : `Log In`}
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {loggedIn ? (
          <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
        ) : (
          <>
            {otherUsers.map((user) => (
              <Dropdown.Item onClick={() => handleLogIn(user)} key={user}>
                {user}
              </Dropdown.Item>
            ))}
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  return {
    authedUser,
    otherUsers: Object.keys(users).filter((user) => user !== authedUser),
  };
};

export default connect(mapStateToProps)(Authenticator);

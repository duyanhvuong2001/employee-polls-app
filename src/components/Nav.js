import { Link } from "react-router-dom";
import Authenticator from "./Authenticator";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a
            className="navbar-brand"
            href="https://github.com/duyanhvuong2001"
            data-testid="github-link"
          >
            <img
              src="./resources/images/logo.png"
              alt="Jeff"
              className="rounded-circle"
              style={{ width: "40px", height: "40px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/" data-testid="home-link">
                Home
              </Link>
              <Link
                className="nav-link"
                to="/leaderboard"
                data-testid="leaderboard-link"
              >
                Leaderboard
              </Link>
              <Link
                className="nav-link"
                to="/add"
                data-testid="add-question-link"
              >
                Add Question
              </Link>
              <Authenticator />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

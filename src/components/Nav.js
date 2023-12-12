import { Link } from "react-router-dom";
import Authenticator from "./Authenticator";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link
            className="navbar-brand"
            to="https://github.com/duyanhvuong2001"
          >
            <img
              src="./resources/images/logo.png"
              alt="Jeff"
              className="rounded-circle"
              style={{ width: "40px", height: "40px" }}
            />
          </Link>
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
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/leaderboard">
                Leaderboard
              </Link>
              <Link className="nav-link" to="/add">
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

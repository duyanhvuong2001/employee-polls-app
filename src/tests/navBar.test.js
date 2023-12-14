import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav";
import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("<NavBar/>", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      authedUser: "tylermcginnis",
      users: {
        zoshikanlu: {
          id: "zoshikanlu",
        },
        mtsamis: {
          id: "mtsamis",
        },
        sarahedo: {
          id: "sarahedo",
        },
        tylermcginnis: {
          id: "tylermcginnis",
        },
      },
    });
  });

  it("will have all the required links", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    const homeLink = screen.getByTestId("home-link");
    const leaderboardLink = screen.getByTestId("leaderboard-link");
    const addQuestionLink = screen.getByTestId("add-question-link");

    expect(homeLink).toBeInTheDocument();
    expect(leaderboardLink).toBeInTheDocument();
    expect(addQuestionLink).toBeInTheDocument();
  });

  it("will have the authenticator displayed 'Log In' if no authedUser found", () => {
    store = mockStore({
      authedUser: null,
      users: {
        zoshikanlu: {
          id: "zoshikanlu",
        },
        mtsamis: {
          id: "mtsamis",
        },
        sarahedo: {
          id: "sarahedo",
        },
        tylermcginnis: {
          id: "tylermcginnis",
        },
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    const logInDropdown = screen.getByTestId("log-in-dropdown");

    expect(logInDropdown.textContent).toEqual("Log In");
  });
});

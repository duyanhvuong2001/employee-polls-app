import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import configureMockStore from "redux-mock-store";
import NewQuestion from "../components/NewQuestion";
import { thunk } from "redux-thunk";

// Mock the react-router-dom useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

jest.mock("../actions/questions");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("<NewQuestion/>", () => {
  let store;

  beforeEach(() => {
    store = mockStore({ authedUser: "tylermcginnis" });
  });

  it("renders login reminder if not authenticated", () => {
    // Render component with null authedUser
    store = mockStore({
      authedUser: null,
    });

    render(
      <Provider store={store}>
        <NewQuestion />
      </Provider>
    );
    expect(screen.getByTestId("login-reminder")).toBeInTheDocument();
  });

  it("updates option text on input change", () => {
    render(
      <Provider store={store}>
        <NewQuestion />
      </Provider>
    );
    const optionOneInput = screen.getByTestId("optionOne");
    const optionTwoInput = screen.getByTestId("optionTwo");

    fireEvent.change(optionOneInput, { target: { value: "Option One Text" } });
    fireEvent.change(optionTwoInput, { target: { value: "Option Two Text" } });

    expect(optionOneInput.value).toBe("Option One Text");
    expect(optionTwoInput.value).toBe("Option Two Text");
  });

  it("submits the form and dispatches handleAddQuestion", async () => {
    const { handleAddQuestion } = require("../actions/questions");

    handleAddQuestion.mockReturnValue({ type: "ADD_QUESTION" });

    render(
      <Provider store={store}>
        <NewQuestion />
      </Provider>
    );
    const optionOneInput = screen.getByTestId("optionOne");
    const optionTwoInput = screen.getByTestId("optionTwo");
    const submitButton = screen.getByText("Add Question");

    // Set input values
    fireEvent.change(optionOneInput, { target: { value: "Option One Text" } });
    fireEvent.change(optionTwoInput, { target: { value: "Option Two Text" } });

    // Trigger form submission
    fireEvent.click(submitButton);

    // Wait for handleAddQuestion to be called
    await waitFor(() => {
      expect(
        require("../actions/questions").handleAddQuestion
      ).toHaveBeenCalledWith(
        "Option One Text",
        "Option Two Text",
        "tylermcginnis"
      );
    });
  });
});

import { render } from "@testing-library/react";
import LogInReminder from "../components/LogInReminder";

describe("LogInReminder component", () => {
  it("will match snapshot", () => {
    const view = render(<LogInReminder />);

    expect(view).toMatchSnapshot();
  });
});

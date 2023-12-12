import * as API from "../utils/api";

describe("saveQuestion function", () => {
  it("will return the saved question if the correctly formatted data is passed", async () => {
    const question = {
      optionOneText: "foo",
      optionTwoText: "bar",
      author: "jeff",
    };

    const savedQuestion = await API.saveQuestion(question);
    expect(question.optionOneText).toEqual(savedQuestion.optionOne.text);
    expect(question.optionTwoText).toEqual(savedQuestion.optionTwo.text);
    expect(question.author).toEqual(savedQuestion.author);
  });

  it("will reject with an error message if incorrect data is passed in", async () => {
    const question = {
      optionOneText: "foo",
      optionTwoText: "bar",
    };

    await expect(API.saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("saveQuestionAnswer function", () => {
  it("will resolve true if a correctly formatted data is passed", async () => {
    await expect(
      API.saveQuestionAnswer({
        authedUser: "tylermcginnis",
        qid: "vthrdm985a262al8qx3do",
        answer: "optionOne",
      })
    ).resolves.toBe(true);
  });
});

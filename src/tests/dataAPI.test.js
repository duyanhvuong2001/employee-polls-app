import * as API from "../utils/_DATA";

describe("saveQuestion function", () => {
  it("will return the saved question if the correctly formatted data is passed", async () => {
    const question = {
      optionOneText: "foo",
      optionTwoText: "bar",
      author: "jeff",
    };

    const savedQuestion = await API._saveQuestion(question);
    expect(question.optionOneText).toEqual(savedQuestion.optionOne.text);
    expect(question.optionTwoText).toEqual(savedQuestion.optionTwo.text);
    expect(question.author).toEqual(savedQuestion.author);
  });

  it("will reject with an error message if incorrect data is passed in", async () => {
    const question = {
      optionOneText: "foo",
      optionTwoText: "bar",
    };

    await expect(API._saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("saveQuestionAnswer function", () => {
  it("will resolve true if a correctly formatted data is passed", async () => {
    await expect(
      API._saveQuestionAnswer({
        authedUser: "tylermcginnis",
        qid: "vthrdm985a262al8qx3do",
        answer: "optionOne",
      })
    ).resolves.toBe(true);
  });

  it("will return an error if incorrect data is passed", async () => {
    await expect(
      API._saveQuestionAnswer({
        qid: "vthrdm985a262al8qx3do",
        answer: "optionOne",
      })
    ).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});

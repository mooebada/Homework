/* eslint-disable hyf/camelcase */
"use strict";
const path = require("path");
const walk = require("acorn-walk");
const {
  beforeAllHelper,
  expectedReceived,
} = require("../../../test-automation/unit-test-helpers");

const exercisePath = path.join(__dirname, "../homework/ex1-giveCompliment.js");

describe("giveCompliment", () => {
  let giveCompliment;
  const state = {};

  beforeAll(() => {
    const { exports, rootNode } = beforeAllHelper(exercisePath, {
      parse: true,
    });
    giveCompliment = exports;

    walk.simple(rootNode, {
      VariableDeclarator({ id, init }) {
        if (
          id &&
          id.name === "compliments" &&
          init &&
          init.type === "ArrayExpression"
        ) {
          state.compliments = init.elements.map((elem) => elem.value);
        }
      },
      CallExpression({ callee, arguments: args }) {
        if (
          callee.type === "Identifier" &&
          callee.name === "giveCompliment" &&
          args.length > 0 &&
          args[0].type === "Literal"
        ) {
          state.name = args[0].value;
        }
      },
    });
  });

  it("should contain a `const` array named `compliments` with 10 strings", () => {
    expect(state.compliments).toBeDefined();
    expect(state.compliments).toHaveLength(10);
    expect(
      state.compliments.every((compliment) => typeof compliment === "string")
    ).toBe(true);
  });

  it("should give a random compliment: You are `compliment`, `name`!", () => {
    expect(state.compliments).toBeDefined();

    const name = state.name || "Jack";

    const mathRandomSpy = jest.spyOn(Math, "random").mockReturnValue(0);
    const received = giveCompliment(name);

    expect(mathRandomSpy).toHaveBeenCalled();
    mathRandomSpy.mockRestore();

    const [compliment] = state.compliments;
    const message = expectedReceived(
      `You are ${compliment}, ${name}!`,
      received
    );
    expect(message).toBe("");
  });
});

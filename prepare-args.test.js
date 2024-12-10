import assert from "node:assert";
import { describe, it } from "node:test";
import prepareArgs from "./prepare-args.js";

function sum(...args) {
  return args.reduce((acc, value) => acc + value, 0);
}

async function sumAsync(...args) {
  return new Promise((resolve) => {
    resolve(args.reduce((acc, value) => acc + value, 0));
  });
}

describe("prepareArgs", () => {
  it("prepares args for sync functions", () => {
    const oneTwoThree = prepareArgs(sum, 1, 2, 3);

    assert.equal(oneTwoThree(1), 7);
  });

  it("prepares args for async functions", async () => {
    const oneTwoThree = prepareArgs(sumAsync, 1, 2, 3);

    assert.equal(await oneTwoThree(1), 7);
  });
});

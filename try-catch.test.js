import assert from "node:assert/strict";
import { describe, it } from "node:test";
import tryCatch from "./try-catch.js";

describe("tryCatch", () => {
	it("should catch in sync function", () => {
		const [error, result] = tryCatch(() => {
			throw new Error("error");
		});

		assert(error instanceof Error);
		assert.equal(result, undefined);
	});

	it("should return if no error in a sync function", () => {
		const [error, result] = tryCatch(() => {
			return "result";
		});

		assert.equal(error, undefined);
		assert.equal(result, "result");
	});

	it("should catch in async function", async () => {
		const [error, result] = await tryCatch(async () => {
			throw new Error("error");
		});

		assert(error instanceof Error);
		assert.equal(result, undefined);
	});

	it("should return if no error in an async function", async () => {
		const [error, result] = await tryCatch(async () => {
			return "result";
		});

		assert.equal(error, undefined);
		assert.equal(result, "result");
	});
});

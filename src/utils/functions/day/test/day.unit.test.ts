import { describe, expect, test } from "@jest/globals";
import { getDay } from "../get-day";

const testCases = [
  { input: new Date("2025-04-20").getDay(), expected: "Sunday" },
  { input: new Date("2025-04-19").getDay(), expected: "Saturday" },
  { input: new Date("2025-04-16").getDay(), expected: "Wednesday" },
];

describe.each(testCases)(`Day unit test, index is $input`, (testValue) => {
  test(`Expected: ${testValue.expected}`, () => {
    const test_index = testValue.input;
    const test_expected = testValue.expected;
    const result = getDay(test_index);

    expect(result).toBe(test_expected);
  });
});

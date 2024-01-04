const getSum = require("./get-sum");

// generate test cases both positive and negative

const testCases = [
  { input: [1, 2, 3, 4, 5], expected: 15 },
  { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: 55 },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a"],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b"],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, false],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, null],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, undefined],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, undefined, undefined],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, NaN],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, NaN, NaN],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, "a"],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, "a", "b"],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, true],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, true, false],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, null],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, null, null],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, undefined],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, undefined, undefined],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, NaN],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, 5, NaN, NaN],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, "a"],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, "a", "b"],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, true],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, true, false],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, null],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, null, null],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, undefined],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, undefined, undefined],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, NaN],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, 4, NaN, NaN],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, "a"],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, "a", "b"],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, true],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, true, false],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, null],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, null, null],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, undefined],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, undefined, undefined],
    expected: "Please provide number or an array of numbers",
  },
  {
    input: [1, 2, 3, NaN],
    expected: "Please provide number or an array of numbers",
  },
];

// run test cases
testCases.forEach(({ input, expected }) => {
  test(`getSum(${input}) should return ${expected}`, () => {
    expect(getSum(input)).toBe(expected);
  });
});

// check negative test cases
testCases.forEach(({ input }) => {
  test(`getSum(${input}) should not return a boolean`, () => {
    expect(typeof getSum(input)).not.toBe("boolean");
  });
});

// check negative test cases
testCases.forEach(({ input }) => {
  test(`getSum(${input}) should not return an array`, () => {
    expect(Array.isArray(getSum(input))).not.toBe(true);
  });
});

// check negative test cases
testCases.forEach(({ input }) => {
  test(`getSum(${input}) should not return an object`, () => {
    expect(typeof getSum(input)).not.toBe("object");
  });
});

// check negative test cases
testCases.forEach(({ input }) => {
  test(`getSum(${input}) should not return null`, () => {
    expect(getSum(input)).not.toBe(null);
  });
});

// check negative test cases
testCases.forEach(({ input }) => {
  test(`getSum(${input}) should not return undefined`, () => {
    expect(getSum(input)).not.toBe(undefined);
  });
});

// check negative test cases
testCases.forEach(({ input }) => {
  test(`getSum(${input}) should not return NaN`, () => {
    expect(getSum(input)).not.toBe(NaN);
  });
});

// check negative test cases
testCases.forEach(({ input }) => {
  test(`getSum(${input}) should not return Infinity`, () => {
    expect(getSum(input)).not.toBe(Infinity);
  });
});

// check negative test cases
testCases.forEach(({ input }) => {
  test(`getSum(${input}) should not return -Infinity`, () => {
    expect(getSum(input)).not.toBe(-Infinity);
  });
});

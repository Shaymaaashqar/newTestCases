const { arrayOnly, calculateAvg, getTotal } = require("./array");
const { subjects2, subjects } = require("./fixtures");

describe("Testing the array only content", () => {
  test("The return value is an Array", () => {
    expect(Array.isArray(arrayOnly())).toBe(true);
  });

  test("The array has `1`", () => {
    expect(arrayOnly()).toContain(1);
  });

  test("The third element in the array is `2`", () => {
    expect(arrayOnly()[2]).toBe(3);
  });

  test("The array has 4 elements", () => {
    expect(arrayOnly().length).toBe(4);
  });

  test("The first element is `1`", () => {
    expect(arrayOnly().indexOf(1)).toBe(0);
  });
});

//describe("Testing the ")

describe("Testing the calculateAvg and Total for the passed subjects array of objects", () => {
  test("The return value is an Avg of subject", () => {
    expect(calculateAvg(subjects)).toBe(98.2);
  });

  test("The return value is an Avg of subject2", () => {
    expect(calculateAvg(subjects2)).toBe(99);
  });

  test("The return value is zero if the passed subjects is undefined", () => {
    expect(calculateAvg()).toBe(0);
  });

  test("Something else", () => {
    expect(calculateAvg([{ isRequired: false, max: 100, score: 90 }])).toBe(90);
  });

  test("Something else - 1", () => {
    expect(calculateAvg([{ isRequired: true, max: 100, score: 90 }])).toBe(90);
  });

  test("Something else - 2", () => {
    expect(calculateAvg([{ isRequired: undefined, max: 100, score: 90 }])).toBe(90);
  });

  test("Something else - 3", () => {
    expect(calculateAvg([{ isRequired: true, max: 0, score: 0 }])).toBe(0);
  });

  test("Something else - 4", () => {
    expect(calculateAvg([{ isRequired: true, max: undefined, score: undefined }])).toBe(NaN);
  });
});

describe("Testing the getTotal", () => {
  test("The return value is the summation of all totals", () => {
    expect(getTotal({ total: 0 }, { total: 12 }, { total: 0 })).toBe(12);
  });

  test("The return value is the summation of all totals even with negative numbers", () => {
    expect(getTotal({ total: -12 }, { total: 12 }, { total: 0 })).toBe(0);
  });

  /**
   * No need!
   */
  // test("The return value is an Total of subject3", () => {
  //   expect(getTotal({ total: -12 }, {}, { total: -13 })).toBe(-25);
  // });

  /**
   * NaN is something users mustn't see
   */
  // test("The return value is the summation of all totals even when the first param is undefined", () => {
  //   expect(getTotal(undefined, { total: 0 }, { total: 12 })).toBe(NaN);
  // });
  test("The return value is the summation of all totals even when the first param is undefined", () => {
    expect(getTotal(undefined, { total: 0 }, { total: 12 })).toBe(12);
  });

  test("The return value is the summation of all totals even when the a param has no total", () => {
    expect(getTotal({}, { total: 12 }, { total: 1 })).toBe(13);
  });

  test("The return value is 0 for all empty params", () => {
    expect(getTotal({}, {}, {})).toBe(0);
  });

  test("The return value is 0 for all undefined params", () => {
    expect(getTotal(undefined, undefined, undefined)).toBe(0);
  });

  test("The return value is 0 for null totals", () => {
    expect(getTotal({ total: null }, { total: null }, { total: null })).toBe(0);
  });
});

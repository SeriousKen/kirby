/**
 * @vitest-environment node
 */

import dayjs from "./dayjs.js";

describe("dayjs.interpret(input, 'date')", () => {
  const expected = {
    "2021-03-05": "2021-03-05",
    "2021-03-5": "2021-03-05",
    "2021-03-": "2021-03-01",
    "2021-03": "2021-03-01",
    "2021-3-04": "2021-03-04",
    "2021-3-4": "2021-03-04",
    "2021-3-": "2021-03-01",
    "2021-3": "2021-03-01",
    "2021-": "2021-01-01",
    20210305: "2021-03-05",
    2021: "2021-01-01",
    "05": "2022-01-05",
    5: "2022-01-05",
    "05-03-2021": "2021-03-05",
    "05-03-21": "2021-03-05",

    "31.12.2021": "2021-12-31",
    "31.1.2021": "2021-01-31",
    "2.03.2021": "2021-03-02",
    "2.3.2021": "2021-03-02",
    "02.03.21": "2021-03-02",
    "2.03.21": "2021-03-02",
    "02.3.21": "2021-03-02",
    "2.3.21": "2021-03-02",

    "31/12/2021": "2021-12-31",
    "31/1/2021": "2021-01-31",
    "2/03/2021": "2021-03-02",
    "2/3/2021": "2021-03-02",
    "02/03/21": "2021-03-02",
    "2/03/21": "2021-03-02",
    "02/3/21": "2021-03-02",
    "2/3/21": "2021-03-02",

    "01. Dec 2021": "2021-12-01",
    "1. Dec 2021": "2021-12-01",
    "01. Dec 21": "2021-12-01",
    "1. Dec 21": "2021-12-01",
    "01. Dec": "2022-12-01",
    "1. Dec": "2022-12-01",

    "1. December": "2022-12-01",
    "1. December 21": "2021-12-01",
    "12. December": "2022-12-12",
    "01. December": "2022-12-01",

    "02.03.": "2022-03-02",

    "2.": "2022-01-02",
    "02.": "2022-01-02",
    "2.3.": "2022-03-02",
    "02.3.": "2022-03-02",

    "Aug 05, 2021": "2021-08-05",
    "Aug 05 2021": "2021-08-05",
    "Aug 5, 2021": "2021-08-05",
    "Aug 5 2021": "2021-08-05",
    "Aug 05, 21": "2021-08-05",
    "Aug 05 21": "2021-08-05",
    "Aug 5, 21": "2021-08-05",
    "Aug 5 21": "2021-08-05",
    "Aug 12": "2022-08-12",
    "Aug 05": "2022-08-05",
    "Aug 5": "2022-08-05",

    December: "2022-12-01",
    Dec: "2022-12-01"
  };

  for (const input in expected) {
    it(input + " should be " + expected[input], () => {
      const result = dayjs.interpret(input)?.toISO("date") || null;
      expect(result).toBe(expected[input]);
    });
  }
});

describe("dayjs.interpret(input, 'time')", () => {
  const expected = {
    "12:22:37": "12:22:37",
    "12:22": "12:22:00",
    "1:06": "01:06:00",
    "9:12:20": "09:12:20",
    12: "12:00:00",
    9: "09:00:00",
    "10:22:33 pm": "22:22:33",
    "10:22 am": "10:22:00",
    "5:00 am": "05:00:00",
    "5:12 pm": "17:12:00",
    "5 am": "05:00:00",
    "5 pm": "17:00:00"
  };

  for (const input in expected) {
    it(input + " should be " + expected[input], () => {
      const result = dayjs.interpret(input, "time")?.toISO("time") || null;
      expect(result).toBe(expected[input]);
    });
  }
});

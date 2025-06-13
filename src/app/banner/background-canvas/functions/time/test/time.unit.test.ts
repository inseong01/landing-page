import { describe, expect, test } from "@jest/globals";
import * as THREE from "three";
import {
  AFTERNOON,
  DAWN,
  EVENING,
  getCurrnetHourTimezone,
  MIDNIGHT,
  MORNING,
  NIGHT,
} from "../get-current-timezon";
import { setAmbientLightIntensity } from "../set-ambient-light-intensity";
import { setStarAmounts } from "../set-star-amounts";
import { setSunPosition } from "../set-sun-position";
import { setSunRayleigh } from "../set-sun-rayleigh";
import { setSunTurbidity } from "../set-sun-turbidity";

//  현재 시간대
const timezone_testCases = [
  { input: 0, output: "midnight" },
  { input: 3, output: "midnight" },
  { input: 4, output: "dawn" },
  { input: 7, output: "dawn" },
  { input: 8, output: "morning" },
  { input: 11, output: "morning" },
  { input: 12, output: "afternoon" },
  { input: 15, output: "afternoon" },
  { input: 16, output: "evening" },
  { input: 19, output: "evening" },
  { input: 20, output: "night" },
  { input: 23, output: "night" },
];

describe.each(timezone_testCases)(
  `Timezone unit test, input: $input (hour)`,
  (testValue) => {
    const { input, output } = testValue;

    test(`Expected: ${output}`, () => {
      const result = getCurrnetHourTimezone(input);
      expect(result).toBe(output);
    });
  },
);

// 엠비언트 조명 밝기 정도
const intensity_testCases = [
  { input: MIDNIGHT, output: 0.1 },
  { input: NIGHT, output: 0.1 },
  { input: DAWN, output: 1.3 },
  { input: EVENING, output: 1.3 },
  { input: MORNING, output: 4 }, // 기본값: 1 * amount(4)
  { input: AFTERNOON, output: 4 }, // 기본값: 1 * amount(4)
];

describe.each(intensity_testCases)(
  `Ambient intensity test, input: $input (timezone)`,
  (testValue) => {
    const { input, output } = testValue;

    test(`Expected: ${output}`, () => {
      const result = setAmbientLightIntensity(input);
      expect(result).toBeCloseTo(output);
    });
  },
);

// 별 개수
const stars_testCases = [
  { input: MIDNIGHT, output: 1000 },
  { input: NIGHT, output: 1000 },
  { input: DAWN, output: 300 },
  { input: EVENING, output: 300 },
  { input: MORNING, output: 0 },
  { input: AFTERNOON, output: 0 },
];

describe.each(stars_testCases)(
  `Star amounts test, input: $input (timezone)`,
  (testValue) => {
    const { input, output } = testValue;

    test(`Expected: ${output}`, () => {
      const result = setStarAmounts(input);
      expect(result).toBe(output);
    });
  },
);

// 해 위치 좌표
const position_testCases = [
  { input: MIDNIGHT, output: new THREE.Vector3(0, 0, 0) },
  { input: DAWN, output: new THREE.Vector3(3, 0.1, 0) },
  { input: MORNING, output: new THREE.Vector3(5, 3, 0) },
  { input: AFTERNOON, output: new THREE.Vector3(0, 3, 5) },
  { input: EVENING, output: new THREE.Vector3(-3, 0.1, 0) },
  { input: NIGHT, output: new THREE.Vector3(0, 0, 0) },
];

describe.each(position_testCases)(
  `Sun position test, input: $input (timezone)`,
  (testValue) => {
    const { input, output } = testValue;

    test(`Expected: ${output}`, () => {
      const result = setSunPosition(input);
      expect(result).toStrictEqual(output);
    });
  },
);

// 푸름 정도
const rayleigh_testCases = [
  { input: MIDNIGHT, output: 0 },
  { input: NIGHT, output: 0 },
  { input: DAWN, output: 0.5 },
  { input: EVENING, output: 0.5 },
  { input: MORNING, output: 1 },
  { input: AFTERNOON, output: 1 },
];

describe.each(rayleigh_testCases)(
  `Sun rayleigh test, input: $input (timezone)`,
  (testValue) => {
    const { input, output } = testValue;

    test(`Expected: ${output}`, () => {
      const result = setSunRayleigh(input);
      expect(result).toBeCloseTo(output);
    });
  },
);

// 대기 혼탁도
const turbidity_testCases = [
  { input: MIDNIGHT, output: 1 },
  { input: NIGHT, output: 1 },
  { input: MORNING, output: 1 },
  { input: AFTERNOON, output: 1 },
  { input: DAWN, output: 50 },
  { input: EVENING, output: 50 },
];

describe.each(turbidity_testCases)(
  `Sun turbidity test, input: $input (timezone)`,
  (testValue) => {
    const { input, output } = testValue;

    test(`Expected: ${output}`, () => {
      const result = setSunTurbidity(input);
      expect(result).toBe(output);
    });
  },
);

// 예외처리
const exception_testCases = [
  { input: "-100", output: "Timezone error, timezone is unavaliable" },
  { input: "100", output: "Timezone error, timezone is unavaliable" },
];

describe.each(exception_testCases)(
  `Exception test, input: $input (invaild)`,
  (testValue) => {
    const { input, output } = testValue;

    test(`Expected: ${output}`, () => {
      const result_1 = () => setSunTurbidity(input);
      expect(result_1).toThrow(output);

      const result_2 = () => setSunRayleigh(input);
      expect(result_2).toThrow(output);

      const result_3 = () => setSunPosition(input);
      expect(result_3).toThrow(output);

      const result_4 = () => setStarAmounts(input);
      expect(result_4).toThrow(output);

      const result_5 = () => setAmbientLightIntensity(input);
      expect(result_5).toThrow("Hour error, hour is unavaliable");

      const result_6 = () => getCurrnetHourTimezone(Number(input));
      expect(result_6).toThrow("Hour error, hour is unavaliable");
    });
  },
);

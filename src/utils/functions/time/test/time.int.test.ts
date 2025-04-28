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

const testResults = [
  {
    hour: 0,
    timezon: MIDNIGHT,
    intensity: 0.1,
    starAmounts: 1000,
    sunPosition: new THREE.Vector3(0, 0, 0),
    rayleigh: 0,
    turbidity: 1,
    error: "",
  },
  {
    hour: 4,
    timezon: DAWN,
    intensity: 1.3,
    starAmounts: 300,
    sunPosition: new THREE.Vector3(3, 0.1, 0),
    rayleigh: 0.5,
    turbidity: 50,
    error: "",
  },
  {
    hour: 8,
    timezon: MORNING,
    intensity: 4,
    starAmounts: 0,
    sunPosition: new THREE.Vector3(5, 3, 0),
    rayleigh: 1,
    turbidity: 1,
    error: "",
  },
  {
    hour: 12,
    timezon: AFTERNOON,
    intensity: 4,
    starAmounts: 0,
    sunPosition: new THREE.Vector3(0, 3, 5),
    rayleigh: 1,
    turbidity: 1,
    error: "",
  },
  {
    hour: 16,
    timezon: EVENING,
    intensity: 1.3,
    starAmounts: 300,
    sunPosition: new THREE.Vector3(-3, 0.1, 0),
    rayleigh: 0.5,
    turbidity: 50,
    error: "",
  },
  {
    hour: 20,
    timezon: NIGHT,
    intensity: 0.1,
    starAmounts: 1000,
    sunPosition: new THREE.Vector3(0, 0, 0),
    rayleigh: 0,
    turbidity: 1,
    error: "",
  },
  {
    hour: 24,
    timezon: "undefined",
    intensity: 0,
    starAmounts: 0,
    sunPosition: new THREE.Vector3(0),
    rayleigh: 0,
    turbidity: 0,
    error: "Hour error, hour is unavaliable",
  },
];

describe.each(testResults)("Time integration test, $hour:00", (testValue) => {
  test(`Boundary test - ${testValue.timezon}`, () => {
    if (testValue.hour >= 24) {
      const timezon = () => getCurrnetHourTimezone(testValue.hour);
      expect(timezon).toThrow(testValue.error);
      return;
    }

    const timezon = getCurrnetHourTimezone(testValue.hour);
    expect(timezon).toBe(testValue.timezon);

    const intensity = setAmbientLightIntensity(timezon);
    expect(intensity).toBeCloseTo(testValue.intensity);

    const starAmounts = setStarAmounts(timezon);
    expect(starAmounts).toBe(testValue.starAmounts);

    const sunPosition = setSunPosition(timezon);
    expect(sunPosition).toStrictEqual(testValue.sunPosition);

    const rayleigh = setSunRayleigh(timezon);
    expect(rayleigh).toBeCloseTo(testValue.rayleigh);

    const turbidity = setSunTurbidity(timezon);
    expect(turbidity).toBe(testValue.turbidity);
  });
});

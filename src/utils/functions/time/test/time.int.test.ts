import { describe, expect, test } from '@jest/globals';
import {
  AFTERNOON,
  DAWN,
  EVENING,
  getCurrnetHourTimezone,
  MIDNIGHT,
  MORNING,
  NIGHT,
} from '../get-current-timezon';
import { setAmbientLightIntensity } from '../set-ambient-light-intensity';
import { setStarAmounts } from '../set-star-amounts';
import { setSunPosition } from '../set-sun-position';
import { setSunRayleigh } from '../set-sun-rayleigh';
import { setSunTurbidity } from '../set-sun-turbidity';

const testResults = [
  {
    hour: 0,
    timezon: MIDNIGHT,
    intensity: 0.1,
    starAmounts: 1000,
    sunPosition: [0, 0, 0],
    rayleigh: 0,
    turbidity: 1,
  },
  {
    hour: 4,
    timezon: DAWN,
    intensity: 0.5,
    starAmounts: 300,
    sunPosition: [3, 0.1, 0],
    rayleigh: 0.5,
    turbidity: 50,
  },
  {
    hour: 8,
    timezon: MORNING,
    intensity: 4,
    starAmounts: 0,
    sunPosition: [5, 3, 0],
    rayleigh: 1,
    turbidity: 1,
  },
  {
    hour: 12,
    timezon: AFTERNOON,
    intensity: 4,
    starAmounts: 0,
    sunPosition: [0, 3, 5],
    rayleigh: 1,
    turbidity: 1,
  },
  {
    hour: 16,
    timezon: EVENING,
    intensity: 0.5,
    starAmounts: 300,
    sunPosition: [-3, 0.1, 0],
    rayleigh: 0.5,
    turbidity: 50,
  },
  {
    hour: 20,
    timezon: NIGHT,
    intensity: 0.1,
    starAmounts: 1000,
    sunPosition: [0, 0, 0],
    rayleigh: 0,
    turbidity: 1,
  },
  {
    hour: 24,
    timezon: NIGHT, // 0시와 동일한 상태
    intensity: 0.1,
    starAmounts: 1000,
    sunPosition: [0, 0, 0],
    rayleigh: 0,
    turbidity: 1,
  },
];

describe.each(testResults)('Time integration test, $hour:00', (testValue) => {
  test(`Boundary test - ${testValue.timezon}`, () => {
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

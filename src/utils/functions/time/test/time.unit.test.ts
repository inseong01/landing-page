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
import { ReactThreeFiber } from '@react-three/fiber';
import { setSunPosition } from '../set-sun-position';
import { setSunRayleigh } from '../set-sun-rayleigh';
import { setSunTurbidity } from '../set-sun-turbidity';

describe('Time unit test', () => {
  const timezon = [AFTERNOON, DAWN, EVENING, MIDNIGHT, MORNING, NIGHT];

  test('get-current-timezone', () => {
    for (let i = 0; i < 4; i++) {
      const result = getCurrnetHourTimezone(i);
      expect(result).toBe(MIDNIGHT);
    }
    for (let i = 4; i < 8; i++) {
      const result = getCurrnetHourTimezone(i);
      expect(result).toBe(DAWN);
    }
    for (let i = 8; i < 12; i++) {
      const result = getCurrnetHourTimezone(i);
      expect(result).toBe(MORNING);
    }
    for (let i = 12; i < 16; i++) {
      const result = getCurrnetHourTimezone(i);
      expect(result).toBe(AFTERNOON);
    }
    for (let i = 16; i < 20; i++) {
      const result = getCurrnetHourTimezone(i);
      expect(result).toBe(EVENING);
    }
    for (let i = 20; i < 25; i++) {
      const result = getCurrnetHourTimezone(i);
      expect(result).toBe(NIGHT);
    }
  });

  test('set-ambient-light-intensity', () => {
    for (const zone of timezon) {
      let value = 0;

      switch (zone) {
        case MIDNIGHT:
        case NIGHT: {
          value = 0.1;
          break;
        }
        case DAWN:
        case EVENING: {
          value = 0.5;
          break;
        }
        case MORNING:
        case AFTERNOON: {
          value = 4;
          break;
        }
      }

      const result = setAmbientLightIntensity(zone);
      expect(result).toBeCloseTo(value);
    }
  });

  test('set-star-amounts', () => {
    for (const zone of timezon) {
      let value = 0;

      switch (zone) {
        case MIDNIGHT:
        case NIGHT: {
          value = 1000;
          break;
        }
        case DAWN:
        case EVENING: {
          value = 300;
          break;
        }
        case MORNING:
        case AFTERNOON: {
          value = 0;
          break;
        }
      }

      const result = setStarAmounts(zone);
      expect(result).toBe(value);
    }
  });

  test('set-sun-position', () => {
    for (const zone of timezon) {
      let value: ReactThreeFiber.Vector3 = [0, 0, 0];

      switch (zone) {
        case MIDNIGHT: {
          value = [0, 0, 0];
          break;
        }
        case DAWN: {
          value = [3, 0.1, 0];
          break;
        }
        case MORNING: {
          value = [5, 3, 0];
          break;
        }
        case AFTERNOON: {
          value = [0, 3, 5];
          break;
        }
        case EVENING: {
          value = [-3, 0.1, 0];
          break;
        }
        case NIGHT: {
          value = [0, 0, 0];
          break;
        }
      }

      const result = setSunPosition(zone);
      expect(result).toStrictEqual(value);
    }
  });

  test('set-sun-rayleigh', () => {
    for (const zone of timezon) {
      let value: ReactThreeFiber.Vector3 = 0;

      switch (zone) {
        case MIDNIGHT:
        case NIGHT: {
          value = 0;
          break;
        }
        case DAWN:
        case EVENING: {
          value = 0.5;
          break;
        }
        case MORNING:
        case AFTERNOON: {
          value = 1;
          break;
        }
      }

      const result = setSunRayleigh(zone);
      expect(result).toBeCloseTo(value);
    }
  });

  test('set-sun-turbidity', () => {
    for (const zone of timezon) {
      let value: ReactThreeFiber.Vector3 = 0;

      switch (zone) {
        case MIDNIGHT:
        case NIGHT:
        case MORNING:
        case AFTERNOON: {
          value = 1;
          break;
        }
        case DAWN:
        case EVENING: {
          value = 50;
          break;
        }
      }

      const result = setSunTurbidity(zone);
      expect(result).toBe(value);
    }
  });
});

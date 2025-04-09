export const MIDNIGHT = 'midnight';
export const DAWN = 'dawn';
export const MORNING = 'morning';
export const AFTERNOON = 'afternoon';
export const EVENING = 'evening';
export const NIGHT = 'night';
export type TIMEZONE = 'midnight' | 'dawn' | 'morning' | 'afternoon' | 'evening' | 'night';

/**
 * midnight: 0\~4
 *
 * dawn: 4\~8
 *
 * morning: 8\~12
 *
 * afternoon: 12\~16
 *
 * evening: 16\~20
 *
 * night: 20\~24
 *
 * @param hour 현재 시간
 * @returns 현재 시간 범위
 */
export function getCurrnetHourTimezone(hour: number) {
  switch (true) {
    case 0 <= hour && hour < 4: {
      return MIDNIGHT;
    }
    case 4 <= hour && hour < 8: {
      return DAWN;
    }
    case 8 <= hour && hour < 12: {
      return MORNING;
    }
    case 12 <= hour && hour < 16: {
      return AFTERNOON;
    }
    case 16 <= hour && hour < 20: {
      return EVENING;
    }
    case 20 <= hour && hour < 25: {
      return NIGHT;
    }
    default: {
      throw new Error('Hour error, hour is unavaliable');
    }
  }
}

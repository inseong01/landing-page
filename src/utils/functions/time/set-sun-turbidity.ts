import { AFTERNOON, DAWN, EVENING, MIDNIGHT, MORNING, NIGHT } from './get-current-timezon';

/**
 * 대기 혼탁도 설정
 *
 * midnight/night/morning/afternnon: 1
 *
 * dawn/evening: 50
 *
 * @param timezone 현재 시간 범위
 * @returns 탁한 정도
 */
export function setSunTurbidity(timezone: string) {
  switch (timezone) {
    case MIDNIGHT:
    case NIGHT:
    case MORNING:
    case AFTERNOON: {
      return 1;
    }
    case DAWN:
    case EVENING: {
      return 50;
    }
    default: {
      throw new Error('Timezone error, timezone is unavaliable');
    }
  }
}

import { AFTERNOON, DAWN, EVENING, MIDNIGHT, MORNING, NIGHT } from './get-current-timezon';

/**
 * 별 개수 설정
 *
 * mid/night: 1000
 *
 * dawn/eveing: 500
 *
 * morning/afternoon: 0
 *
 * @param timezone 현재 시간 범위
 * @returns 별 개수
 */
export function setStarAmounts(timezone: string) {
  switch (timezone) {
    case MIDNIGHT:
    case NIGHT: {
      return 1000;
    }
    case DAWN:
    case EVENING: {
      return 300;
    }
    case MORNING:
    case AFTERNOON: {
      return 0;
    }
    default: {
      throw new Error('Timezone error, timezone is unavaliable');
    }
  }
}

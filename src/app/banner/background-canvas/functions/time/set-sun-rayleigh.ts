import { AFTERNOON, DAWN, EVENING, MIDNIGHT, MORNING, NIGHT } from './get-current-timezon';

/**
 * 대기 산란 설정
 *
 * midnight/night: 0
 *
 * dawn/evening: 0.5
 *
 * morning/afternnon: 1
 *
 * @param timezone 현재 시간 범위
 * @returns 푸름 색감 정도
 */
export function setSunRayleigh(timezone: string) {
  switch (timezone) {
    case MIDNIGHT:
    case NIGHT: {
      return 0;
    }
    case DAWN:
    case EVENING: {
      return 0.5;
    }
    case MORNING:
    case AFTERNOON: {
      return 1;
    }
    default: {
      throw new Error('Timezone error, timezone is unavaliable');
    }
  }
}

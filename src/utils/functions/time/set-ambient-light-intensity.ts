import { AFTERNOON, DAWN, EVENING, MIDNIGHT, MORNING, NIGHT } from './get-current-timezon';

/**
 * amount 수정하여 밝기 조정 가능
 *
 * 기본값
 *
 * night/midnight: 0
 *
 * dawn/eveing: 0.5
 *
 * morning/afternoon: 1
 *
 * @param timezone 현재 시간 범위
 * @returns 엠비언트 조명 밝기 정도
 */
export function setAmbientLightIntensity(timezone: string) {
  const amount = 4;
  switch (timezone) {
    case MIDNIGHT:
    case NIGHT: {
      return 0.1;
    }
    case DAWN:
    case EVENING: {
      return 0.5;
    }
    case MORNING:
    case AFTERNOON: {
      return 1 * amount;
    }
    default: {
      throw new Error('Hour error, hour is unavaliable');
    }
  }
}

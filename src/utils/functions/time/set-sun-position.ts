import { ReactThreeFiber } from '@react-three/fiber';
import { AFTERNOON, DAWN, EVENING, MIDNIGHT, MORNING, NIGHT } from './get-current-timezon';

/**
 * 해 위치 좌표 반환
 *
 * @param timezone 현재 시간 범위
 * @returns 해 위치 좌표
 */
export function setSunPosition(timezone: string): ReactThreeFiber.Vector3 {
  switch (timezone) {
    case MIDNIGHT: {
      return [0, 0, 0];
    }
    case DAWN: {
      return [3, 0.1, 0];
    }
    case MORNING: {
      return [5, 3, 0];
    }
    case AFTERNOON: {
      return [0, 3, 5];
    }
    case EVENING: {
      return [-3, 0.1, 0];
    }
    case NIGHT: {
      return [0, 0, 0];
    }
    default: {
      throw new Error('Timezone error, timezone is unavaliable');
    }
  }
}

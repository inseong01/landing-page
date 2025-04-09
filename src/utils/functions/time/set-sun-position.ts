import { AFTERNOON, DAWN, EVENING, MIDNIGHT, MORNING, NIGHT } from './get-current-timezon';
import * as THREE from 'three';

/**
 * 해 위치 좌표 반환
 *
 * @param timezone 현재 시간 범위
 * @returns 해 위치 좌표
 */
export function setSunPosition(timezone: string) {
  let result = [];

  switch (timezone) {
    case MIDNIGHT: {
      result = [0, 0, 0];
      break;
    }
    case DAWN: {
      result = [3, 0.1, 0];
      break;
    }
    case MORNING: {
      result = [5, 3, 0];
      break;
    }
    case AFTERNOON: {
      result = [0, 3, 5];
      break;
    }
    case EVENING: {
      result = [-3, 0.1, 0];
      break;
    }
    case NIGHT: {
      result = [0, 0, 0];
      break;
    }
    default: {
      throw new Error('Timezone error, timezone is unavaliable');
    }
  }

  return new THREE.Vector3(...result);
}

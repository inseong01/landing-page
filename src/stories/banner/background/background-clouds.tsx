import { Cloud, Clouds, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { setAmbientLightIntensity } from '../../../utils/functions/time/set-ambient-light-intensity';
import { TIMEZONE } from '../../../utils/functions/time/get-current-timezon';
import { setSunPosition } from '../../../utils/functions/time/set-sun-position';
import './background.css';

type SkyCloudsProps = {
  /** time based position of sun  */
  timezone: TIMEZONE;
  /** color of cloud */
  color?: string;
  /** distance between each cloud */
  bounds?: number;
  /** volume of cloud */
  volume?: number;
  /** pattern of cloud */
  seed?: number;
};

export function SkyClouds({
  timezone,
  color = '#fff',
  bounds = 500,
  volume = 500,
  seed = Math.random(),
}: SkyCloudsProps) {
  const intensity = setAmbientLightIntensity(timezone);
  const sunPosition = setSunPosition(timezone);
  const position = new THREE.Vector3(0, -150, 0);
  const fov = 50;
  const zoom = 1;

  return (
    <Canvas camera={{ position, fov, zoom }}>
      <BackgroundClouds color={color} bounds={bounds} volume={volume} seed={seed} />
      <ambientLight intensity={intensity} />
      <Sky sunPosition={sunPosition} />
    </Canvas>
  );
}

function BackgroundClouds({ color, bounds, volume, seed }: Omit<SkyCloudsProps, 'timezone'>) {
  return (
    <Clouds material={THREE.MeshStandardMaterial} range={50}>
      <Cloud
        concentrate="inside"
        opacity={1}
        color={color}
        bounds={bounds}
        volume={volume}
        seed={seed}
      />
    </Clouds>
  );
}

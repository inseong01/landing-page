import { Canvas } from '@react-three/fiber';
import { TimezoneContext } from '../../../context/context-current-time';
import { TIMEZONE } from '../../../utils/functions/time/get-current-timezon';
import { setAmbientLightIntensity } from '../../../utils/functions/time/set-ambient-light-intensity';
import { Center } from '@react-three/drei';
import MiddleText from '../../../app/banner/background/background-text';
import BackgroundGroup from '../../../app/banner/background/background-group';
import './background.css';

type GroupProps = {
  /** time based position of sun */
  timezone: TIMEZONE;
};

export function BannerBackground({ timezone }: GroupProps) {
  const intensity = setAmbientLightIntensity(timezone);

  return (
    <TimezoneContext.Provider value={timezone}>
      <Canvas shadows camera={{ position: [0, -150, 0], fov: 50, zoom: 1 }}>
        <FrontContent />
        <BackContent />
        <ambientLight intensity={intensity} />
      </Canvas>
    </TimezoneContext.Provider>
  );
}

function FrontContent() {
  return (
    <Center rotation={[-80, 0, 0]}>
      <MiddleText />
    </Center>
  );
}

function BackContent() {
  return (
    <Center>
      <BackgroundGroup />
    </Center>
  );
}

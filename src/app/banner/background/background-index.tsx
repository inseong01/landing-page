import { Center } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useMemo, useState } from 'react';
import BackgroundClouds from './background-clouds';
import BackgroundMiddleText from './background-text';
import { TimezoneContext } from '../../../context/context-current-time';
import { getCurrnetHourTimezone } from '../../../utils/functions/time/get-current-timezon';
import { setAmbientLightIntensity } from '../../../utils/functions/time/set-ambient-light-intensity';

export default function BannerBackground() {
  const currentHour = new Date().getHours();
  const [hourTrigger, setHourTrigger] = useState(currentHour);
  const currentTimezone = useMemo(() => getCurrnetHourTimezone(currentHour), [hourTrigger]);

  function triggerFn() {
    const updateHour = new Date().getHours();
    setHourTrigger(updateHour);
  }

  useEffect(() => {
    const interval = setInterval(triggerFn, 60000);
    return () => clearInterval(interval);
  }, []);

  const intensity = setAmbientLightIntensity(currentTimezone);

  return (
    <TimezoneContext.Provider value={currentTimezone}>
      <Canvas shadows camera={{ position: [0, -150, 0], fov: 50, zoom: 1 }}>
        <FrontContent />
        <BackContent />
        <ambientLight intensity={intensity} />
        {/* <OrbitControls /> */}
      </Canvas>
    </TimezoneContext.Provider>
  );
}

function FrontContent() {
  return (
    <Center rotation={[-80, 0, 0]}>
      <BackgroundMiddleText />
    </Center>
  );
}

function BackContent() {
  return (
    <Center>
      <BackgroundClouds />
    </Center>
  );
}

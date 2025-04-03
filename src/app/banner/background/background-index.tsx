import { Center, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useState } from 'react';
import BackgroundClouds from './background-clouds';
import BackgroundMiddleText from './background-text';
import { TimezoneContext } from '../../../context/context-current-time';
import { getCurrnetHourTimezone } from '../../../utils/functions/time/get-current-timezon';
import { setAmbientLightIntensity } from '../../../utils/functions/time/set-ambient-light-intensity';

export default function BannerBackground() {
  const [hourTrigger, setHourTrigger] = useState(false);
  const currentHour = useMemo(() => new Date().getHours(), [hourTrigger]);
  const currentTimezone = useMemo(() => getCurrnetHourTimezone(currentHour), [hourTrigger]);

  function triggerFn() {
    setHourTrigger((prev) => !prev);
  }

  useEffect(() => {
    const interval = setInterval(triggerFn, 30000);
    return () => clearInterval(interval);
  }, []);

  const intensity = setAmbientLightIntensity(currentTimezone);

  return (
    <TimezoneContext.Provider value={currentTimezone}>
      <Canvas shadows camera={{ position: [0, -150, 0], fov: 50, zoom: 1 }}>
        <Suspense fallback={null}>
          <Center rotation={[-80, 0, 0]}>
            <BackgroundMiddleText />
          </Center>
        </Suspense>
        <Center>
          <BackgroundClouds />
        </Center>
        <ambientLight intensity={intensity} />
        <OrbitControls />
      </Canvas>
    </TimezoneContext.Provider>
  );
}

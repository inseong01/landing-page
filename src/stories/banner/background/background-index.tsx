import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";

import { TIMEZONE } from "../../../utils/functions/time/get-current-timezon";
import { TimezoneContext } from "../../../context/context-current-time";
import { setAmbientLightIntensity } from "../../../utils/functions/time/set-ambient-light-intensity";
import SunComp from "./components/component-sun";
import StarsComp from "./components/component-stars";
import CloudsComp from "./components/component-clouds";
import TitleComp from "./components/component-title";
import StoryBookViewFrame from "./components/component-frame";
import "./background.css";

type GroupProps = {
  /** time based position of sun */
  timezone: TIMEZONE;
};

export function BannerBackground({ timezone }: GroupProps) {
  const intensity = setAmbientLightIntensity(timezone);

  return (
    <TimezoneContext.Provider value={timezone}>
      <StoryBookViewFrame>
        <TitleComp />
        <BannerCanvas intensity={intensity} />
      </StoryBookViewFrame>
    </TimezoneContext.Provider>
  );
}

function BannerCanvas({ intensity }: { intensity: number }) {
  return (
    <Canvas shadows camera={{ position: [0, -150, 0], fov: 50, zoom: 1 }}>
      <Center>
        <SunComp isManualMode={false} />
        <StarsComp isManualMode={false} />
        <CloudsComp isManualMode={false} seed={Math.random()} />
      </Center>
      <ambientLight intensity={intensity} />
    </Canvas>
  );
}

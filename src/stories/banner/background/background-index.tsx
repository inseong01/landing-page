import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";

import { TIMEZONE } from "../../../app/banner/background-canvas/functions/time/get-current-timezon";
import { TimezoneContext } from "../../../app/banner/context";
import { setAmbientLightIntensity } from "../../../app/banner/background-canvas/functions/time/set-ambient-light-intensity";

import "./background.css";
import SunComp from "./components/component-sun";
import StarsComp from "./components/component-stars";
import CloudsComp from "./components/component-clouds";
import DvhScreenComp from "./components/component-dvh";
import StoryBookViewFrame from "./components/component-frame";

type GroupProps = {
  /** time based position of sun */
  timezone: TIMEZONE;
};

export function BannerBackground({ timezone }: GroupProps) {
  const intensity = setAmbientLightIntensity(timezone);

  return (
    <TimezoneContext.Provider value={timezone}>
      <StoryBookViewFrame>
        <DvhScreenComp />
        <BannerBackgroundCanvas intensity={intensity} />
      </StoryBookViewFrame>
    </TimezoneContext.Provider>
  );
}

function BannerBackgroundCanvas({ intensity }: { intensity: number }) {
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

import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { useContext } from "react";
import { TimezoneContext } from "../../../../context/context-current-time";
import { setAmbientLightIntensity } from "../../../../utils/functions/time/set-ambient-light-intensity";
import CanvasElementsGroup from "./canvas-group";

export default function BannerCanvas() {
  return (
    <Canvas shadows camera={{ position: [0, -150, 0], fov: 50, zoom: 1 }}>
      <InsideCanvasComp />
    </Canvas>
  );
}

function InsideCanvasComp() {
  const currentTimezone = useContext(TimezoneContext);
  const intensity = setAmbientLightIntensity(currentTimezone);

  return (
    <>
      <Center>
        <CanvasElementsGroup />
      </Center>
      <ambientLight intensity={intensity} />
      {/* <OrbitControls /> */}
    </>
  );
}

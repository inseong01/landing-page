import { useEffect, useState } from "react";

import { getCurrnetHourTimezone } from "../../../utils/functions/time/get-current-timezon";

import { TimezoneContext } from "../../../context/context";

import BannerCanvas from "./canvas/canvas-index";
import BannerDvhSize from "./dvh/dvh-index";

export default function BannerBackground() {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [isCanvasMounted, setCanvasMount] = useState(false);

  const currentTimezone = getCurrnetHourTimezone(currentHour);

  function triggerFn() {
    const updateHour = new Date().getHours();
    setCurrentHour(updateHour);
  }

  useEffect(() => {
    const interval = setInterval(triggerFn, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <TimezoneContext.Provider value={currentTimezone}>
      <section className="relative h-[130vh] cursor-default xl:h-[200vh]">
        {/* 전경 */}
        {isCanvasMounted && <BannerDvhSize />}

        {/* 후경 */}
        <BannerCanvas setCanvasMount={setCanvasMount} />
      </section>
    </TimezoneContext.Provider>
  );
}

import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";

import { canvasMountAtom } from "../../utils/store/atoms";

import { TimezoneContext } from "./context";
import { getCurrnetHourTimezone } from "./background-canvas/functions/time/get-current-timezon";

import BannerForeground from "./foreground/foreground-index";
import BannerBackgroundCanvas from "./background-canvas/canvas-index";

const currentHour = new Date().getHours();
const initTimezone = getCurrnetHourTimezone(currentHour);

export default function BannerSection() {
  const [currentTimezone, setTimezone] = useState(initTimezone);

  const isCanvasMounted = useAtomValue(canvasMountAtom);

  useEffect(() => {
    function triggerFn() {
      const updateHour = new Date().getHours();
      setTimezone(getCurrnetHourTimezone(updateHour));
      setTimeout(triggerFn, 1000);
    }

    const timeout = setTimeout(triggerFn, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <TimezoneContext.Provider value={currentTimezone}>
      <section
        className={`${isCanvasMounted ? "animate-fadeIn" : "opacity-0"} relative h-[130vh] cursor-default xl:h-[200vh]`}
      >
        {/* 전경 */}
        {isCanvasMounted && <BannerForeground />}

        {/* 배경 */}
        <BannerBackgroundCanvas />
      </section>
    </TimezoneContext.Provider>
  );
}

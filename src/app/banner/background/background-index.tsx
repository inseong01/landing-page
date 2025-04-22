import { useEffect, useMemo, useState } from "react";
import { TimezoneContext } from "../../../context/context-current-time";
import { getCurrnetHourTimezone } from "../../../utils/functions/time/get-current-timezon";
import BannerCanvas from "./canvas/canvas-index";
import BannerDvhSize from "./dvh/dvh-index";

export default function BannerBackground() {
  const currentHour = new Date().getHours();
  const [hourTrigger, setHourTrigger] = useState(currentHour);
  const currentTimezone = useMemo(
    () => getCurrnetHourTimezone(currentHour),
    [hourTrigger],
  );

  function triggerFn() {
    const updateHour = new Date().getHours();
    setHourTrigger(updateHour);
  }

  useEffect(() => {
    const interval = setInterval(triggerFn, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TimezoneContext.Provider value={currentTimezone}>
      <section className="relative h-[200vh] cursor-default">
        <BannerDvhSize />
        <BannerCanvas />
      </section>
    </TimezoneContext.Provider>
  );
}

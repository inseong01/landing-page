import { createContext } from "react";

import { getCurrnetHourTimezone } from "./background-canvas/functions/time/get-current-timezon";

const hour = new Date().getHours();
const currentTimezone = getCurrnetHourTimezone(hour);

export const TimezoneContext = createContext(currentTimezone);

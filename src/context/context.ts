import { createContext, Dispatch, SetStateAction } from "react";

import { CurrentTimezone } from "../utils/types/common-type";
import { getCurrnetHourTimezone } from "../utils/functions/time/get-current-timezon";

/* timezone */
const hour = new Date().getHours();
const currentTimezone: CurrentTimezone = getCurrnetHourTimezone(hour);
export const TimezoneContext = createContext(currentTimezone);

/* category */
export const CategoryContext = createContext(0);
export const SetCategoryContext = createContext<
  Dispatch<SetStateAction<number>>
>(() => {});

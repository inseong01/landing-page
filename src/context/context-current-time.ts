import { createContext } from 'react';
import { getCurrnetHourTimezone } from '../utils/functions/time/get-current-timezon';
import { CurrentTimezone } from '../utils/types/common-type';

const hour = new Date().getHours();
const currentTimezone: CurrentTimezone = getCurrnetHourTimezone(hour);

export const TimezoneContext = createContext(currentTimezone);

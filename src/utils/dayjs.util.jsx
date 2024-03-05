import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(isBetween);
dayjs.extend(advancedFormat);

export const shortDateFormatter = (dateStr) => dayjs(dateStr).format("Do MMM, YYYY");

export const secondsToHms = (total) => {
  total = Number(total);
  const seconds = ("0" + Math.floor((total / 1000) % 60)).slice(-2);
  const minutes = ("0" + Math.floor((total / 1000 / 60) % 60)).slice(-2);
  const hours = ("0" + Math.floor(total / (1000 * 60 * 60))).slice(-2);
  //const days = Math.floor( total/(1000*60*60*24) );

  return hours + ":" + minutes + ":" + seconds;
};

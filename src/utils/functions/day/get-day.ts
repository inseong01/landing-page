/**
 * 오늘 요일 반환
 */
export function getDay(todayIdx: number) {
  const dayArr_en = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return dayArr_en[todayIdx];
}

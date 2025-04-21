import { getDay } from "../../../../utils/functions/day/get-day";
import DownMotionNav from "./dvh-nav";

export default function BannerDvhSize() {
  const dayIdx = new Date().getDay();
  const today = getDay(dayIdx);

  return (
    <div className="absolute top-0 left-0 z-9 flex h-dvh w-full items-center justify-between px-24 font-bold text-white">
      <div className="left">
        <h1 className="mb-2 text-7xl">Today is</h1>
        <h2 className="mb-20 text-9xl capitalize">{today}.</h2>
        <p className="font-normal tracking-widest">Designed by Inseong</p>
      </div>
      <div className="right">
        <span></span>
      </div>
      <DownMotionNav />
    </div>
  );
}

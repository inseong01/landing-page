import { getDay } from "../../../../utils/functions/day/get-day";
import DownMotionNav from "./dvh-nav";

export default function BannerDvhSize() {
  const dayIdx = new Date().getDay();
  const today = getDay(dayIdx);

  return (
    <div className="absolute top-0 left-0 z-9 flex h-dvh w-full items-center justify-between px-4 font-bold text-white lg:px-10">
      <div className="left">
        <h1 className="mb-2 text-5xl max-[576px]:text-3xl lg:text-7xl">
          Today is
        </h1>
        <h2 className="mb-10 text-7xl capitalize max-[576px]:text-5xl lg:text-9xl xl:mb-20">
          {today}.
        </h2>
        <p className="text-lg font-normal tracking-widest max-[576px]:text-sm">
          Designed by Inseong
        </p>
      </div>
      <div className="right">
        <span></span>
      </div>
      <DownMotionNav />
    </div>
  );
}

import { useContext } from "react";
import { TimezoneContext } from "../../../../context/context-current-time";

export default function DvhScreenComp() {
  return (
    <div className="absolute top-0 left-0 z-9 flex h-full w-full items-center justify-between px-12 font-bold text-white">
      <div className="left">
        <h1 className="text-8xl">Today is</h1>
        <h2 className="mb-14 text-8xl capitalize">wednesday.</h2>
        <p className="font-normal tracking-widest">Designed by Inseong</p>
      </div>
      <div className="right">
        <span></span>
      </div>
      <DownMotionNav />
    </div>
  );
}

function DownMotionNav() {
  const timezone = useContext(TimezoneContext);
  const isDarkness = timezone === "night" || timezone === "midnight";
  const bgColor = isDarkness ? "border-[#ffffffb0]" : "border-[#2222225e]";

  return (
    <div
      className={`absolute bottom-10 left-1/2 flex h-10 w-10 items-center justify-center p-2 motion-safe:animate-bounce`}
    >
      <div
        className={`flex h-full w-full rotate-225 items-center justify-center border-t-3 border-l-3 ${bgColor}`}
      ></div>
    </div>
  );
}

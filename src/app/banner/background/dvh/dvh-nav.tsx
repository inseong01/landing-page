import { useContext, useEffect, useState } from "react";
import { TimezoneContext } from "../../../../context/context-current-time";

export default function DownMotionNav() {
  const [isOn, setOn] = useState(true);
  const timezone = useContext(TimezoneContext);
  const isDarkness = timezone === "night" || timezone === "midnight";
  const bgColor = isDarkness ? "border-[#ffffffb0]" : "border-[#2222225e]";

  useEffect(() => {
    const scrollAnimation = () => {
      const scrollTop = window.scrollY;
      if (scrollTop < 400) {
        setOn(true);
      } else {
        setOn(false);
      }
    };

    window.addEventListener("scroll", scrollAnimation);

    return () => window.removeEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <div
      className={`absolute bottom-10 left-1/2 flex h-10 w-10 items-center justify-center p-2 motion-safe:animate-bounce ${isOn ? "opacity-100" : "opacity-0"} duration-500`}
    >
      <div
        className={`flex h-full w-full rotate-225 items-center justify-center border-t-2 border-l-2 ${bgColor}`}
      ></div>
    </div>
  );
}

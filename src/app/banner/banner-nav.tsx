import { useEffect, useState } from "react";

export default function DownMotionNav() {
  const [isOn, setOn] = useState(true);

  const bgColor = "border-[#ffffffb0]";

  useEffect(() => {
    const scrollAnimation = () => {
      const scrollTop = window.scrollY;
      if (scrollTop < 100) {
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
      className={`absolute bottom-10 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center p-2 motion-safe:animate-bounce ${isOn ? "opacity-100" : "opacity-0"} duration-500`}
    >
      <div
        className={`flex h-full w-full rotate-225 items-center justify-center border-t-2 border-l-2 ${bgColor}`}
      ></div>
    </div>
  );
}

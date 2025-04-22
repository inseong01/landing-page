import { AnimatePresence, motion } from "motion/react";

export default function CategoryMovingBG({
  text,
  idx,
  clickedIdx,
}: {
  text: string;
  idx: number;
  clickedIdx: number;
}) {
  return (
    <AnimatePresence>
      {clickedIdx === idx && (
        <motion.div
          key={text}
          layoutId="category_bar"
          className="absolute top-0 left-0 -z-9 h-full w-full bg-[#5A80A5] opacity-100"
        ></motion.div>
      )}
    </AnimatePresence>
  );
}

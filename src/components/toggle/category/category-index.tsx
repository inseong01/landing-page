import { useAtomValue, useSetAtom } from "jotai";

import CategoryMovingBG from "./category-bg";
import { categoryIdxAtom } from "./store/atom";

type CategoryTransitionProps = { list: string[] };

export default function CategoryTransition({ list }: CategoryTransitionProps) {
  const clickedIdx = useAtomValue(categoryIdxAtom);
  const setClickedIdx = useSetAtom(categoryIdxAtom);

  return (
    <nav className="bg-[#F5F5F5]">
      {/* 카테고리 목록 */}
      <ul className="m-auto flex h-auto w-full max-w-[1000px] items-center justify-center gap-5 rounded-4xl px-10 text-[#5A80A5]">
        {list.map((text, idx) => (
          <li
            key={idx}
            className={`relative flex h-full w-[50%] items-center justify-center rounded-4xl text-xl max-[576px]:text-sm ${clickedIdx === idx ? "text-white" : "text-[#5A80A5]"} z-9 overflow-hidden bg-transparent shadow-[0_0_15px_rgba(0,0,0,0.15)] duration-300`}
          >
            {/* 카테고리 이름 */}
            <button
              type="button"
              className="h-full w-full cursor-pointer py-3 max-[576px]:py-1.5"
              onClick={() => setClickedIdx(idx)}
            >
              {text}
            </button>

            {/* 카테고리 전환 배경 애니메이션 */}
            <CategoryMovingBG text={text} idx={idx} clickedIdx={clickedIdx} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

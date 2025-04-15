import { useContext } from "react";
import { CategoryContext, SetCategoryContext } from "../../../App";

export default function CategoryTransition() {
  return (
    <nav className="bg-[#F5F5F5]">
      <ul className="m-auto flex h-15 w-[1000px] items-center justify-center gap-5 text-[#5A80A5]">
        <CategoryBox />
      </ul>
    </nav>
  );
}

function CategoryBox() {
  const setClickedIdx = useContext(SetCategoryContext);
  const clickedIdx = useContext(CategoryContext);
  const arr = ["매장 관리", "주문"];
  return (
    <>
      {arr.map((text, idx) => (
        <Category
          key={idx}
          text={text}
          idx={idx}
          clickedIdx={clickedIdx}
          setClickedIdx={setClickedIdx}
        />
      ))}
    </>
  );
}

function Category({
  text,
  idx,
  clickedIdx,
  setClickedIdx,
}: {
  text: string;
  idx: number;
  clickedIdx: number;
  setClickedIdx: (idx: number) => void;
}) {
  const onClickToSetIdx = () => setClickedIdx(idx);

  return (
    <li
      className={`flex h-full w-[50%] items-center justify-center rounded-4xl text-xl ${clickedIdx === idx ? "bg-[#5A80A5] text-white" : "bg-transparent"} border-2 border-[#5A80A5]`}
    >
      <button type="button" className="h-full w-full" onClick={onClickToSetIdx}>
        {text}
      </button>
    </li>
  );
}

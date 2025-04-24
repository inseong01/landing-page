import { useContext } from "react";
import {
  CategoryContext,
  SetCategoryContext,
} from "../../../../../context/context-project-sub-category";
import Category from "./category-item";

type CategoryTransitionProps = { list: string[] };

export default function CategoryTransition({ list }: CategoryTransitionProps) {
  return (
    <nav className="bg-[#F5F5F5]">
      <ul className="m-auto flex h-auto w-full items-center justify-center gap-5 rounded-4xl px-16 text-[#5A80A5] max-[576px]:px-4 xl:w-[1000px] xl:px-24">
        <CategoryBox list={list} />
      </ul>
    </nav>
  );
}

function CategoryBox({ list }: CategoryTransitionProps) {
  const setClickedIdx = useContext(SetCategoryContext);
  const clickedIdx = useContext(CategoryContext);

  return (
    <>
      {list.map((text, idx) => (
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

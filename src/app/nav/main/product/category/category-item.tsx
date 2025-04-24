import CategoryMovingBG from "./category-bg";

export default function Category({
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
      className={`relative flex h-full w-[50%] items-center justify-center rounded-4xl py-3 text-xl max-[576px]:py-1.5 max-[576px]:text-sm ${clickedIdx === idx ? "text-white" : "text-[#5A80A5]"} z-9 overflow-hidden bg-transparent shadow-[0_0px_15px_rgba(0,0,0,0.15)] duration-300`}
    >
      <button
        type="button"
        className="h-full w-full cursor-pointer"
        onClick={onClickToSetIdx}
      >
        {text}
      </button>
      <CategoryMovingBG text={text} idx={idx} clickedIdx={clickedIdx} />
    </li>
  );
}

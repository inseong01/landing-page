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
      className={`flex h-full w-[50%] items-center justify-center rounded-4xl text-xl ${clickedIdx === idx ? "bg-[#5A80A5] text-white" : "bg-transparent"} border-2 border-[#5A80A5]`}
    >
      <button
        type="button"
        className="h-full w-full cursor-pointer"
        onClick={onClickToSetIdx}
      >
        {text}
      </button>
    </li>
  );
}

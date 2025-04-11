import { useState } from "react";

export default function CategoryList() {
  const [isClickedIdx, setClickIdx] = useState(0);
  const listArr = ["서비스", "메뉴", "좌석", "주문"];

  return (
    <>
      {listArr.map((value, idx) => (
        <List
          value={value}
          isClicked={isClickedIdx === idx}
          onClick={() => setClickIdx(idx)}
        />
      ))}
    </>
  );
}

function List({
  value,
  isClicked,
  onClick,
}: {
  value: string;
  isClicked: boolean;
  onClick: () => void;
}) {
  const notClickedStyles = "text-[#5A80A5] bg-white";
  const clickedStyles = "text-white bg-[#5A80A5]";
  const styles = isClicked ? clickedStyles : notClickedStyles;

  return (
    <li
      className={`flex items-center justify-center rounded-2xl px-8 leading-7 ${styles}`}
      onClick={onClick}
    >
      <span>{value}</span>
    </li>
  );
}

/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";

import { SetIconClickContext } from "../../util/context/global";

export default function ChatHeader({
  chatroomTitle = "환영합니다",
  opponentType,
  opponentStatus,
}: {
  chatroomTitle?: string;
  opponentType: string;
  opponentStatus: string;
}) {
  const setIconClick = useContext(SetIconClickContext);

  /* 닫기 */
  function onClickHeaderCloseIcon() {
    if (!setIconClick) {
      alert("채팅을 닫는 중 예기치 못한 오류가 발생했습니다.");
      return;
    }

    setIconClick((prev: boolean) => !prev);
  }

  return (
    <div className="relative box-border flex min-h-[63px] w-full items-center justify-center border-b-[1px] border-[#ddd] pt-3 pr-2 pb-3 pl-2">
      {/* 제목 */}
      <div className="flex cursor-default flex-col items-center gap-2">
        <span className="max-w-[130px] overflow-x-hidden text-center text-base text-ellipsis whitespace-nowrap">
          {chatroomTitle}
        </span>
        <span className="text-xs leading-3 text-[#7c7c7c]">
          현재 {opponentType}는 {opponentStatus}입니다.
        </span>
      </div>

      {/* 닫기 아이콘 */}
      <button
        className="absolute right-3 flex cursor-pointer"
        type="button"
        role="button"
        title="닫기"
        aria-label="채팅창 닫기"
        onClick={onClickHeaderCloseIcon}
      >
        <img src="/feature/chat/icon-close.svg" alt="닫기" />
      </button>
    </div>
  );
}
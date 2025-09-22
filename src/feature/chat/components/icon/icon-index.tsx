/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";

import { SetIconClickContext } from "../../util/context/global";

export default function ChattingAppIcon({
  hasMsgAlert,
}: {
  hasMsgAlert: boolean;
}) {
  const setIconClick = useContext(SetIconClickContext);

  function onClicAppIcon() {
    if (!setIconClick) {
      alert("채팅 실행 중 예기치 못한 오류가 발생했습니다.");
      return;
    }

    setIconClick((prev: boolean) => !prev);
  }

  return (
    <button
      type="button"
      className="animate-fadeIn fixed right-[30px] bottom-[30px] z-999 flex cursor-pointer items-center justify-center rounded-full border-none bg-transparent p-0 shadow-[0_0_15px_rgb(0,0,0,0.25)]"
      onClick={onClicAppIcon}
      aria-label="채팅 아이콘"
    >
      {/* 메시지 수신 표시 */}
      {hasMsgAlert && (
        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-[#e83939]"></span>
      )}

      {/* 위젯 아이콘 */}
      <img src="/feature/chat/icon-float.svg" alt="채팅 아이콘" />
    </button>
  );
}
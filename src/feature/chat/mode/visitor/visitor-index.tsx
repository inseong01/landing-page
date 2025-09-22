import { useSetAtom } from "jotai";
import { useContext, useEffect } from "react";

import { UserIDContextContext } from "../../util/context/global";
import { reconnectionAtom } from "../../util/store/atom";

import { VisitorDispatchContext, VisitorReducerStateContext } from "./context";

import ChatHeader from "../../components/header/heaer-index";
import ChatFooter from "../../components/footer/footer-index";
import ChatBody from "../../components/body/body-index";

export default function ChatRoomDisplay() {
  const { adminStatus } = useContext(VisitorReducerStateContext);
  const visitorState = useContext(VisitorReducerStateContext);
  const reducer = useContext(VisitorDispatchContext);
  const USER_ID = useContext(UserIDContextContext);
  const toggleReconnection = useSetAtom(reconnectionAtom);

  /* 윈도우 포커스 여부 */
  useEffect(() => {
    if (!reducer) return;
    reducer({ type: "READ_MESSAGE" });

    function readMessagesIfVisible() {
      if (!reducer) return;
      if (document.visibilityState === "visible") {
        reducer({ type: "READ_MESSAGE" });
        toggleReconnection((prev) => !prev);
      }
    }

    window.addEventListener("visibilitychange", readMessagesIfVisible);

    return () => {
      window.removeEventListener("visibilitychange", readMessagesIfVisible);
    };
  }, [reducer, toggleReconnection]);

  const isOnline = adminStatus.isOnline;
  const isTyping = adminStatus.isTyping;
  const statusString = isOnline ? "온라인" : "오프라인";

  return (
    <div className="fixed right-[30px] bottom-25 z-999 flex h-1/2 w-75 flex-col justify-between rounded-[26px] border-[1px] border-[#ddd] bg-white shadow-[0_0_15px_rgb(0,0,0,0.25)]">
      {/* 헤더 */}
      <ChatHeader opponentType="상담사" opponentStatus={statusString} />

      {/* 메인 */}
      <ChatBody messages={visitorState.messages} isOpponentTyping={isTyping} />

      {/* 푸터 */}
      <ChatFooter
        id={USER_ID}
        receiver_id="admin"
        isOpponentOnline={isOnline}
      />
    </div>
  );
}

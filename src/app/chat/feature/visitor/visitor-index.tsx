import { useContext, useEffect } from "react";

import { type MessageMetaData } from "../../util/const/const";
import { UserIDContextContext } from "../../util/context/global";

import { VisitorDispatchContext, VisitorReducerStateContext } from "./context";

import ChatHeader from "../../components/chat/header/heaer-index";
import ChatFooter from "../../components/chat/footer/footer-index";
import ChatBody from "../../components/chat/body/body-index";

export default function VisitorChatMode() {
  const state = useContext(VisitorReducerStateContext);

  return (
    <>
      {/* 채팅방 */}
      <ChatRoomDisplay messages={state.messages} />
    </>
  );
}

function ChatRoomDisplay({ messages }: { messages: MessageMetaData[] }) {
  const { adminStatus } = useContext(VisitorReducerStateContext);
  const reducer = useContext(VisitorDispatchContext);
  const USER_ID = useContext(UserIDContextContext);

  /* 윈도우 포커스 여부 */
  useEffect(() => {
    if (!reducer) return;
    reducer({ type: "READ_MESSAGE" });

    function readMessagesIfVisible() {
      if (!reducer) return;
      if (document.visibilityState === "visible") {
        reducer({ type: "READ_MESSAGE" });
      }
    }

    window.addEventListener("visibilitychange", readMessagesIfVisible);

    return () => {
      window.removeEventListener("visibilitychange", readMessagesIfVisible);
    };
  }, [reducer]);

  const isOnline = adminStatus.isOnline;
  const isTyping = adminStatus.isTyping;
  const statusString = isOnline ? "온라인" : "오프라인";

  return (
    <div className="fixed right-[30px] bottom-25 z-999 flex h-1/2 w-75 flex-col justify-between rounded-[26px] border-[1px] border-[#ddd] bg-white shadow-[0_0_15px_rgb(0,0,0,0.25)]">
      {/* 헤더 */}
      <ChatHeader opponentType="상담사" opponentStatus={statusString} />

      {/* 메인 */}
      <ChatBody messages={messages} isOpponentTyping={isTyping} />

      {/* 푸터 */}
      <ChatFooter
        id={USER_ID}
        receiver_id="admin"
        isOpponentOnline={isOnline}
      />
    </div>
  );
}

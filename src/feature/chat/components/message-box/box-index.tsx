import { type ReactNode } from "react";

export default function MessageBox({
  writer,
  children,
}: {
  writer: string;
  children: ReactNode | string;
}) {
  return (
    <div
      className={
        writer === "self"
          ? "flex items-end justify-end gap-2"
          : "flex items-end justify-start gap-2"
      }
    >
      {/* 프로필 사진 */}
      {writer !== "self" && (
        <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
          <img src="/feature/chat/assets/icon-profile.svg" alt="상대 프로필" />
        </div>
      )}

      {/* 메시지 */}
      <div
        className={`mt-1 mb-1 box-border inline-block max-w-[170px] overflow-hidden rounded-xl border-[1px] border-[#e6e6e6] p-3 pt-1 pb-1 text-sm leading-5 break-all ${writer === "self" ? "rounded-tr-none border-[#336cb5] bg-[#336cb5] text-white" : "rounded-bl-none bg-[#e6e6e6]"}`}
      >
        {children}
      </div>
    </div>
  );
}

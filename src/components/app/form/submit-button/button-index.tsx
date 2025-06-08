import { MouseEvent } from "react";

export default function SubmitButton({
  disabled,
  onClick,
  text,
}: {
  disabled: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  text: string;
}) {
  return (
    <button
      type="submit"
      className="flex-1 cursor-pointer rounded-sm border-[1px] border-[#5A80A5] bg-[#5A80A5] p-4 text-sm text-white hover:bg-[#486684]"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

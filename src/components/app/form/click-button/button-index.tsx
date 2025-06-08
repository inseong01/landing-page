export default function ClickButton({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer text-right text-xs text-zinc-400 hover:text-zinc-500"
    >
      {text}
    </button>
  );
}

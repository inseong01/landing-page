export default function InputErrorMessage({ msg }: { msg: string }) {
  return (
    <span className="min-w-30 cursor-default text-left text-xs text-red-500">
      {msg}
    </span>
  );
}

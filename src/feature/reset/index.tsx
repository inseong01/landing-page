import { Outlet } from "react-router";

export default function ResetDisplay() {
  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <div className="flex w-full max-w-[350px] flex-col items-center justify-center gap-3">
        <Outlet />
      </div>
    </div>
  );
}

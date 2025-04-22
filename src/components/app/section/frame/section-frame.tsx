import { ReactNode } from "react";

export default function CommonSectionFrame({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex h-svh w-full cursor-default items-center justify-center bg-[#F5F5F5] py-24">
      {children}
    </section>
  );
}

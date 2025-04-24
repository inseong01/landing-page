import { ReactNode } from "react";

export default function CommonSectionFrame({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="ms:h-auto flex cursor-default items-center justify-center bg-[#F5F5F5] py-24 max-xl:text-center lg:h-auto xl:h-dvh xl:w-full xl:px-8">
      {children}
    </section>
  );
}

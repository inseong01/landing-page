import { ReactNode } from "react";

export default function StoryBookViewFrame({
  children,
}: {
  children: ReactNode;
}) {
  return <section className="relative h-[75vh] w-[100vh]">{children}</section>;
}

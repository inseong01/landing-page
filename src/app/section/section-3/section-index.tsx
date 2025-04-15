import { ReactNode } from "react";
import TabletDevice from "../../../components/app/device/tablet";

export default function TabletDeviceView({
  title,
  desc,
  isReverse,
  caution,
}: {
  title: ReactNode;
  desc: string;
  isReverse: boolean;
  caution?: string;
}) {
  return (
    <section className="flex h-svh w-full items-center justify-center bg-[#F5F5F5] py-24">
      <div
        className={`flex w-[1000px] items-center justify-between ${isReverse ? "flex-row-reverse" : "flex-row"} gap-20 break-keep`}
      >
        <div className="w-full">
          <TabletViewDiscription title={title} desc={desc} caution={caution} />
        </div>
        <div className="relative flex h-fit w-full items-center justify-center">
          <TabletDevice />
        </div>
      </div>
    </section>
  );
}
function TabletViewDiscription({
  title,
  desc,
  caution,
}: {
  title: ReactNode;
  desc: string;
  caution?: string;
}) {
  return (
    <>
      <div className="mb-12">
        <h2 className="mb-5 block text-5xl leading-14 font-bold text-[#5A80A5]">
          {title}
        </h2>
        <p className="text-base- w-60">{desc}</p>
      </div>
      {caution && <p className="text-[#666]">{caution}</p>}
    </>
  );
}
